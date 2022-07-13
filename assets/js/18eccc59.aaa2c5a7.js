"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[8870],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5158:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],l={},s="no-dynamic-delete",c={unversionedId:"no-dynamic-delete",id:"no-dynamic-delete",title:"no-dynamic-delete",description:"Disallows using the delete operator on computed key expressions.",source:"@site/rules/no-dynamic-delete.md",sourceDirName:".",slug:"/no-dynamic-delete",permalink:"/typescript-eslint-chinese/rules/no-dynamic-delete",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657247748,formattedLastUpdatedAt:"2022\u5e747\u67088\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"no-duplicate-imports",permalink:"/typescript-eslint-chinese/rules/no-duplicate-imports"},next:{title:"no-empty-function",permalink:"/typescript-eslint-chinese/rules/no-empty-function"}},p={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"\u274c Incorrect",id:"-incorrect",level:3},{value:"\u2705 Correct",id:"-correct",level:3},{value:"Options",id:"options",level:2},{value:"When Not To Use It",id:"when-not-to-use-it",level:2},{value:"Related To",id:"related-to",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"no-dynamic-delete"},(0,a.kt)("inlineCode",{parentName:"h1"},"no-dynamic-delete")),(0,a.kt)("p",null,"Disallows using the ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," operator on computed key expressions."),(0,a.kt)("p",null,"Deleting dynamically computed keys can be dangerous and in some cases not well optimized."),(0,a.kt)("h2",{id:"rule-details"},"Rule Details"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," operator on keys that aren't runtime constants could be a sign that you're using the wrong data structures.\nUsing ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"s with added and removed keys can cause occasional edge case bugs, such as if a key is named ",(0,a.kt)("inlineCode",{parentName:"p"},'"hasOwnProperty"'),".\nConsider using a ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Set")," if you\u2019re storing collections of objects."),(0,a.kt)("h3",{id:"-incorrect"},"\u274c Incorrect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Can be replaced with the constant equivalents, such as container.aaa\ndelete container["aaa"];\ndelete container["Infinity"];\n\n// Dynamic, difficult-to-reason-about lookups\nconst name = "name";\ndelete container[name];\ndelete container[name.toUpperCase()];\n')),(0,a.kt)("h3",{id:"-correct"},"\u2705 Correct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const container: { [i: string]: number } = {\n  /* ... */\n};\n\n// Constant runtime lookups by string index\ndelete container.aaa;\n\n// Constants that must be accessed by []\ndelete container[7];\ndelete container["-Infinity"];\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'// .eslintrc.json\n{\n  "rules": {\n    "@typescript-eslint/no-dynamic-delete": "warn"\n  }\n}\n')),(0,a.kt)("p",null,"This rule is not configurable."),(0,a.kt)("h2",{id:"when-not-to-use-it"},"When Not To Use It"),(0,a.kt)("p",null,"When you know your keys are safe to delete, this rule can be unnecessary.\nSome environments such as older browsers might not support ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Set"),"."),(0,a.kt)("p",null,"Do not consider this rule as performance advice before profiling your code's bottlenecks.\nEven repeated minor performance slowdowns likely do not significantly affect your application's general perceived speed."),(0,a.kt)("h2",{id:"related-to"},"Related To"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TSLint: ",(0,a.kt)("a",{parentName:"li",href:"https://palantir.github.io/tslint/rules/no-dynamic-delete"},"no-dynamic-delete"))))}m.isMDXComponent=!0}}]);