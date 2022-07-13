"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[2624],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(n),b=o,d=f["".concat(i,".").concat(b)]||f[b]||u[b]||s;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,c=new Array(s);c[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<s;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=n(102),s=(n(7294),n(3905)),c=["components"],a={},i="space-before-blocks",l={unversionedId:"space-before-blocks",id:"space-before-blocks",title:"space-before-blocks",description:"Enforces consistent spacing before blocks.",source:"@site/rules/space-before-blocks.md",sourceDirName:".",slug:"/space-before-blocks",permalink:"/typescript-eslint-chinese/rules/space-before-blocks",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657186506,formattedLastUpdatedAt:"2022\u5e747\u67087\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"sort-type-union-intersection-members",permalink:"/typescript-eslint-chinese/rules/sort-type-union-intersection-members"},next:{title:"space-before-function-paren",permalink:"/typescript-eslint-chinese/rules/space-before-function-paren"}},p={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"\u274c Incorrect",id:"-incorrect",level:3},{value:"\u2705 Correct",id:"-correct",level:3},{value:"How to Use",id:"how-to-use",level:2},{value:"Options",id:"options",level:2}],f={toc:u};function b(e){var t=e.components,n=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"space-before-blocks"},(0,s.kt)("inlineCode",{parentName:"h1"},"space-before-blocks")),(0,s.kt)("p",null,"Enforces consistent spacing before blocks."),(0,s.kt)("h2",{id:"rule-details"},"Rule Details"),(0,s.kt)("p",null,"This rule extends the base ",(0,s.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/space-before-blocks"},(0,s.kt)("inlineCode",{parentName:"a"},"eslint/space-before-blocks"))," rule.\nIt adds support for interfaces and enums:"),(0,s.kt)("h3",{id:"-incorrect"},"\u274c Incorrect"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"enum Breakpoint{\n  Large, Medium;\n}\n\ninterface State{\n  currentBreakpoint: Breakpoint;\n}\n")),(0,s.kt)("h3",{id:"-correct"},"\u2705 Correct"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"enum Breakpoint {\n  Large, Medium;\n}\n\ninterface State {\n  currentBreakpoint: Breakpoint;\n}\n")),(0,s.kt)("p",null,"In case a more specific options object is passed these blocks will follow ",(0,s.kt)("inlineCode",{parentName:"p"},"classes")," configuration option."),(0,s.kt)("h2",{id:"how-to-use"},"How to Use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  // note you must disable the base rule as it can report incorrect errors\n  "space-before-blocks": "off",\n  "@typescript-eslint/space-before-blocks": ["error"]\n}\n')),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/space-before-blocks#options"},(0,s.kt)("inlineCode",{parentName:"a"},"eslint/space-before-blocks")," options"),"."),(0,s.kt)("sup",null,(0,s.kt)("p",null,"Taken with \u2764\ufe0f ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/eslint/eslint/blob/master/docs/rules/space-before-blocks.md"},"from ESLint core"))))}b.isMDXComponent=!0}}]);