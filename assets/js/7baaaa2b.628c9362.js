"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[7149],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),u=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=u(n.components);return r.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,a(a({ref:e},c),{},{components:t})):r.createElement(m,a({ref:e},c))}));function d(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4095:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],s={},l="no-confusing-non-null-assertion",u={unversionedId:"no-confusing-non-null-assertion",id:"no-confusing-non-null-assertion",title:"no-confusing-non-null-assertion",description:"Disallows non-null assertion in locations that may be confusing.",source:"@site/rules/no-confusing-non-null-assertion.md",sourceDirName:".",slug:"/no-confusing-non-null-assertion",permalink:"/typescript-eslint-chinese/rules/no-confusing-non-null-assertion",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657247748,formattedLastUpdatedAt:"2022\u5e747\u67088\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"no-base-to-string",permalink:"/typescript-eslint-chinese/rules/no-base-to-string"},next:{title:"no-confusing-void-expression",permalink:"/typescript-eslint-chinese/rules/no-confusing-void-expression"}},c={},p=[{value:"Rule Details",id:"rule-details",level:2},{value:"\u274c Incorrect",id:"-incorrect",level:3},{value:"\u2705 Correct",id:"-correct",level:3},{value:"Options",id:"options",level:2},{value:"When Not To Use It",id:"when-not-to-use-it",level:2},{value:"Further Reading",id:"further-reading",level:2}],f={toc:p};function d(n){var e=n.components,t=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"no-confusing-non-null-assertion"},(0,i.kt)("inlineCode",{parentName:"h1"},"no-confusing-non-null-assertion")),(0,i.kt)("p",null,"Disallows non-null assertion in locations that may be confusing."),(0,i.kt)("h2",{id:"rule-details"},"Rule Details"),(0,i.kt)("p",null,"Using a non-null assertion (",(0,i.kt)("inlineCode",{parentName:"p"},"!"),") next to an assign or equals check (",(0,i.kt)("inlineCode",{parentName:"p"},"=")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"==")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"==="),") creates code that is confusing as it looks similar to a not equals check (",(0,i.kt)("inlineCode",{parentName:"p"},"!=")," ",(0,i.kt)("inlineCode",{parentName:"p"},"!=="),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"a! == b; // a non-null assertions(`!`) and an equals test(`==`)\na !== b; // not equals test(`!==`)\na! === b; // a non-null assertions(`!`) and an triple equals test(`===`)\n")),(0,i.kt)("h3",{id:"-incorrect"},"\u274c Incorrect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'interface Foo {\n  bar?: string;\n  num?: number;\n}\n\nconst foo: Foo = getFoo();\nconst isEqualsBar = foo.bar! == "hello";\nconst isEqualsNum = 1 + foo.num! == 2;\n')),(0,i.kt)("h3",{id:"-correct"},"\u2705 Correct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Foo {\n  bar?: string;\n  num?: number;\n}\n\nconst foo: Foo = getFoo();\nconst isEqualsBar = foo.bar == 'hello';\nconst isEqualsNum = (1 + foo.num!) == 2;\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'// .eslintrc.json\n{\n  "rules": {\n    "@typescript-eslint/no-confusing-non-null-assertion": "warn"\n  }\n}\n')),(0,i.kt)("p",null,"This rule is not configurable."),(0,i.kt)("h2",{id:"when-not-to-use-it"},"When Not To Use It"),(0,i.kt)("p",null,"If you don't care about this confusion, then you will not need this rule."),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/TypeScript/issues/37837"},(0,i.kt)("inlineCode",{parentName:"a"},'Issue: Easy misunderstanding: "! ==="'))," in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/TypeScript"},"TypeScript repo"))))}d.isMDXComponent=!0}}]);