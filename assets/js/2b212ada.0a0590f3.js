"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[435],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3934:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],s={},l="no-meaningless-void-operator",p={unversionedId:"no-meaningless-void-operator",id:"no-meaningless-void-operator",title:"no-meaningless-void-operator",description:"Disallows the void operator except when used to discard a value.",source:"@site/rules/no-meaningless-void-operator.md",sourceDirName:".",slug:"/no-meaningless-void-operator",permalink:"/typescript-eslint-chinese/rules/no-meaningless-void-operator",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657186506,formattedLastUpdatedAt:"2022\u5e747\u67087\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"no-magic-numbers",permalink:"/typescript-eslint-chinese/rules/no-magic-numbers"},next:{title:"no-misused-new",permalink:"/typescript-eslint-chinese/rules/no-misused-new"}},c={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"\u274c Incorrect",id:"-incorrect",level:3},{value:"\u2705 Correct",id:"-correct",level:3},{value:"Options",id:"options",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"no-meaningless-void-operator"},(0,a.kt)("inlineCode",{parentName:"h1"},"no-meaningless-void-operator")),(0,a.kt)("p",null,"Disallows the ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," operator except when used to discard a value."),(0,a.kt)("p",null,"Disallows the ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," operator when its argument is already of type ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.kt)("h2",{id:"rule-details"},"Rule Details"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," operator is a useful tool to convey the programmer's intent to discard a value. For example, it is recommended as one way of suppressing ",(0,a.kt)("a",{parentName:"p",href:"/typescript-eslint-chinese/rules/no-floating-promises"},(0,a.kt)("inlineCode",{parentName:"a"},"@typescript-eslint/no-floating-promises"))," instead of adding ",(0,a.kt)("inlineCode",{parentName:"p"},".catch()")," to a promise."),(0,a.kt)("p",null,"This rule helps an author catch API changes where previously a value was being discarded at a call site, but the callee changed so it no longer returns a value. When combined with ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/no-unused-expressions"},"no-unused-expressions"),", it also helps ",(0,a.kt)("em",{parentName:"p"},"readers")," of the code by ensuring consistency: a statement that looks like ",(0,a.kt)("inlineCode",{parentName:"p"},"void foo();")," is ",(0,a.kt)("strong",{parentName:"p"},"always")," discarding a return value, and a statement that looks like ",(0,a.kt)("inlineCode",{parentName:"p"},"foo();")," is ",(0,a.kt)("strong",{parentName:"p"},"never")," discarding a return value."),(0,a.kt)("p",null,"Examples of code for this rule:"),(0,a.kt)("h3",{id:"-incorrect"},"\u274c Incorrect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"void (() => {})();\n\nfunction foo() {}\nvoid foo();\n")),(0,a.kt)("h3",{id:"-correct"},"\u2705 Correct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"(() => {})();\n\nfunction foo() {}\nfoo(); // nothing to discard\n\nfunction bar(x: number) {\n  void x; // discarding a number\n  return 2;\n}\nvoid bar(); // discarding a number\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"This rule accepts a single object option with the following default configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@typescript-eslint/no-meaningless-void-operator": [\n    "error",\n    {\n      "checkNever": false\n    }\n  ]\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"checkNever: true")," will suggest removing ",(0,a.kt)("inlineCode",{parentName:"li"},"void")," when the argument has type ",(0,a.kt)("inlineCode",{parentName:"li"},"never"),".")))}m.isMDXComponent=!0}}]);