(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),h=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=h(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=h(n),d=a,b=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1143:function(e,t,n){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=i(n(1146));const o=["internal","external"];let c;try{c=n(1144).usePluginData}catch(p){c=null}function s(e){return h(e),u()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function h(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function u(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}t.fbContent=s,t.fbInternalOnly=function(e){return s({internal:e})},t.validateFbContentArgs=h,t.isInternal=u,t.FbInternalOnly=function(e){return u()?e.children:null},t.OssOnly=function(e){return u()?null:e.children}}).call(this,n(1145))},1144:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var a=n(22);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},1145:function(e,t){var n,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var s,l=[],h=!1,u=-1;function p(){h&&s&&(h=!1,s.length?l=s.concat(l):u=-1,l.length&&d())}function d(){if(!h){var e=c(p);h=!0;for(var t=l.length;t;){for(s=l,l=[];++u<t;)s&&s[u].run();u=-1,t=l.length}s=null,h=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new b(e,t)),1!==l.length||h||c(d)},b.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},1146:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{s(a.next(e))}catch(t){i(t)}}function c(e){try{s(a.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(1147);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1147:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{s(a.next(e))}catch(t){i(t)}}function c(e){try{s(a.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,i=0;const o={};t.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=i++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,c),n}))}},1148:function(e,t,n){"use strict";n(61);var a=n(1143),r=n(0);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var c=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},l=function(){return r.createElement(o,null,r.createElement(s,null),r.createElement(c,null))},h=function(){return r.createElement(o,null,r.createElement(c,null))};t.a=function(){return Object(a.fbContent)({internal:r.createElement(l,null),external:r.createElement(h,null)})}},200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(1142)),o=n(1148),c={id:"thinking-in-graphql",title:"Thinking in GraphQL",slug:"/principles-and-architecture/thinking-in-graphql/"},s={unversionedId:"principles-and-architecture/thinking-in-graphql",id:"version-v11.0.0/principles-and-architecture/thinking-in-graphql",isDocsHomePage:!1,title:"Thinking in GraphQL",description:"GraphQL presents new ways for clients to fetch data by focusing on the needs of product developers and client applications. It provides a way for developers to specify the precise data needed for a view and enables a client to fetch that data in a single network request. Compared to traditional approaches such as REST, GraphQL helps applications to fetch data more efficiently (compared to resource-oriented REST approaches) and avoid duplication of server logic (which can occur with custom endpoints). Furthermore, GraphQL helps developers to decouple product code and server logic. For example, a product can fetch more or less information without requiring a change to every relevant server endpoint. It's a great way to fetch data.",source:"@site/versioned_docs/version-v11.0.0/principles-and-architecture/thinking-in-graphql.md",slug:"/principles-and-architecture/thinking-in-graphql/",permalink:"/docs/principles-and-architecture/thinking-in-graphql/",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/principles-and-architecture/thinking-in-graphql.md",version:"v11.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1620848888,sidebar:"version-v11.0.0/docs",previous:{title:"Debugging Declarative Mutation Directives",permalink:"/docs/debugging/declarative-mutation-directives/"},next:{title:"Thinking in Relay",permalink:"/docs/principles-and-architecture/thinking-in-relay/"}},l=[{value:"Fetching Data",id:"fetching-data",children:[]},{value:"Client Caching",id:"client-caching",children:[]},{value:"Cache Consistency",id:"cache-consistency",children:[{value:"Caching A Graph",id:"caching-a-graph",children:[]},{value:"Using The Cache",id:"using-the-cache",children:[]},{value:"Populating The Cache",id:"populating-the-cache",children:[]},{value:"Reading From Cache",id:"reading-from-cache",children:[]},{value:"Cache Updates",id:"cache-updates",children:[]}]},{value:"Data/View Consistency",id:"dataview-consistency",children:[{value:"Achieving View Consistency",id:"achieving-view-consistency",children:[]}]},{value:"Mutations",id:"mutations",children:[]},{value:"Data-Fetching APIs",id:"data-fetching-apis",children:[]}],h={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"GraphQL presents new ways for clients to fetch data by focusing on the needs of product developers and client applications. It provides a way for developers to specify the precise data needed for a view and enables a client to fetch that data in a single network request. Compared to traditional approaches such as REST, GraphQL helps applications to fetch data more efficiently (compared to resource-oriented REST approaches) and avoid duplication of server logic (which can occur with custom endpoints). Furthermore, GraphQL helps developers to decouple product code and server logic. For example, a product can fetch more or less information without requiring a change to every relevant server endpoint. It's a great way to fetch data."),Object(i.b)("p",null,"In this article we'll explore what it means to build a GraphQL client framework and how this compares to clients for more traditional REST systems. Along the way we'll look at the design decisions behind Relay and see that it's not just a GraphQL client but also a framework for ",Object(i.b)("em",{parentName:"p"},"declarative data-fetching"),". Let's start at the beginning and fetch some data!"),Object(i.b)("h2",{id:"fetching-data"},"Fetching Data"),Object(i.b)("p",null,"Imagine we have a simple application that fetches a list of stories, and some details about each one. Here's how that might look in resource-oriented REST:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// Fetch the list of story IDs but not their details:\nrest.get(\'/stories\').then(stories =>\n  // This resolves to a list of items with linked resources:\n  // `[ { href: "http://.../story/1" }, ... ]`\n  Promise.all(stories.map(story =>\n    rest.get(story.href) // Follow the links\n  ))\n).then(stories => {\n  // This resolves to a list of story items:\n  // `[ { id: "...", text: "..." } ]`\n  console.log(stories);\n});\n')),Object(i.b)("p",null,"Note that this approach requires ",Object(i.b)("em",{parentName:"p"},"n+1")," requests to the server: 1 to fetch the list, and ",Object(i.b)("em",{parentName:"p"},"n")," to fetch each item. With GraphQL we can fetch the same data in a single network request to the server (without creating a custom endpoint that we'd then have to maintain):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'graphql.get(`query { stories { id, text } }`).then(\n  stories => {\n    // A list of story items:\n    // `[ { id: "...", text: "..." } ]`\n    console.log(stories);\n  }\n);\n')),Object(i.b)("p",null,"So far we're just using GraphQL as a more efficient version of typical REST approaches. Note two important benefits in the GraphQL version:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All data is fetched in a single round trip."),Object(i.b)("li",{parentName:"ul"},"The client and server are decoupled: the client specifies the data needed instead of ",Object(i.b)("em",{parentName:"li"},"relying on")," the server endpoint to return the correct data.")),Object(i.b)("p",null,"For a simple application that's already a nice improvement."),Object(i.b)("h2",{id:"client-caching"},"Client Caching"),Object(i.b)("p",null,"Repeatedly refetching information from the server can get quite slow. For example, navigating from the list of stories, to a list item, and back to the list of stories means we have to refetch the whole list. We'll solve this with the standard solution: ",Object(i.b)("em",{parentName:"p"},"caching"),"."),Object(i.b)("p",null,"In a resource-oriented REST system, we can maintain a ",Object(i.b)("strong",{parentName:"p"},"response cache")," based on URIs:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var _cache = new Map();\nrest.get = uri => {\n  if (!_cache.has(uri)) {\n    _cache.set(uri, fetch(uri));\n  }\n  return _cache.get(uri);\n};\n")),Object(i.b)("p",null,"Response-caching can also be applied to GraphQL. A basic approach would work similarly to the REST version. The text of the query itself can be used as a cache key:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var _cache = new Map();\ngraphql.get = queryText => {\n  if (!_cache.has(queryText)) {\n    _cache.set(queryText, fetchGraphQL(queryText));\n  }\n  return _cache.get(queryText);\n};\n")),Object(i.b)("p",null,"Now, requests for previously cached data can be answered immediately without making a network request. This is a practical approach to improving the perceived performance of an application. However, this method of caching can cause problems with data consistency."),Object(i.b)("h2",{id:"cache-consistency"},"Cache Consistency"),Object(i.b)("p",null,"With GraphQL it is very common for the results of multiple queries to overlap. However, our response cache from the previous section doesn't account for this overlap \u2014 it caches based on distinct queries. For example, if we issue a query to fetch stories:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nquery { stories { id, text, likeCount } }\n")),Object(i.b)("p",null,"and then later refetch one of the stories whose ",Object(i.b)("inlineCode",{parentName:"p"},"likeCount")," has since been incremented:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\nquery { story(id: "123") { id, text, likeCount } }\n')),Object(i.b)("p",null,"We'll now see different ",Object(i.b)("inlineCode",{parentName:"p"},"likeCount"),"s depending on how the story is accessed. A view that uses the first query will see an outdated count, while a view using the second query will see the updated count."),Object(i.b)("h3",{id:"caching-a-graph"},"Caching A Graph"),Object(i.b)("p",null,"The solution to caching GraphQL is to normalize the hierarchical response into a flat collection of ",Object(i.b)("strong",{parentName:"p"},"records"),". Relay implements this cache as a map from IDs to records. Each record is a map from field names to field values. Records may also link to other records (allowing it to describe a cyclic graph), and these links are stored as a special value type that references back into the top-level map. With this approach each server record is stored ",Object(i.b)("em",{parentName:"p"},"once")," regardless of how it is fetched."),Object(i.b)("p",null,"Here's an example query that fetches a story's text and its author's name:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\nquery {\n  story(id: "1") {\n    text,\n    author {\n      name\n    }\n  }\n}\n')),Object(i.b)("p",null,"And here's a possible response:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\nquery: {\n  story: {\n     text: "Relay is open-source!",\n     author: {\n       name: "Jan"\n     }\n  }\n}\n')),Object(i.b)("p",null,"Although the response is hierarchical, we'll cache it by flattening all the records. Here is an example of how Relay would cache this query response:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"Map {\n  // `story(id: \"1\")`\n  1: Map {\n    text: 'Relay is open-source!',\n    author: Link(2),\n  },\n  // `story.author`\n  2: Map {\n    name: 'Jan',\n  },\n};\n")),Object(i.b)("p",null,"This is only a simple example: in reality the cache must handle one-to-many associations and pagination (among other things)."),Object(i.b)("h3",{id:"using-the-cache"},"Using The Cache"),Object(i.b)("p",null,"So how do we use this cache? Let's look at two operations: writing to the cache when a response is received, and reading from the cache to determine if a query can be fulfilled locally (the equivalent to ",Object(i.b)("inlineCode",{parentName:"p"},"_cache.has(key)")," above, but for a graph)."),Object(i.b)("h3",{id:"populating-the-cache"},"Populating The Cache"),Object(i.b)("p",null,"Populating the cache involves walking a hierarchical GraphQL response and creating or updating normalized cache records. At first it may seem that the response alone is sufficient to process the response, but in fact this is only true for very simple queries. Consider ",Object(i.b)("inlineCode",{parentName:"p"},'user(id: "456") { photo(size: 32) { uri } }')," \u2014 how should we store ",Object(i.b)("inlineCode",{parentName:"p"},"photo"),"? Using ",Object(i.b)("inlineCode",{parentName:"p"},"photo")," as the field name in the cache won't work because a different query might fetch the same field but with different argument values (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"photo(size: 64) {...}"),"). A similar issue occurs with pagination. If we fetch the 11th to 20th stories with ",Object(i.b)("inlineCode",{parentName:"p"},"stories(first: 10, offset: 10)"),", these new results should be ",Object(i.b)("em",{parentName:"p"},"appended")," to the existing list."),Object(i.b)("p",null,"Therefore, a normalized response cache for GraphQL requires processing payloads and queries in parallel. For example, the ",Object(i.b)("inlineCode",{parentName:"p"},"photo")," field from above might be cached with a generated field name such as ",Object(i.b)("inlineCode",{parentName:"p"},"photo_size(32)")," in order to uniquely identify the field and its argument values."),Object(i.b)("h3",{id:"reading-from-cache"},"Reading From Cache"),Object(i.b)("p",null,"To read from the cache we can walk a query and resolve each field. But wait: that sounds ",Object(i.b)("em",{parentName:"p"},"exactly")," like what a GraphQL server does when it processes a query. And it is! Reading from the cache is a special case of an executor where a) there's no need for user-defined field functions because all results come from a fixed data structure and b) results are always synchronous \u2014 we either have the data cached or we don't."),Object(i.b)("p",null,"Relay implements several variations of ",Object(i.b)("strong",{parentName:"p"},"query traversal"),': operations that walk a query alongside some other data such as the cache or a response payload. For example, when a query is fetched Relay performs a "diff" traversal to determine what fields are missing (much like React diffs virtual DOM trees). This can reduce the amount of data fetched in many common cases and even allow Relay to avoid network requests at all when queries are fully cached.'),Object(i.b)("h3",{id:"cache-updates"},"Cache Updates"),Object(i.b)("p",null,"Note that this normalized cache structure allows overlapping results to be cached without duplication. Each record is stored once regardless of how it is fetched. Let's return to the earlier example of inconsistent data and see how this cache helps in that scenario."),Object(i.b)("p",null,"The first query was for a list of stories:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nquery { stories { id, text, likeCount } }\n")),Object(i.b)("p",null,"With a normalized response cache, a record would be created for each story in the list. The ",Object(i.b)("inlineCode",{parentName:"p"},"stories")," field would store links to each of these records."),Object(i.b)("p",null,"The second query refetched the information for one of those stories:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\nquery { story(id: "123") { id, text, likeCount } }\n')),Object(i.b)("p",null,"When this response is normalized, Relay can detect that this result overlaps with existing data based on its ",Object(i.b)("inlineCode",{parentName:"p"},"id"),". Rather than create a new record, Relay will update the existing ",Object(i.b)("inlineCode",{parentName:"p"},"123")," record. The new ",Object(i.b)("inlineCode",{parentName:"p"},"likeCount")," is therefore available to ",Object(i.b)("em",{parentName:"p"},"both")," queries, as well as any other query that might reference this story."),Object(i.b)("h2",{id:"dataview-consistency"},"Data/View Consistency"),Object(i.b)("p",null,"A normalized cache ensures that the ",Object(i.b)("em",{parentName:"p"},"cache")," is consistent. But what about our views? Ideally, our React views would always reflect the current information from the cache."),Object(i.b)("p",null,"Consider rendering the text and comments of a story along with the corresponding author names and photos. Here's the GraphQL query:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\nquery {\n  story(id: "1") {\n    text,\n    author { name, photo },\n    comments {\n      text,\n      author { name, photo }\n    }\n  }\n}\n')),Object(i.b)("p",null,"After initially fetching this story our cache might be as follows. Note that the story and comment both link to the same record as ",Object(i.b)("inlineCode",{parentName:"p"},"author"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\n// Note: This is pseudo-code for `Map` initialization to make the structure\n// more obvious.\nMap {\n  // `story(id: \"1\")`\n  1: Map {\n    text: 'got GraphQL?',\n    author: Link(2),\n    comments: [Link(3)],\n  },\n  // `story.author`\n  2: Map {\n    name: 'Yuzhi',\n    photo: 'http://.../photo1.jpg',\n  },\n  // `story.comments[0]`\n  3: Map {\n    text: 'Here\\'s how to get one!',\n    author: Link(2),\n  },\n}\n")),Object(i.b)("p",null,"The author of this story also commented on it \u2014 quite common. Now imagine that some other view fetches new information about the author, and her profile photo has changed to a new URI. Here's the ",Object(i.b)("em",{parentName:"p"},"only")," part of our cached data that changes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nMap {\n  ...\n  2: Map {\n    ...\n    photo: 'http://.../photo2.jpg',\n  },\n}\n")),Object(i.b)("p",null,"The value of the ",Object(i.b)("inlineCode",{parentName:"p"},"photo")," field has changed; and therefore the record ",Object(i.b)("inlineCode",{parentName:"p"},"2")," has also changed. And that's it. Nothing else in the ",Object(i.b)("em",{parentName:"p"},"cache")," is affected. But clearly our ",Object(i.b)("em",{parentName:"p"},"view")," needs to reflect the update: both instances of the author in the UI (as story author and comment author) need to show the new photo."),Object(i.b)("p",null,'A standard response is to "just use immutable data structures" \u2014 but let\'s see what would happen if we did:'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nImmutableMap {\n  1: ImmutableMap // same as before\n  2: ImmutableMap {\n    ... // other fields unchanged\n    photo: 'http://.../photo2.jpg',\n  },\n  3: ImmutableMap // same as before\n}\n")),Object(i.b)("p",null,"If we replace ",Object(i.b)("inlineCode",{parentName:"p"},"2")," with a new immutable record, we'll also get a new immutable instance of the cache object. However, records ",Object(i.b)("inlineCode",{parentName:"p"},"1")," and ",Object(i.b)("inlineCode",{parentName:"p"},"3")," are untouched. Because the data is normalized, we can't tell that ",Object(i.b)("inlineCode",{parentName:"p"},"story"),"'s contents have changed just by looking at the ",Object(i.b)("inlineCode",{parentName:"p"},"story")," record alone."),Object(i.b)("h3",{id:"achieving-view-consistency"},"Achieving View Consistency"),Object(i.b)("p",null,"There are a variety of solutions for keeping views up to date with a flattened cache. The approach that Relay takes is to maintain a mapping from each UI view to the set of IDs it references. In this case, the story view would subscribe to updates on the story (",Object(i.b)("inlineCode",{parentName:"p"},"1"),"), the author (",Object(i.b)("inlineCode",{parentName:"p"},"2"),"), and the comments (",Object(i.b)("inlineCode",{parentName:"p"},"3")," and any others). When writing data into the cache, Relay tracks which IDs are affected and notifies ",Object(i.b)("em",{parentName:"p"},"only")," the views that are subscribed to those IDs. The affected views re-render, and unaffected views opt-out of re-rendering for better performance (Relay provides a safe but effective default ",Object(i.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),"). Without this strategy, every view would re-render for even the tiniest change."),Object(i.b)("p",null,"Note that this solution will also work for ",Object(i.b)("em",{parentName:"p"},"writes"),": any update to the cache will notify the affected views, and writes are just another thing that updates the cache."),Object(i.b)("h2",{id:"mutations"},"Mutations"),Object(i.b)("p",null,"So far we've looked at the process of querying data and keeping views up to date, but we haven't looked at writes. In GraphQL, writes are called ",Object(i.b)("strong",{parentName:"p"},"mutations"),". We can think of them as queries with side effects. Here's an example of calling a mutation that might mark a given story as being liked by the current user:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\n// Give a human-readable name and define the types of the inputs,\n// in this case the id of the story to mark as liked.\nmutation StoryLike($storyID: String) {\n   // Call the mutation field and trigger its side effects\n   storyLike(storyID: $storyID) {\n     // Define fields to re-fetch after the mutation completes\n     likeCount\n   }\n}\n")),Object(i.b)("p",null,"Notice that we're querying for data that ",Object(i.b)("em",{parentName:"p"},"may")," have changed as a result of the mutation. An obvious question is: why can't the server just tell us what changed? The answer is: it's complicated. GraphQL abstracts over ",Object(i.b)("em",{parentName:"p"},"any")," data storage layer (or an aggregation of multiple sources), and works with any programming language. Furthermore, the goal of GraphQL is to provide data in a form that is useful to product developers building a view."),Object(i.b)("p",null,"We've found that it's common for the GraphQL schema to differ slightly or even substantially from the form in which data is stored on disk. Put simply: there isn't always a 1:1 correspondence between data changes in your underlying ",Object(i.b)("em",{parentName:"p"},"data storage")," (disk) and data changes in your ",Object(i.b)("em",{parentName:"p"},"product-visible schema")," (GraphQL). The perfect example of this is privacy: returning a user-facing field such as ",Object(i.b)("inlineCode",{parentName:"p"},"age")," might require accessing numerous records in our data-storage layer to determine if the active user is even allowed to ",Object(i.b)("em",{parentName:"p"},"see")," that ",Object(i.b)("inlineCode",{parentName:"p"},"age")," (Are we friends? Is my age shared? Did I block you? etc.)."),Object(i.b)("p",null,"Given these real-world constraints, the approach in GraphQL is for clients to query for things that may change after a mutation. But what exactly do we put in that query? During the development of Relay we explored several ideas \u2014 let's look at them briefly in order to understand why Relay uses the approach that it does:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Option 1: Re-fetch everything that the app has ever queried. Even though only a small subset of this data will actually change, we'll still have to wait for the server to execute the ",Object(i.b)("em",{parentName:"p"},"entire")," query, wait to download the results, and wait to process them again. This is very inefficient.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Option 2: Re-fetch only the queries required by actively rendered views. This is a slight improvement over option 1. However, cached data that ",Object(i.b)("em",{parentName:"p"},"isn't")," currently being viewed won't be updated. Unless this data is somehow marked as stale or evicted from the cache subsequent queries will read outdated information.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Option 3: Re-fetch a fixed list of fields that ",Object(i.b)("em",{parentName:"p"},"may")," change after the mutation. We'll call this list a ",Object(i.b)("strong",{parentName:"p"},"fat query"),". We found this to also be inefficient because typical applications only render a subset of the fat query, but this approach would require fetching all of those fields.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Option 4 (Relay): Re-fetch the intersection of what may change (the fat query) and the data in the cache. In addition to the cache of data Relay also remembers the queries used to fetch each item. These are called ",Object(i.b)("strong",{parentName:"p"},"tracked queries"),". By intersecting the tracked and fat queries, Relay can query exactly the set of information the application needs to update and nothing more."))),Object(i.b)("h2",{id:"data-fetching-apis"},"Data-Fetching APIs"),Object(i.b)("p",null,"So far we looked at the lower-level aspects of data-fetching and saw how various familiar concepts translate to GraphQL. Next, let's step back and look at some higher-level concerns that product developers often face around data-fetching:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fetching all the data for a view hierarchy."),Object(i.b)("li",{parentName:"ul"},"Managing asynchronous state transitions and coordinating concurrent requests."),Object(i.b)("li",{parentName:"ul"},"Managing errors."),Object(i.b)("li",{parentName:"ul"},"Retrying failed requests."),Object(i.b)("li",{parentName:"ul"},"Updating the local cache after receiving query/mutation responses."),Object(i.b)("li",{parentName:"ul"},"Queuing mutations to avoid race conditions."),Object(i.b)("li",{parentName:"ul"},"Optimistically updating the UI while waiting for the server to respond to mutations.")),Object(i.b)("p",null,"We've found that typical approaches to data-fetching \u2014 with imperative APIs \u2014 force developers to deal with too much of this non-essential complexity. For example, consider ",Object(i.b)("em",{parentName:"p"},"optimistic UI updates"),". This is a way of giving the user feedback while waiting for a server response. The logic of ",Object(i.b)("em",{parentName:"p"},"what"),' to do can be quite clear: when the user clicks "like", mark the story as being liked and send the request to the server. But the implementation is often much more complex. Imperative approaches require us to implement all of those steps: reach into the UI and toggle the button, initiate a network request, retry it if necessary, show an error if it fails (and untoggle the button), etc. The same goes for data-fetching: specifying ',Object(i.b)("em",{parentName:"p"},"what")," data we need often dictates ",Object(i.b)("em",{parentName:"p"},"how")," and ",Object(i.b)("em",{parentName:"p"},"when")," it is fetched. Next, we'll explore our approach to solving these concerns with ",Object(i.b)("strong",{parentName:"p"},"Relay"),"."),Object(i.b)(o.a,{mdxType:"DocsRating"}))}u.isMDXComponent=!0}}]);