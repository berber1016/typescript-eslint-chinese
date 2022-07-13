"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[5380],{3905:function(e,r,t){t.d(r,{Zo:function(){return f},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},f=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return t?n.createElement(m,l(l({ref:r},f),{},{components:t})):n.createElement(m,l({ref:r},f))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=u;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},156:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var n=t(3117),o=t(102),i=(t(7294),t(3905)),l=["components"],a={},s="prefer-for-of",p={unversionedId:"prefer-for-of",id:"prefer-for-of",title:"prefer-for-of",description:"Enforces the use of for-of loop over the standard for loop where possible.",source:"@site/rules/prefer-for-of.md",sourceDirName:".",slug:"/prefer-for-of",permalink:"/typescript-eslint-chinese/rules/prefer-for-of",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657186506,formattedLastUpdatedAt:"2022\u5e747\u67087\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"prefer-enum-initializers",permalink:"/typescript-eslint-chinese/rules/prefer-enum-initializers"},next:{title:"prefer-function-type",permalink:"/typescript-eslint-chinese/rules/prefer-function-type"}},f={},c=[{value:"Rule Details",id:"rule-details",level:2},{value:"\u274c Incorrect",id:"-incorrect",level:3},{value:"\u2705 Correct",id:"-correct",level:3},{value:"Options",id:"options",level:2},{value:"When Not To Use It",id:"when-not-to-use-it",level:2},{value:"Related To",id:"related-to",level:2}],u={toc:c};function d(e){var r=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prefer-for-of"},(0,i.kt)("inlineCode",{parentName:"h1"},"prefer-for-of")),(0,i.kt)("p",null,"Enforces the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"for-of")," loop over the standard ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop where possible."),(0,i.kt)("p",null,"This rule recommends a for-of loop when the loop index is only used to read from an array that is being iterated."),(0,i.kt)("h2",{id:"rule-details"},"Rule Details"),(0,i.kt)("p",null,"For cases where the index is only used to read from the array being iterated, a for-of loop is easier to read and write."),(0,i.kt)("p",null,"Examples of code for this rule:"),(0,i.kt)("h3",{id:"-incorrect"},"\u274c Incorrect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < arr.length; i++) {\n  console.log(arr[i]);\n}\n")),(0,i.kt)("h3",{id:"-correct"},"\u2705 Correct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"for (const x of arr) {\n  console.log(x);\n}\n\nfor (let i = 0; i < arr.length; i++) {\n  // i is used to write to arr, so for-of could not be used.\n  arr[i] = 0;\n}\n\nfor (let i = 0; i < arr.length; i++) {\n  // i is used independent of arr, so for-of could not be used.\n  console.log(i, arr[i]);\n}\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'// .eslintrc.json\n{\n  "rules": {\n    "@typescript-eslint/prefer-for-of": "warn"\n  }\n}\n')),(0,i.kt)("p",null,"This rule is not configurable."),(0,i.kt)("h2",{id:"when-not-to-use-it"},"When Not To Use It"),(0,i.kt)("p",null,"If you transpile for browsers that do not support for-of loops, you may wish to use traditional for loops that produce more compact code."),(0,i.kt)("h2",{id:"related-to"},"Related To"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TSLint: ",(0,i.kt)("a",{parentName:"li",href:"https://palantir.github.io/tslint/rules/prefer-for-of/"},"'prefer-for-of'"))))}d.isMDXComponent=!0}}]);