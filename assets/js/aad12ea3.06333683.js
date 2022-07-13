"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[3213],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7683:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(3117),o=r(102),l=(r(7294),r(3905)),a=["components"],s={},i="no-useless-empty-export",p={unversionedId:"no-useless-empty-export",id:"no-useless-empty-export",title:"no-useless-empty-export",description:"Disallows empty exports that don't change anything in a module file.",source:"@site/rules/no-useless-empty-export.md",sourceDirName:".",slug:"/no-useless-empty-export",permalink:"/typescript-eslint-chinese/rules/no-useless-empty-export",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657247748,formattedLastUpdatedAt:"2022\u5e747\u67088\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"no-useless-constructor",permalink:"/typescript-eslint-chinese/rules/no-useless-constructor"},next:{title:"no-var-requires",permalink:"/typescript-eslint-chinese/rules/no-var-requires"}},c={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"\u274c Incorrect",id:"-incorrect",level:3},{value:"\u2705 Correct",id:"-correct",level:3},{value:"Options",id:"options",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"no-useless-empty-export"},(0,l.kt)("inlineCode",{parentName:"h1"},"no-useless-empty-export")),(0,l.kt)("p",null,"Disallows empty exports that don't change anything in a module file."),(0,l.kt)("h2",{id:"rule-details"},"Rule Details"),(0,l.kt)("p",null,"An empty ",(0,l.kt)("inlineCode",{parentName:"p"},"export {}")," statement is sometimes useful in TypeScript code to turn a file that would otherwise be a script file into a module file.\nPer the TypeScript Handbook ",(0,l.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/modules.html"},"Modules")," page:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module.\nConversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).")),(0,l.kt)("p",null,"However, an ",(0,l.kt)("inlineCode",{parentName:"p"},"export {}")," statement does nothing if there are any other top-level import or export statements in a file."),(0,l.kt)("p",null,"Examples of code for this rule:"),(0,l.kt)("h3",{id:"-incorrect"},"\u274c Incorrect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'export const value = "Hello, world!";\nexport {};\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import "some-other-module";\nexport {};\n')),(0,l.kt)("h3",{id:"-correct"},"\u2705 Correct"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'export const value = "Hello, world!";\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import "some-other-module";\n')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsonc"},'// .eslintrc.json\n{\n  "rules": {\n    "@typescript-eslint/no-useless-empty-export": "warn"\n  }\n}\n')),(0,l.kt)("p",null,"This rule is not configurable."))}d.isMDXComponent=!0}}]);