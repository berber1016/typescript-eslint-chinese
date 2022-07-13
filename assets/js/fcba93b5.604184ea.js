"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[8776],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5699:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],l={},c="prefer-reduce-type-parameter",p={unversionedId:"prefer-reduce-type-parameter",id:"prefer-reduce-type-parameter",title:"prefer-reduce-type-parameter",description:"Enforces using type parameter when calling Array#reduce instead of casting.",source:"@site/rules/prefer-reduce-type-parameter.md",sourceDirName:".",slug:"/prefer-reduce-type-parameter",permalink:"/typescript-eslint-chinese/rules/prefer-reduce-type-parameter",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657247748,formattedLastUpdatedAt:"2022\u5e747\u67088\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"prefer-readonly",permalink:"/typescript-eslint-chinese/rules/prefer-readonly"},next:{title:"prefer-regexp-exec",permalink:"/typescript-eslint-chinese/rules/prefer-regexp-exec"}},s={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"\u274c Incorrect",id:"-incorrect",level:3},{value:"\u2705 Correct",id:"-correct",level:3},{value:"Options",id:"options",level:2},{value:"When Not To Use It",id:"when-not-to-use-it",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prefer-reduce-type-parameter"},(0,i.kt)("inlineCode",{parentName:"h1"},"prefer-reduce-type-parameter")),(0,i.kt)("p",null,"Enforces using type parameter when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"Array#reduce")," instead of casting."),(0,i.kt)("p",null,"It's common to call ",(0,i.kt)("inlineCode",{parentName:"p"},"Array#reduce")," with a generic type, such as an array or object, as the initial value.\nSince these values are empty, their types are not usable:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[]")," has type ",(0,i.kt)("inlineCode",{parentName:"li"},"never[]"),", which can't have items pushed into it as nothing is type ",(0,i.kt)("inlineCode",{parentName:"li"},"never")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{}")," has type ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),", which doesn't have an index signature and so can't have properties added to it")),(0,i.kt)("p",null,"A common solution to this problem is to cast the initial value. While this will work, it's not the most optimal\nsolution as casting has subtle effects on the underlying types that can allow bugs to slip in."),(0,i.kt)("p",null,"A better (and lesser known) solution is to pass the type in as a generic parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"Array#reduce")," explicitly.\nThis means that TypeScript doesn't have to try to infer the type, and avoids the common pitfalls that come with casting."),(0,i.kt)("h2",{id:"rule-details"},"Rule Details"),(0,i.kt)("p",null,"This rule looks for calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"Array#reduce"),", and warns if an initial value is being passed & casted,\nsuggesting instead to pass the cast type to ",(0,i.kt)("inlineCode",{parentName:"p"},"Array#reduce")," as its generic parameter."),(0,i.kt)("p",null,"Examples of code for this rule:"),(0,i.kt)("h3",{id:"-incorrect"},"\u274c Incorrect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'[1, 2, 3].reduce((arr, num) => arr.concat(num * 2), [] as number[]);\n\n["a", "b"].reduce(\n  (accum, name) => ({\n    ...accum,\n    [name]: true,\n  }),\n  {} as Record<string, boolean>\n);\n')),(0,i.kt)("h3",{id:"-correct"},"\u2705 Correct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'[1, 2, 3].reduce<number[]>((arr, num) => arr.concat(num * 2), []);\n\n["a", "b"].reduce<Record<string, boolean>>(\n  (accum, name) => ({\n    ...accum,\n    [name]: true,\n  }),\n  {}\n);\n')),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'// .eslintrc.json\n{\n  "rules": {\n    "@typescript-eslint/prefer-reduce-type-parameter": "warn"\n  }\n}\n')),(0,i.kt)("p",null,"This rule is not configurable."),(0,i.kt)("h2",{id:"when-not-to-use-it"},"When Not To Use It"),(0,i.kt)("p",null,"If you don't want to use typechecking in your linting, you can't use this rule."))}m.isMDXComponent=!0}}]);