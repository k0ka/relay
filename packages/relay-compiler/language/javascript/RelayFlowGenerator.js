/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

const babelGenerator = require('@babel/generator').default;
const FlattenTransform = require('../../transforms/FlattenTransform');
const IRVisitor = require('../../core/GraphQLIRVisitor');
const Profiler = require('../../core/GraphQLCompilerProfiler');
const RelayMaskTransform = require('../../transforms/RelayMaskTransform');
const RelayMatchTransform = require('../../transforms/RelayMatchTransform');
const RelayRefetchableFragmentTransform = require('../../transforms/RelayRefetchableFragmentTransform');
const RelayRelayDirectiveTransform = require('../../transforms/RelayRelayDirectiveTransform');

const invariant = require('invariant');
const nullthrows = require('nullthrows');
const t = require('@babel/types');

const {isAbstractType} = require('../../core/GraphQLSchemaUtils');
const {
  anyTypeAlias,
  exactObjectTypeAnnotation,
  exportType,
  importTypes,
  intersectionTypeAnnotation,
  lineComments,
  readOnlyArrayOfType,
  readOnlyObjectTypeProperty,
  unionTypeAnnotation,
} = require('./RelayFlowBabelFactories');
const {
  transformScalarType,
  transformInputType,
} = require('./RelayFlowTypeTransformers');
const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

import type {IRTransform} from '../../core/GraphQLCompilerContext';
import type {Fragment, Root} from '../../core/GraphQLIR';
import type {TypeGeneratorOptions} from '../RelayLanguagePluginInterface';
import type {GraphQLEnumType} from 'graphql';

export type State = {|
  ...TypeGeneratorOptions,
  +generatedFragments: Set<string>,
  +generatedInputObjectTypes: {
    [name: string]: GraphQLInputObjectType | 'pending',
  },
  +usedEnums: {[name: string]: GraphQLEnumType},
  +usedFragments: Set<string>,
|};

function generate(
  node: Root | Fragment,
  options: TypeGeneratorOptions,
): string {
  const ast = IRVisitor.visit(node, createVisitor(options));
  return babelGenerator(ast).code;
}

type Selection = {
  key: string,
  schemaName?: string,
  value?: any,
  nodeType?: any,
  conditional?: boolean,
  concreteType?: string,
  ref?: string,
  nodeSelections?: ?SelectionMap,
};
type SelectionMap = Map<string, Selection>;

function makeProp(
  {key, schemaName, value, conditional, nodeType, nodeSelections}: Selection,
  state: State,
  unmasked: boolean,
  concreteType?: string,
) {
  if (nodeType) {
    value = transformScalarType(
      nodeType,
      state,
      selectionsToBabel(
        [Array.from(nullthrows(nodeSelections).values())],
        state,
        unmasked,
      ),
    );
  }
  if (schemaName === '__typename' && concreteType) {
    value = t.stringLiteralTypeAnnotation(concreteType);
  }
  const typeProperty = readOnlyObjectTypeProperty(key, value);
  if (conditional) {
    typeProperty.optional = true;
  }
  return typeProperty;
}

const isTypenameSelection = selection => selection.schemaName === '__typename';
const hasTypenameSelection = selections => selections.some(isTypenameSelection);
const onlySelectsTypename = selections => selections.every(isTypenameSelection);

