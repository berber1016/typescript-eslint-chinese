"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[4560],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={},c="no-implicit-any-catch",p={unversionedId:"no-implicit-any-catch",id:"no-implicit-any-catch",title:"no-implicit-any-catch",description:"Disallows usage of the implicit any type in catch clauses.",source:"@site/rules/no-implicit-any-catch.md",sourceDirName:".",slug:"/no-implicit-any-catch",permalink:"/typescript-eslint-chinese/rules/no-implicit-any-catch",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657186506,formattedLastUpdatedAt:"2022\u5e747\u67087\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"no-for-in-array",permalink:"/typescript-eslint-chinese/rules/no-for-in-array"},next:{title:"no-implied-eval",permalink:"/typescript-eslint-chinese/rules/no-implied-eval"}},s={},u=[{value:"DEPRECATED",id:"deprecated",level:2},{value:"Rule Details",id:"rule-details",level:2},{value:"\u274c Incorrect",id:"-incorrect",level:3},{value:"\u2705 Correct",id:"-correct",level:3},{value:"Options",id:"options",level:2},{value:"<code>allowExplicitAny</code>",id:"allowexplicitany",level:3},{value:"When Not To Use It",id:"when-not-to-use-it",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:u};function y(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"no-implicit-any-catch"},(0,i.kt)("inlineCode",{parentName:"h1"},"no-implicit-any-catch")),(0,i.kt)("p",null,"Disallows usage of the implicit ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," type in catch clauses."),(0,i.kt)("p",null,"TypeScript 4.0 added support for adding an explicit ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown")," type annotation on a catch clause variable."),(0,i.kt)("p",null,"By default, TypeScript will type a catch clause variable as ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", so explicitly annotating it as ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown")," can add a lot of safety to your codebase."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"noImplicitAny")," flag in TypeScript does not cover this for backwards compatibility reasons, however you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"useUnknownInCatchVariables")," (part of ",(0,i.kt)("inlineCode",{parentName:"p"},"strict"),") instead of this rule."),(0,i.kt)("h2",{id:"deprecated"},"DEPRECATED"),(0,i.kt)("h2",{id:"rule-details"},"Rule Details"),(0,i.kt)("p",null,"This rule requires an explicit type to be declared on a catch clause variable."),(0,i.kt)("p",null,"Examples of code for this rule:"),(0,i.kt)("h3",{id:"-incorrect"},"\u274c Incorrect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  // ...\n} catch (e) {\n  // ...\n}\n")),(0,i.kt)("h3",{id:"-correct"},"\u2705 Correct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  // ...\n} catch (e: unknown) {\n  // ...\n}\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"The rule accepts an options object with the following properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type Options = {\n  // if false, disallow specifying `: any` as the error type as well. See also `no-explicit-any`\n  allowExplicitAny: boolean;\n};\n\nconst defaults = {\n  allowExplicitAny: false,\n};\n")),(0,i.kt)("h3",{id:"allowexplicitany"},(0,i.kt)("inlineCode",{parentName:"h3"},"allowExplicitAny")),(0,i.kt)("p",null,"The follow is is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"not"))," considered a warning with ",(0,i.kt)("inlineCode",{parentName:"p"},"{ allowExplicitAny: true }")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  // ...\n} catch (e: any) {\n  // ...\n}\n")),(0,i.kt)("h2",{id:"when-not-to-use-it"},"When Not To Use It"),(0,i.kt)("p",null,"If you are not using TypeScript 4.0 (or greater), then you will not be able to use this rule, annotations on catch clauses is not supported."),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/#unknown-on-catch"},"TypeScript 4.0 Release Notes"))))}y.isMDXComponent=!0}}]);