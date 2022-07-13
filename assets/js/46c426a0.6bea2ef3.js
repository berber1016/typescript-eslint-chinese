"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[3467],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={},s="comma-spacing",p={unversionedId:"comma-spacing",id:"comma-spacing",title:"comma-spacing",description:"Enforces consistent spacing before and after commas.",source:"@site/rules/comma-spacing.md",sourceDirName:".",slug:"/comma-spacing",permalink:"/typescript-eslint-chinese/rules/comma-spacing",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657186506,formattedLastUpdatedAt:"2022\u5e747\u67087\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"comma-dangle",permalink:"/typescript-eslint-chinese/rules/comma-dangle"},next:{title:"consistent-generic-constructors",permalink:"/typescript-eslint-chinese/rules/consistent-generic-constructors"}},l={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"How to Use",id:"how-to-use",level:2},{value:"Options",id:"options",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"comma-spacing"},(0,a.kt)("inlineCode",{parentName:"h1"},"comma-spacing")),(0,a.kt)("p",null,"Enforces consistent spacing before and after commas."),(0,a.kt)("h2",{id:"rule-details"},"Rule Details"),(0,a.kt)("p",null,"This rule extends the base ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/comma-spacing"},(0,a.kt)("inlineCode",{parentName:"a"},"eslint/comma-spacing"))," rule.\nIt adds support for trailing comma in a types parameters list."),(0,a.kt)("h2",{id:"how-to-use"},"How to Use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  // note you must disable the base rule as it can report incorrect errors\n  "comma-spacing": "off",\n  "@typescript-eslint/comma-spacing": ["error"]\n}\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/comma-spacing#options"},(0,a.kt)("inlineCode",{parentName:"a"},"eslint/comma-spacing")," options"),"."),(0,a.kt)("sup",null,(0,a.kt)("p",null,"Taken with \u2764\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eslint/eslint/blob/main/docs/rules/comma-spacing.md"},"from ESLint core"))))}f.isMDXComponent=!0}}]);