(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1142:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),p=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||r;return t?i.a.createElement(u,c(c({ref:n},b),{},{components:t})):i.a.createElement(u,c({ref:n},b))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<r;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},346:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(8),r=(t(0),t(1142)),o={id:"pagination-container",title:"Pagination Container",original_id:"pagination-container"},c={unversionedId:"pagination-container",id:"version-v1.6.1/pagination-container",isDocsHomePage:!1,title:"Pagination Container",description:"Pagination Container is also a higher-order component, similar to a Fragment Container, that is designed to simplify the workflow of loading more items in a list \u2014 in many cases, we don't want to fetch all the data at once but lazily load more data. It relies on a GraphQL server exposing connections in a standardized way. For a detailed spec, please check out this page.",source:"@site/versioned_docs/version-v1.6.1/Modern-PaginationContainer.md",slug:"/pagination-container",permalink:"/docs/v1.6.1/pagination-container",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v1.6.1/Modern-PaginationContainer.md",version:"v1.6.1",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1620848888,sidebar:"version-v1.6.1/docs",previous:{title:"Refetch Container",permalink:"/docs/v1.6.1/refetch-container"},next:{title:"Mutations",permalink:"/docs/v1.6.1/mutations"}},l=[{value:"<code>@connection</code>",id:"connection",children:[{value:"Examples",id:"examples",children:[]}]},{value:"<code>createPaginationContainer</code>",id:"createpaginationcontainer",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Available Props",id:"available-props",children:[]}]},{value:"<code>hasMore()</code>",id:"hasmore",children:[]},{value:"<code>isLoading</code>",id:"isloading",children:[]},{value:"<code>loadMore</code>",id:"loadmore",children:[{value:"Arguments:",id:"arguments-1",children:[]}]},{value:"<code>refetchConnection</code>",id:"refetchconnection",children:[{value:"Arguments:",id:"arguments-2",children:[]}]},{value:"Pagination Example",id:"pagination-example",children:[]}],b={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Pagination Container is also a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/higher-order-components.html"}),"higher-order component"),", similar to a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./fragment-container"}),"Fragment Container"),", that is designed to simplify the workflow of loading more items in a list \u2014 in many cases, we don't want to fetch all the data at once but lazily load more data. It relies on a GraphQL server exposing connections in a standardized way. For a detailed spec, please check out ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/relay/graphql/connections.htm"}),"this page"),"."),Object(r.b)("p",null,"Table of Contents:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#connection"}),Object(r.b)("inlineCode",{parentName:"a"},"@connection"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#createpaginationcontainer"}),Object(r.b)("inlineCode",{parentName:"a"},"createPaginationContainer"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#hasmore"}),Object(r.b)("inlineCode",{parentName:"a"},"hasMore"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#isloading"}),Object(r.b)("inlineCode",{parentName:"a"},"isLoading"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#loadmore"}),Object(r.b)("inlineCode",{parentName:"a"},"loadMore"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#refetchconnection"}),Object(r.b)("inlineCode",{parentName:"a"},"refetchConnection"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#pagination-example"}),"Pagination Example"))),Object(r.b)("h2",{id:"connection"},Object(r.b)("inlineCode",{parentName:"h2"},"@connection")),Object(r.b)("p",null,"Pagination Container works in a very similar way to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./#fragment-container"}),"Fragment Container")," in that you also specify the data requirements for a component via GraphQL fragments in the ",Object(r.b)("inlineCode",{parentName:"p"},"fragmentSpec"),"."),Object(r.b)("p",null,"However, when ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#createpaginationcontainer"}),"specifying connection fragments")," for a Pagination Container, it is expected that at least one of the fragments contains a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/relay/graphql/connections.htm"}),"GraphQL connection")," to paginate over, and that that the connection field is annotated with a ",Object(r.b)("inlineCode",{parentName:"p"},"@connection")," directive."),Object(r.b)("p",null,"The purpose of the ",Object(r.b)("inlineCode",{parentName:"p"},"@connection")," directive is to allow Relay to uniquely identify different connections under a parent type. The ",Object(r.b)("inlineCode",{parentName:"p"},"@connection")," directive takes 2 arguments that help identify the connection:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"@connection(key: String!, filters: [String])\n\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key"),": ",Object(r.b)("strong",{parentName:"li"},"Required")," String that serves as a unique identifier for the connection under the parent field type. A good practice could be ",Object(r.b)("inlineCode",{parentName:"li"},"<ComponentName>_<fieldName | fieldAlias>"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filters"),": ",Object(r.b)("strong",{parentName:"li"},"Optional")," Array of strings that belong to the set of argument variables defined for the connection field (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"orderBy"),", ",Object(r.b)("inlineCode",{parentName:"li"},"searchTerm"),", etc). The values for the variables specified in this array will be used alongside the user-supplied ",Object(r.b)("inlineCode",{parentName:"li"},"key")," to uniquely identify a connection. If ",Object(r.b)("inlineCode",{parentName:"li"},"filters")," is not provided, by default Relay will use the set of all of the arguments the connection field takes, excluding pagination specific arguments (i.e. ",Object(r.b)("inlineCode",{parentName:"li"},"first"),"/",Object(r.b)("inlineCode",{parentName:"li"},"last"),", ",Object(r.b)("inlineCode",{parentName:"li"},"after"),"/",Object(r.b)("inlineCode",{parentName:"li"},"before"),").")),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("p",null,"Specifying just the ",Object(r.b)("inlineCode",{parentName:"p"},"key"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'fragment Feed_user on User {\n  # This connection, under a specific User, will be uniquely identified by\n  # the key "Feed_feed" and the value of `$orderBy` (given that no `filters` were provided)\n  feed(\n    first: $count\n    after: $cursor\n    orderby: $orderBy\n  ) @connection(key: "Feed_feed") {\n    edges {\n      node {\n        id,\n        ...Story_story\n      }\n  }\n}\n')),Object(r.b)("p",null,"Specifying ",Object(r.b)("inlineCode",{parentName:"p"},"key")," and ",Object(r.b)("inlineCode",{parentName:"p"},"filters"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'fragment Feed_user on User {\n  # This connection, under a specific User, will be uniquely identified by\n  # the key "Feed_feed" and /only/ the value of `$searchTerm`, i.e.\n  # different values of `orderBy` will not distinguish connections.\n  feed(\n    first: $count\n    after: $cursor\n    orderby: $orderBy\n    search_term: $searchTerm\n  ) @connection(key: "Feed_feed", filters: [\'searchTerm\']) {\n    edges {\n      node {\n        id,\n        ...Story_story\n      }\n  }\n}\n')),Object(r.b)("h2",{id:"createpaginationcontainer"},Object(r.b)("inlineCode",{parentName:"h2"},"createPaginationContainer")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"createPaginationContainer")," has the following signature:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"createPaginationContainer(\n  component: ReactComponentClass,\n  fragmentSpec: GraphQLTaggedNode | {[string]: GraphQLTaggedNode},\n  connectionConfig: ConnectionConfig,\n): ReactComponentClass;\n\ntype ConnectionConfig = {\n  direction?: 'backward' | 'forward',\n  getConnectionFromProps?: (props: Object) => ?ConnectionData,\n  getFragmentVariables?: (previousVariables: Object, totalCount: number) => Object,\n  getVariables: (\n    props: Object,\n    paginationInfo: {count: number, cursor: ?string},\n    fragmentVariables: Object,\n  ) => Object,\n  query: GraphQLTaggedNode,\n};\n\ntype ConnectionData = {\n  edges?: ?Array<any>,\n  pageInfo?: ?{\n    endCursor: ?string,\n    hasNextPage: boolean,\n    hasPreviousPage: boolean,\n    startCursor: ?string,\n  },\n};\n")),Object(r.b)("h3",{id:"arguments"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"component"),": The React Component ",Object(r.b)("em",{parentName:"li"},"class")," of the component requiring the fragment data."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fragmentSpec"),": Specifies the data requirements for the Component via a GraphQL fragment. It is expected that one of the fragments specified here will contain a ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#connection"}),Object(r.b)("inlineCode",{parentName:"a"},"@connection"))," for pagination. The required data will be available on the component as props that match the shape of the provided fragment. ",Object(r.b)("inlineCode",{parentName:"li"},"fragmentSpec")," can be one of 2 things:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"graphql")," tagged fragment. If the fragment uses the name convention ",Object(r.b)("inlineCode",{parentName:"li"},"<FileName><...>_<propName>"),", the fragment's data will be available to the Component as a prop with the given ",Object(r.b)("inlineCode",{parentName:"li"},"<propName>"),".\nIf the fragment name doesn't specify a prop name, the data will be available as a ",Object(r.b)("inlineCode",{parentName:"li"},"data")," prop."),Object(r.b)("li",{parentName:"ul"},"An object whose keys are prop names and values are ",Object(r.b)("inlineCode",{parentName:"li"},"graphql")," tagged fragments. Each key specified in this object will correspond to a prop available to the resulting Component."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Note:")," To enable ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"./relay-compat"}),"compatibility mode"),", ",Object(r.b)("inlineCode",{parentName:"li"},"relay-compiler")," enforces fragments to be named as ",Object(r.b)("inlineCode",{parentName:"li"},"<FileName>_<propName>"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"connectionConfig"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"direction"),': Either "forward" to indicate forward pagination using after/first, or "backward" to indicate backwards pagination using before/last. If not provided, Relay will infer the direction based on the provided ',Object(r.b)("inlineCode",{parentName:"li"},"@connection")," directive. ",Object(r.b)("strong",{parentName:"li"},"Note:")," ",Object(r.b)("inlineCode",{parentName:"li"},"direction")," is not optional in ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"./relay-compat"}),"compatibility mode"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getConnectionFromProps"),": Function that should indicate which connection to paginate over, given the fragment props (i.e. the props corresponding to the ",Object(r.b)("inlineCode",{parentName:"li"},"fragmentSpec"),"). This is necessary in most cases because the Relay can't automatically tell which connection you mean to paginate over (a container might fetch multiple fragments and connections, but can only paginate one of them). If not provided, Relay will try infer the correct connection to paginate over based on the provided ",Object(r.b)("inlineCode",{parentName:"li"},"@connection")," directive. See our ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#pagination-example"}),"example")," for more details. ",Object(r.b)("strong",{parentName:"li"},"Note:")," ",Object(r.b)("inlineCode",{parentName:"li"},"getConnectionFromProps")," is not optional in ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"./relay-compat"}),"compatibility mode"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getFragmentVariables"),": Function that should return the bag of variables  to use for reading out the data from the store when re-rendering the component. This function takes the previous set of variables passed to the pagination ",Object(r.b)("inlineCode",{parentName:"li"},"query"),", and the number of elements that have been fetched in total so far. Specifically, this indicates which variables to use when reading out the data from the\nlocal data store ",Object(r.b)("em",{parentName:"li"},"after")," the new pagination ",Object(r.b)("inlineCode",{parentName:"li"},"query")," has been fetched. If not specified, Relay will default to using all of the previous variables and using the total count for the ",Object(r.b)("inlineCode",{parentName:"li"},"count")," variable. This option is analogous to ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"./refetch-container#refetch"}),Object(r.b)("inlineCode",{parentName:"a"},"renderVariables"))," in the Refetch Container. See our ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#pagination-example"}),"example")," for more details."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getVariables"),": Function that should return the variables to pass to the pagination ",Object(r.b)("inlineCode",{parentName:"li"},"query")," when fetching it from the server, given the current ",Object(r.b)("inlineCode",{parentName:"li"},"props"),", ",Object(r.b)("inlineCode",{parentName:"li"},"count")," and ",Object(r.b)("inlineCode",{parentName:"li"},"cursor"),". You may set whatever variables here, as well as modify the defaults to use for after/first/before/last arguments. See our ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#pagination-example"}),"example")," for more details."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"query"),": A ",Object(r.b)("inlineCode",{parentName:"li"},"graphql")," tagged query to be used as the pagination query to fetch more data upon calling ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#loadmore"}),Object(r.b)("inlineCode",{parentName:"a"},"loadMore")),".")))),Object(r.b)("h3",{id:"available-props"},"Available Props"),Object(r.b)("p",null,"The Component resulting from ",Object(r.b)("inlineCode",{parentName:"p"},"createPaginationContainer")," will receive the following ",Object(r.b)("inlineCode",{parentName:"p"},"props"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"type Props = {\n  relay: {\n    environment: Environment,\n    hasMore(), // See #hasMore section\n    isLoading(), // See #isLoading section\n    loadMore(), // See #loadMore section\n    refetchConnection(), // See #refetchConnection section\n  },\n  // Additional props as specified by the fragmentSpec\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"relay"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"environment"),": The current ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"./relay-environment"}),"Relay Environment")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hasMore"),": See ",Object(r.b)("inlineCode",{parentName:"li"},"hasMore")," ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#hasmore"}),"docs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isLoading"),": See ",Object(r.b)("inlineCode",{parentName:"li"},"isLoading")," ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#isloading"}),"docs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"loadMore"),": See ",Object(r.b)("inlineCode",{parentName:"li"},"loadMore")," ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#loadmore"}),"docs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"refetchConnection "),": See ",Object(r.b)("inlineCode",{parentName:"li"},"refetchConnection")," ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#refetchconnection"}),"docs"))))),Object(r.b)("h2",{id:"hasmore"},Object(r.b)("inlineCode",{parentName:"h2"},"hasMore()")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"hasMore")," is a function available on the ",Object(r.b)("inlineCode",{parentName:"p"},"relay")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#available-props"}),"prop"),". This function indicates wether there are more pages to fetch from the server or not."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"hasMore: () => boolean,\n\n")),Object(r.b)("h2",{id:"isloading"},Object(r.b)("inlineCode",{parentName:"h2"},"isLoading")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"isLoading")," is a function available on the ",Object(r.b)("inlineCode",{parentName:"p"},"relay")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#available-props"}),"prop"),". This function indicates if a previous call to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#loadmore"}),Object(r.b)("inlineCode",{parentName:"a"},"loadMore()"))," is still pending. This is convenient for avoiding duplicate load calls."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"isLoading: () => boolean,\n\n")),Object(r.b)("h2",{id:"loadmore"},Object(r.b)("inlineCode",{parentName:"h2"},"loadMore")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"loadMore")," is a function available on the ",Object(r.b)("inlineCode",{parentName:"p"},"relay")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#available-props"}),"prop"),". You can call ",Object(r.b)("inlineCode",{parentName:"p"},"loadMore()")," to fetch more items from the server based on the ",Object(r.b)("inlineCode",{parentName:"p"},"connectionConfig")," provided to the container. This will return null if there are no more items to fetch, otherwise it will fetch more items and return a Disposable that can be used to cancel the fetch."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"loadMore(pageSize: number, callback: ?(error: ?Error) => void): ?Disposable\n\n")),Object(r.b)("h3",{id:"arguments-1"},"Arguments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageSize"),": The number of ",Object(r.b)("strong",{parentName:"li"},"additional")," items to fetch (not the total)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"callback"),": Function called when the new page has been fetched. If an error occurred during refetch, this function will receive that error as an argument.")),Object(r.b)("h2",{id:"refetchconnection"},Object(r.b)("inlineCode",{parentName:"h2"},"refetchConnection")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"refetchConnection")," is a function available on the ",Object(r.b)("inlineCode",{parentName:"p"},"relay")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#available-props"}),"prop"),". You can call ",Object(r.b)("inlineCode",{parentName:"p"},"refetchConnection")," to restart pagination on a connection from scratch, with optionally a completely new set of variables to pass to the pagination ",Object(r.b)("inlineCode",{parentName:"p"},"query"),". This is useful for example if you are paginating over a collection based on a userID and the userID changes, you'd want to start paginating over the new collection for the new user."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"refetchConnection:(\n  count: number,\n  callback: (error: ?Error) => void,\n  refetchVariables: ?Variables,\n) => ?Disposable,\n\n")),Object(r.b)("h3",{id:"arguments-2"},"Arguments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"totalCount"),": The total number of elements to fetch"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"callback"),": Function called when the new page has been fetched. If an error occurred during refetch, this function will receive that error as an argument."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"refetchVariables"),": A potentially new bag of variables to pass to the pagination ",Object(r.b)("inlineCode",{parentName:"li"},"query")," when fetching it from the server.")),Object(r.b)("h2",{id:"pagination-example"},"Pagination Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// Feed.js\nimport {createPaginationContainer, graphql} from \'react-relay\';\n\nclass Feed extends React.Component {\n  render() {\n    return (\n      <div>\n        {this.props.user.feed.edges.map(\n          edge => <Story story={edge.node} key={edge.node.id} />\n        )}\n        <button\n          onPress={() => this._loadMore()}\n          title="Load More"\n        />\n      </div>\n    );\n  }\n\n  _loadMore() {\n    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {\n      return;\n    }\n\n    this.props.relay.loadMore(\n      10,  // Fetch the next 10 feed items\n      error => {\n        console.log(error);\n      },\n    );\n  }\n}\n\nmodule.exports = createPaginationContainer(\n  Feed,\n  {\n    user: graphql`\n      fragment Feed_user on User\n      @argumentDefinitions(\n        count: {type: "Int", defaultValue: 10}\n        cursor: {type: "ID"}\n        orderby: {type: "[FriendsOrdering]", defaultValue: [DATE_ADDED]}\n      ) {\n        feed(\n          first: $count\n          after: $cursor\n          orderby: $orderBy # Non-pagination variables\n        ) @connection(key: "Feed_feed") {\n          edges {\n            node {\n              id\n              ...Story_story\n            }\n          }\n        }\n      }\n    `,\n  },\n  {\n    direction: \'forward\',\n    getConnectionFromProps(props) {\n      return props.user && props.user.feed;\n    },\n    // This is also the default implementation of `getFragmentVariables` if it isn\'t provided.\n    getFragmentVariables(prevVars, totalCount) {\n      return {\n        ...prevVars,\n        count: totalCount,\n      };\n    },\n    getVariables(props, {count, cursor}, fragmentVariables) {\n      return {\n        count,\n        cursor,\n        orderBy: fragmentVariables.orderBy,\n        // userID isn\'t specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.\n        userID: fragmentVariables.userID,\n      };\n    },\n    query: graphql`\n      # Pagination query to be fetched upon calling `loadMore`.\n      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.\n      query FeedPaginationQuery(\n        $count: Int!\n        $cursor: ID\n        $orderBy: [FriendsOrdering]!\n        $userID: ID!\n      ) {\n        user: node(id: $userID) {\n          ...Feed_user @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)\n        }\n      }\n    `\n  }\n);\n')))}p.isMDXComponent=!0}}]);