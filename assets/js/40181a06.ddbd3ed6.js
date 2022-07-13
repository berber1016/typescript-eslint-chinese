"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[6714],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(a,".").concat(m)]||f[m]||u[m]||s;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3005:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(3117),o=n(102),s=(n(7294),n(3905)),i=["components"],l={},a="no-loss-of-precision",c={unversionedId:"no-loss-of-precision",id:"no-loss-of-precision",title:"no-loss-of-precision",description:"Disallows literal numbers that lose precision.",source:"@site/rules/no-loss-of-precision.md",sourceDirName:".",slug:"/no-loss-of-precision",permalink:"/typescript-eslint-chinese/rules/no-loss-of-precision",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657186506,formattedLastUpdatedAt:"2022\u5e747\u67087\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"no-loop-func",permalink:"/typescript-eslint-chinese/rules/no-loop-func"},next:{title:"no-magic-numbers",permalink:"/typescript-eslint-chinese/rules/no-magic-numbers"}},p={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"How to Use",id:"how-to-use",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"no-loss-of-precision"},(0,s.kt)("inlineCode",{parentName:"h1"},"no-loss-of-precision")),(0,s.kt)("p",null,"Disallows literal numbers that lose precision."),(0,s.kt)("h2",{id:"rule-details"},"Rule Details"),(0,s.kt)("p",null,"This rule extends the base ",(0,s.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/no-loss-of-precision"},(0,s.kt)("inlineCode",{parentName:"a"},"eslint/no-loss-of-precision"))," rule.\nIt adds support for ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-numeric-separator"},"numeric separators"),".\nNote that this rule requires ESLint v7."),(0,s.kt)("h2",{id:"how-to-use"},"How to Use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  // note you must disable the base rule as it can report incorrect errors\n  "no-loss-of-precision": "off",\n  "@typescript-eslint/no-loss-of-precision": ["error"]\n}\n')),(0,s.kt)("sup",null,(0,s.kt)("p",null,"Taken with \u2764\ufe0f ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/eslint/eslint/blob/main/docs/rules/no-loss-of-precision.md"},"from ESLint core"))))}m.isMDXComponent=!0}}]);