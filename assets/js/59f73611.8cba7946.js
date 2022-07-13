"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[553],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(t),g=a,d=y["".concat(s,".").concat(g)]||y[g]||u[g]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},349:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],l={},s="no-explicit-any",p={unversionedId:"no-explicit-any",id:"no-explicit-any",title:"no-explicit-any",description:"Disallows the any type.",source:"@site/rules/no-explicit-any.md",sourceDirName:".",slug:"/no-explicit-any",permalink:"/typescript-eslint-chinese/rules/no-explicit-any",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657247748,formattedLastUpdatedAt:"2022\u5e747\u67088\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"no-empty-interface",permalink:"/typescript-eslint-chinese/rules/no-empty-interface"},next:{title:"no-extra-non-null-assertion",permalink:"/typescript-eslint-chinese/rules/no-extra-non-null-assertion"}},c={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"\u274c Incorrect",id:"-incorrect",level:3},{value:"\u2705 Correct",id:"-correct",level:3},{value:"Options",id:"options",level:2},{value:"<code>ignoreRestArgs</code>",id:"ignorerestargs",level:3},{value:"When Not To Use It",id:"when-not-to-use-it",level:2},{value:"Further Reading",id:"further-reading",level:2},{value:"Related To",id:"related-to",level:2}],y={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"no-explicit-any"},(0,o.kt)("inlineCode",{parentName:"h1"},"no-explicit-any")),(0,o.kt)("p",null,"Disallows the ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," type."),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," type defeats the purpose of using TypeScript.\nWhen ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," is used, all compiler type checks around that value are ignored."),(0,o.kt)("h2",{id:"rule-details"},"Rule Details"),(0,o.kt)("p",null,"This rule doesn't allow ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," types to be defined.\nIt aims to keep TypeScript maximally useful.\nTypeScript has a compiler flag for ",(0,o.kt)("inlineCode",{parentName:"p"},"--noImplicitAny")," that will prevent\nan ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," type from being implied by the compiler, but doesn't prevent\n",(0,o.kt)("inlineCode",{parentName:"p"},"any")," from being explicitly used."),(0,o.kt)("h3",{id:"-incorrect"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const age: any = "seventeen";\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const ages: any[] = ["seventeen"];\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const ages: Array<any> = ["seventeen"];\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function greet(): any {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function greet(): any[] {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function greet(): Array<any> {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function greet(): Array<Array<any>> {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function greet(param: Array<any>): string {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function greet(param: Array<any>): Array<any> {}\n")),(0,o.kt)("h3",{id:"-correct"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const age: number = 17;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const ages: number[] = [17];\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const ages: Array<number> = [17];\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function greet(): string {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function greet(): string[] {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function greet(): Array<string> {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function greet(): Array<Array<string>> {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function greet(param: Array<string>): string {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function greet(param: Array<string>): Array<string> {}\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"The rule accepts an options object with the following properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'type Options = {\n  // if true, auto-fixing will be made available in which the "any" type is converted to an "unknown" type\n  fixToUnknown: boolean;\n  // specify if arrays from the rest operator are considered okay\n  ignoreRestArgs: boolean;\n};\n\nconst defaults = {\n  fixToUnknown: false,\n  ignoreRestArgs: false,\n};\n')),(0,o.kt)("h3",{id:"ignorerestargs"},(0,o.kt)("inlineCode",{parentName:"h3"},"ignoreRestArgs")),(0,o.kt)("p",null,"A boolean to specify if arrays from the rest operator are considered okay. ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," by default."),(0,o.kt)("p",null,"Examples of ",(0,o.kt)("strong",{parentName:"p"},"incorrect")," code for the ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "ignoreRestArgs": false }')," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/*eslint @typescript-eslint/no-explicit-any: ["error", { "ignoreRestArgs": false }]*/\n\nfunction foo1(...args: any[]): void {}\nfunction foo2(...args: readonly any[]): void {}\nfunction foo3(...args: Array<any>): void {}\nfunction foo4(...args: ReadonlyArray<any>): void {}\n\ndeclare function bar(...args: any[]): void;\n\nconst baz = (...args: any[]) => {};\nconst qux = function (...args: any[]) {};\n\ntype Quux = (...args: any[]) => void;\ntype Quuz = new (...args: any[]) => void;\n\ninterface Grault {\n  (...args: any[]): void;\n}\ninterface Corge {\n  new (...args: any[]): void;\n}\ninterface Garply {\n  f(...args: any[]): void;\n}\n')),(0,o.kt)("p",null,"Examples of ",(0,o.kt)("strong",{parentName:"p"},"correct")," code for the ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "ignoreRestArgs": true }')," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/*eslint @typescript-eslint/no-explicit-any: ["error", { "ignoreRestArgs": true }]*/\n\nfunction foo1(...args: any[]): void {}\nfunction foo2(...args: readonly any[]): void {}\nfunction foo3(...args: Array<any>): void {}\nfunction foo4(...args: ReadonlyArray<any>): void {}\n\ndeclare function bar(...args: any[]): void;\n\nconst baz = (...args: any[]) => {};\nconst qux = function (...args: any[]) {};\n\ntype Quux = (...args: any[]) => void;\ntype Quuz = new (...args: any[]) => void;\n\ninterface Grault {\n  (...args: any[]): void;\n}\ninterface Corge {\n  new (...args: any[]): void;\n}\ninterface Garply {\n  f(...args: any[]): void;\n}\n')),(0,o.kt)("h2",{id:"when-not-to-use-it"},"When Not To Use It"),(0,o.kt)("p",null,"If an unknown type or a library without typings is used\nand you want to be able to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),"."),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TypeScript ",(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/basic-types.html#any"},"any type"))),(0,o.kt)("h2",{id:"related-to"},"Related To"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TSLint: ",(0,o.kt)("a",{parentName:"li",href:"https://palantir.github.io/tslint/rules/no-any/"},"no-any"))))}g.isMDXComponent=!0}}]);