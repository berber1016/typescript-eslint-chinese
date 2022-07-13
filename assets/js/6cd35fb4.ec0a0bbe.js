"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[3108],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=s,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5960:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(3117),s=n(102),o=(n(7294),n(3905)),a=["components"],l={},i="no-dupe-class-members",u={unversionedId:"no-dupe-class-members",id:"no-dupe-class-members",title:"no-dupe-class-members",description:"Disallows duplicate class members.",source:"@site/rules/no-dupe-class-members.md",sourceDirName:".",slug:"/no-dupe-class-members",permalink:"/typescript-eslint-chinese/rules/no-dupe-class-members",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657186506,formattedLastUpdatedAt:"2022\u5e747\u67087\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"no-confusing-void-expression",permalink:"/typescript-eslint-chinese/rules/no-confusing-void-expression"},next:{title:"no-duplicate-enum-values",permalink:"/typescript-eslint-chinese/rules/no-duplicate-enum-values"}},p={},c=[{value:"Rule Details",id:"rule-details",level:2},{value:"How to Use",id:"how-to-use",level:2},{value:"Options",id:"options",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"no-dupe-class-members"},(0,o.kt)("inlineCode",{parentName:"h1"},"no-dupe-class-members")),(0,o.kt)("p",null,"Disallows duplicate class members."),(0,o.kt)("h2",{id:"rule-details"},"Rule Details"),(0,o.kt)("p",null,"This rule extends the base ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/no-dupe-class-members"},(0,o.kt)("inlineCode",{parentName:"a"},"eslint/no-dupe-class-members"))," rule.\nIt adds support for TypeScript's method overload definitions."),(0,o.kt)("h2",{id:"how-to-use"},"How to Use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  // note you must disable the base rule as it can report incorrect errors\n  "no-dupe-class-members": "off",\n  "@typescript-eslint/no-dupe-class-members": ["error"]\n}\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/no-dupe-class-members#options"},(0,o.kt)("inlineCode",{parentName:"a"},"eslint/no-dupe-class-members")," options"),"."),(0,o.kt)("sup",null,(0,o.kt)("p",null,"Taken with \u2764\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eslint/eslint/blob/main/docs/rules/no-dupe-class-members.md"},"from ESLint core"))))}d.isMDXComponent=!0}}]);