function selectionsToBabel(
  selections,
  state: State,
  unmasked: boolean,
  refTypeName?: string,
) {
  const baseFields = new Map();
  const byConcreteType = {};

  flattenArray(selections).forEach(selection => {
    const {concreteType} = selection;
    if (concreteType) {
      byConcreteType[concreteType] = byConcreteType[concreteType] ?? [];
      byConcreteType[concreteType].push(selection);
    } else {
      const previousSel = baseFields.get(selection.key);

      baseFields.set(
        selection.key,
        previousSel ? mergeSelection(selection, previousSel) : selection,
      );
    }
  });

  const types = [];

  if (
    Object.keys(byConcreteType).length &&
    onlySelectsTypename(Array.from(baseFields.values())) &&
    (hasTypenameSelection(Array.from(baseFields.values())) ||
      Object.keys(byConcreteType).every(type =>
        hasTypenameSelection(byConcreteType[type]),
      ))
  ) {
    const typenameAliases = new Set();
    for (const concreteType in byConcreteType) {
      types.push(
        groupRefs([
          ...Array.from(baseFields.values()),
          ...byConcreteType[concreteType],
        ]).map(selection => {
          if (selection.schemaName === '__typename') {
            typenameAliases.add(selection.key);
          }
          return makeProp(selection, state, unmasked, concreteType);
        }),
      );
    }
    // It might be some other type then the listed concrete types. Ideally, we
    // would set the type to diff(string, set of listed concrete types), but
    // this doesn't exist in Flow at the time.
    types.push(
      Array.from(typenameAliases).map(typenameAlias => {
        const otherProp = readOnlyObjectTypeProperty(
          typenameAlias,
          t.stringLiteralTypeAnnotation('%other'),
        );
        otherProp.leadingComments = lineComments(
          "This will never be '%other', but we need some",
          'value in case none of the concrete values match.',
        );
        return otherProp;
      }),
    );
  } else {
    let selectionMap = selectionsToMap(Array.from(baseFields.values()));
    for (const concreteType in byConcreteType) {
      selectionMap = mergeSelections(
        selectionMap,
        selectionsToMap(
          byConcreteType[concreteType].map(sel => ({
            ...sel,
            conditional: true,
          })),
        ),
      );
    }
    const selectionMapValues = groupRefs(Array.from(selectionMap.values())).map(
      sel =>
        isTypenameSelection(sel) && sel.concreteType
          ? makeProp(
              {...sel, conditional: false},
              state,
              unmasked,
              sel.concreteType,
            )
          : makeProp(sel, state, unmasked),
    );
    types.push(selectionMapValues);
  }

  return unionTypeAnnotation(
    types.map(props => {
      if (refTypeName) {
        props.push(
          readOnlyObjectTypeProperty(
            '$refType',
            t.genericTypeAnnotation(t.identifier(refTypeName)),
          ),
        );
      }
      return unmasked
        ? t.objectTypeAnnotation(props)
        : exactObjectTypeAnnotation(props);
    }),
  );
}

function mergeSelection(a: ?Selection, b: Selection): Selection {
  if (!a) {
    return {
      ...b,
      conditional: true,
    };
  }
  return {
    ...a,
    nodeSelections: a.nodeSelections
      ? mergeSelections(a.nodeSelections, nullthrows(b.nodeSelections))
      : null,
    conditional: a.conditional && b.conditional,
  };
}

function mergeSelections(a: SelectionMap, b: SelectionMap): SelectionMap {
  const merged = new Map();
  for (const [key, value] of a.entries()) {
    merged.set(key, value);
  }
  for (const [key, value] of b.entries()) {
    merged.set(key, mergeSelection(a.get(key), value));
  }
  return merged;
}

function isPlural(node: Fragment): boolean {
  return Boolean(node.metadata && node.metadata.plural);
}

