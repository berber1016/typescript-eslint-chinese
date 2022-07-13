"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[9382],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=c(t),m=a,d=y["".concat(i,".").concat(m)]||y[m]||u[m]||o;return t?r.createElement(d,s(s({ref:n},p),{},{components:t})):r.createElement(d,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=y;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},9216:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),s=["components"],l={},i="no-unsafe-member-access",c={unversionedId:"no-unsafe-member-access",id:"no-unsafe-member-access",title:"no-unsafe-member-access",description:"Disallows member access on a value with type any.",source:"@site/rules/no-unsafe-member-access.md",sourceDirName:".",slug:"/no-unsafe-member-access",permalink:"/typescript-eslint-chinese/rules/no-unsafe-member-access",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657247748,formattedLastUpdatedAt:"2022\u5e747\u67088\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"no-unsafe-call",permalink:"/typescript-eslint-chinese/rules/no-unsafe-call"},next:{title:"no-unsafe-return",permalink:"/typescript-eslint-chinese/rules/no-unsafe-return"}},p={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"\u274c Incorrect",id:"-incorrect",level:3},{value:"\u2705 Correct",id:"-correct",level:3},{value:"Options",id:"options",level:2},{value:"Related To",id:"related-to",level:2}],y={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"no-unsafe-member-access"},(0,o.kt)("inlineCode",{parentName:"h1"},"no-unsafe-member-access")),(0,o.kt)("p",null,"Disallows member access on a value with type ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),"."),(0,o.kt)("p",null,"Despite your best intentions, the ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," type can sometimes leak into your codebase.\nMember access on ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," typed variables is not checked at all by TypeScript, so it creates a potential safety hole, and source of bugs in your codebase."),(0,o.kt)("h2",{id:"rule-details"},"Rule Details"),(0,o.kt)("p",null,"This rule disallows member access on any variable that is typed as ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),"."),(0,o.kt)("p",null,"Examples of code for this rule:"),(0,o.kt)("h3",{id:"-incorrect"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'declare const anyVar: any;\ndeclare const nestedAny: { prop: any };\n\nanyVar.a;\nanyVar.a.b;\nanyVar["a"];\nanyVar["a"]["b"];\n\nnestedAny.prop.a;\nnestedAny.prop["a"];\n\nconst key = "a";\nnestedAny.prop[key];\n\n// Using an any to access a member is unsafe\nconst arr = [1, 2, 3];\narr[anyVar];\nnestedAny[anyVar];\n')),(0,o.kt)("h3",{id:"-correct"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'declare const properlyTyped: { prop: { a: string } };\n\nproperlyTyped.prop.a;\nproperlyTyped.prop["a"];\n\nconst key = "a";\nproperlyTyped.prop[key];\n\nconst arr = [1, 2, 3];\narr[1];\nconst idx = 1;\narr[idx];\narr[idx++];\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'// .eslintrc.json\n{\n  "rules": {\n    "@typescript-eslint/no-unsafe-member-access": "error"\n  }\n}\n')),(0,o.kt)("p",null,"This rule is not configurable."),(0,o.kt)("h2",{id:"related-to"},"Related To"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/typescript-eslint-chinese/rules/no-explicit-any"},(0,o.kt)("inlineCode",{parentName:"a"},"no-explicit-any"))),(0,o.kt)("li",{parentName:"ul"},"TSLint: ",(0,o.kt)("a",{parentName:"li",href:"https://palantir.github.io/tslint/rules/no-unsafe-any/"},(0,o.kt)("inlineCode",{parentName:"a"},"no-unsafe-any")))))}m.isMDXComponent=!0}}]);