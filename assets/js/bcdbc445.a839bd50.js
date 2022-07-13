"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[9204],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5606:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],l={},s="no-non-null-asserted-optional-chain",c={unversionedId:"no-non-null-asserted-optional-chain",id:"no-non-null-asserted-optional-chain",title:"no-non-null-asserted-optional-chain",description:"Disallows non-null assertions after an optional chain expression.",source:"@site/rules/no-non-null-asserted-optional-chain.md",sourceDirName:".",slug:"/no-non-null-asserted-optional-chain",permalink:"/typescript-eslint-chinese/rules/no-non-null-asserted-optional-chain",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657186506,formattedLastUpdatedAt:"2022\u5e747\u67087\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"no-non-null-asserted-nullish-coalescing",permalink:"/typescript-eslint-chinese/rules/no-non-null-asserted-nullish-coalescing"},next:{title:"no-non-null-assertion",permalink:"/typescript-eslint-chinese/rules/no-non-null-assertion"}},p={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"\u274c Incorrect",id:"-incorrect",level:3},{value:"\u2705 Correct",id:"-correct",level:3},{value:"Options",id:"options",level:2},{value:"When Not To Use It",id:"when-not-to-use-it",level:2},{value:"Further Reading",id:"further-reading",level:2}],f={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"no-non-null-asserted-optional-chain"},(0,a.kt)("inlineCode",{parentName:"h1"},"no-non-null-asserted-optional-chain")),(0,a.kt)("p",null,"Disallows non-null assertions after an optional chain expression."),(0,a.kt)("h2",{id:"rule-details"},"Rule Details"),(0,a.kt)("p",null,"Optional chain expressions are designed to return ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," if the optional property is nullish.\nUsing non-null assertions after an optional chain expression is wrong, and introduces a serious type safety hole into your code."),(0,a.kt)("p",null,"Examples of code for this rule:"),(0,a.kt)("h3",{id:"-incorrect"},"\u274c Incorrect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/* eslint @typescript-eslint/no-non-null-asserted-optional-chain: \"error\" */\n\nfoo?.bar!;\nfoo?.bar()!;\n\n// Prior to TS3.9, foo?.bar!.baz meant (foo?.bar).baz - i.e. the non-null assertion is applied to the entire chain so far.\n// For TS3.9 and greater, the non-null assertion is only applied to the property itself, so it's safe.\n// The following is incorrect code if you're using less than TS3.9\nfoo?.bar!.baz;\nfoo?.bar!();\nfoo?.bar!().baz;\n")),(0,a.kt)("h3",{id:"-correct"},"\u2705 Correct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'/* eslint @typescript-eslint/no-non-null-asserted-optional-chain: "error" */\n\nfoo?.bar;\n(foo?.bar).baz;\nfoo?.bar();\nfoo?.bar();\nfoo?.bar().baz;\n\n// The following is correct code if you\'re using TS3.9 or greater\nfoo?.bar!.baz;\nfoo?.bar!();\nfoo?.bar!().baz;\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'// .eslintrc.json\n{\n  "rules": {\n    "@typescript-eslint/no-non-null-asserted-optional-chain": "error"\n  }\n}\n')),(0,a.kt)("p",null,"This rule is not configurable."),(0,a.kt)("h2",{id:"when-not-to-use-it"},"When Not To Use It"),(0,a.kt)("p",null,"If you are not using TypeScript 3.7 (or greater), then you will not need to use this rule, as the operator is not supported."),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html"},"TypeScript 3.7 Release Notes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-optional-chaining/"},"Optional Chaining Proposal"))))}d.isMDXComponent=!0}}]);