function createVisitor(options: TypeGeneratorOptions) {
  const state = {
    customScalars: options.customScalars,
    enumsHasteModule: options.enumsHasteModule,
    existingFragmentNames: options.existingFragmentNames,
    generatedFragments: new Set(),
    generatedInputObjectTypes: {},
    optionalInputFields: options.optionalInputFields,
    usedEnums: {},
    usedFragments: new Set(),
    useHaste: options.useHaste,
    useSingleArtifactDirectory: options.useSingleArtifactDirectory,
    noFutureProofEnums: options.noFutureProofEnums,
  };

  return {
    leave: {
      Root(node) {
        const inputVariablesType = generateInputVariablesType(node, state);
        const inputObjectTypes = generateInputObjectTypes(state);
        const responseType = exportType(
          `${node.name}Response`,
          selectionsToBabel(node.selections, state, false),
        );
        const operationType = exportType(
          node.name,
          exactObjectTypeAnnotation([
            t.objectTypeProperty(
              t.identifier('variables'),
              t.genericTypeAnnotation(t.identifier(`${node.name}Variables`)),
            ),
            t.objectTypeProperty(
              t.identifier('response'),
              t.genericTypeAnnotation(t.identifier(`${node.name}Response`)),
            ),
          ]),
        );
        return t.program([
          ...getFragmentImports(state),
          ...getEnumDefinitions(state),
          ...inputObjectTypes,
          inputVariablesType,
          responseType,
          operationType,
        ]);
      },
      Fragment(node) {
        let selections = flattenArray(node.selections);
        const numConecreteSelections = selections.filter(s => s.concreteType)
          .length;
        selections = selections.map(selection => {
          if (
            numConecreteSelections <= 1 &&
            isTypenameSelection(selection) &&
            !isAbstractType(node.type)
          ) {
            return [
              {
                ...selection,
                concreteType: node.type.toString(),
              },
            ];
          }
          return [selection];
        });
        state.generatedFragments.add(node.name);
        const refTypeName = getRefTypeName(node.name);
        const refType = t.declareExportDeclaration(
          t.declareOpaqueType(
            t.identifier(refTypeName),
            null,
            t.genericTypeAnnotation(t.identifier('FragmentReference')),
          ),
        );
        const unmasked = node.metadata && node.metadata.mask === false;
        const baseType = selectionsToBabel(
          selections,
          state,
          unmasked,
          unmasked ? undefined : refTypeName,
        );
        const type = isPlural(node) ? readOnlyArrayOfType(baseType) : baseType;
        const importedTypes = ['FragmentReference'];
        return t.program([
          ...getFragmentImports(state),
          ...getEnumDefinitions(state),
          importTypes(importedTypes, 'relay-runtime'),
          refType,
          exportType(node.name, type),
        ]);
      },
      InlineFragment(node) {
        const typeCondition = node.typeCondition;
        return flattenArray(node.selections).map(typeSelection => {
          return isAbstractType(typeCondition)
            ? {
                ...typeSelection,
                conditional: true,
              }
            : {
                ...typeSelection,
                concreteType: typeCondition.toString(),
              };
        });
      },
      Condition(node) {
        return flattenArray(node.selections).map(selection => {
          return {
            ...selection,
            conditional: true,
          };
        });
      },
      ScalarField(node) {
        return [
          {
            key: node.alias ?? node.name,
            schemaName: node.name,
            value: transformScalarType(node.type, state),
          },
        ];
      },
      LinkedField(node) {
        return [
          {
            key: node.alias ?? node.name,
            schemaName: node.name,
            nodeType: node.type,
            nodeSelections: selectionsToMap(flattenArray(node.selections)),
          },
        ];
      },
      ModuleImport(node) {
        return [
          {
            key: '__fragmentPropName',
            conditional: true,
            value: transformScalarType(GraphQLString, state),
          },
          {
            key: '__module_component',
            conditional: true,
            value: transformScalarType(GraphQLString, state),
          },
          {
            key: '__fragments_' + node.name,
            ref: node.name,
          },
        ];
      },
      FragmentSpread(node) {
        state.usedFragments.add(node.name);
        return [
          {
            key: '__fragments_' + node.name,
            ref: node.name,
          },
        ];
      },
    },
  };
}

function selectionsToMap(selections: $ReadOnlyArray<Selection>): SelectionMap {
  const map = new Map();
  selections.forEach(selection => {
    const previousSel = map.get(selection.key);
    map.set(
      selection.key,
      previousSel ? mergeSelection(previousSel, selection) : selection,
    );
  });
  return map;
}

