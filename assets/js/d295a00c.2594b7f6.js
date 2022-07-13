"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[370],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(t),f=s,m=d["".concat(a,".").concat(f)]||d[f]||c[f]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=d;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:s,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6634:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var r=t(3117),s=t(102),o=(t(7294),t(3905)),i=["components"],u={},a="no-unused-expressions",l={unversionedId:"no-unused-expressions",id:"no-unused-expressions",title:"no-unused-expressions",description:"Disallows unused expressions.",source:"@site/rules/no-unused-expressions.md",sourceDirName:".",slug:"/no-unused-expressions",permalink:"/typescript-eslint-chinese/rules/no-unused-expressions",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657186506,formattedLastUpdatedAt:"2022\u5e747\u67087\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"no-unsafe-return",permalink:"/typescript-eslint-chinese/rules/no-unsafe-return"},next:{title:"no-unused-vars",permalink:"/typescript-eslint-chinese/rules/no-unused-vars"}},p={},c=[{value:"Rule Details",id:"rule-details",level:2},{value:"How to Use",id:"how-to-use",level:2},{value:"Options",id:"options",level:2}],d={toc:c};function f(e){var n=e.components,t=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"no-unused-expressions"},(0,o.kt)("inlineCode",{parentName:"h1"},"no-unused-expressions")),(0,o.kt)("p",null,"Disallows unused expressions."),(0,o.kt)("h2",{id:"rule-details"},"Rule Details"),(0,o.kt)("p",null,"This rule extends the base ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/no-unused-expressions"},(0,o.kt)("inlineCode",{parentName:"a"},"eslint/no-unused-expressions"))," rule.\nIt adds support for optional call expressions ",(0,o.kt)("inlineCode",{parentName:"p"},"x?.()"),", and directive in module declarations."),(0,o.kt)("h2",{id:"how-to-use"},"How to Use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  // note you must disable the base rule as it can report incorrect errors\n  "no-unused-expressions": "off",\n  "@typescript-eslint/no-unused-expressions": ["error"]\n}\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/no-unused-expressions#options"},(0,o.kt)("inlineCode",{parentName:"a"},"eslint/no-unused-expressions")," options"),"."),(0,o.kt)("sup",null,(0,o.kt)("p",null,"Taken with \u2764\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eslint/eslint/blob/main/docs/rules/no-unused-expressions.md"},"from ESLint core"))))}f.isMDXComponent=!0}}]);