function flattenArray<T>(
  arrayOfArrays: $ReadOnlyArray<$ReadOnlyArray<T>>,
): $ReadOnlyArray<T> {
  const result = [];
  arrayOfArrays.forEach(array => result.push(...array));
  return result;
}

function generateInputObjectTypes(state: State) {
  return Object.keys(state.generatedInputObjectTypes).map(typeIdentifier => {
    const inputObjectType = state.generatedInputObjectTypes[typeIdentifier];
    invariant(
      typeof inputObjectType !== 'string',
      'RelayCompilerFlowGenerator: Expected input object type to have been' +
        ' defined before calling `generateInputObjectTypes`',
    );
    return exportType(typeIdentifier, inputObjectType);
  });
}

function generateInputVariablesType(node: Root, state: State) {
  return exportType(
    `${node.name}Variables`,
    exactObjectTypeAnnotation(
      node.argumentDefinitions.map(arg => {
        const property = t.objectTypeProperty(
          t.identifier(arg.name),
          transformInputType(arg.type, state),
        );
        if (!(arg.type instanceof GraphQLNonNull)) {
          property.optional = true;
        }
        return property;
      }),
    ),
  );
}

function groupRefs(props): Array<Selection> {
  const result = [];
  const refs = [];
  props.forEach(prop => {
    if (prop.ref) {
      refs.push(prop.ref);
    } else {
      result.push(prop);
    }
  });
  if (refs.length > 0) {
    const value = intersectionTypeAnnotation(
      refs.map(ref =>
        t.genericTypeAnnotation(t.identifier(getRefTypeName(ref))),
      ),
    );
    result.push({
      key: '$fragmentRefs',
      conditional: false,
      value,
    });
  }
  return result;
}

function getFragmentImports(state: State) {
  const imports = [];
  if (state.usedFragments.size > 0) {
    const usedFragments = Array.from(state.usedFragments).sort();
    for (const usedFragment of usedFragments) {
      const refTypeName = getRefTypeName(usedFragment);
      if (!state.generatedFragments.has(usedFragment)) {
        if (state.useHaste && state.existingFragmentNames.has(usedFragment)) {
          // TODO(T22653277) support non-haste environments when importing
          // fragments
          imports.push(importTypes([refTypeName], usedFragment + '.graphql'));
        } else if (
          state.useSingleArtifactDirectory &&
          state.existingFragmentNames.has(usedFragment)
        ) {
          imports.push(
            importTypes([refTypeName], './' + usedFragment + '.graphql'),
          );
        } else {
          imports.push(anyTypeAlias(refTypeName));
        }
      }
    }
  }
  return imports;
}

function getEnumDefinitions({
  enumsHasteModule,
  usedEnums,
  noFutureProofEnums,
}: State) {
  const enumNames = Object.keys(usedEnums).sort();
  if (enumNames.length === 0) {
    return [];
  }
  if (enumsHasteModule) {
    return [importTypes(enumNames, enumsHasteModule)];
  }
  return enumNames.map(name => {
    const values = usedEnums[name].getValues().map(({value}) => value);
    values.sort();
    if (!noFutureProofEnums) {
      values.push('%future added value');
    }
    return exportType(
      name,
      t.unionTypeAnnotation(
        values.map(value => t.stringLiteralTypeAnnotation(value)),
      ),
    );
  });
}

function getRefTypeName(name: string): string {
  return `${name}$ref`;
}

const FLOW_TRANSFORMS: Array<IRTransform> = [
  RelayRelayDirectiveTransform.transform,
  RelayMaskTransform.transform,
  RelayMatchTransform.transform,
  FlattenTransform.transformWithOptions({}),
  RelayRefetchableFragmentTransform.transform,
];

module.exports = {
  generate: Profiler.instrument(generate, 'RelayFlowGenerator.generate'),
  transforms: FLOW_TRANSFORMS,
};
