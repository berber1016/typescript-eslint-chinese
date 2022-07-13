"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[9982],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3931:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={},c="typedef",s={unversionedId:"typedef",id:"typedef",title:"typedef",description:"Requires type annotations in certain places.",source:"@site/rules/typedef.md",sourceDirName:".",slug:"/typedef",permalink:"/typescript-eslint-chinese/rules/typedef",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657247748,formattedLastUpdatedAt:"2022\u5e747\u67088\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"type-annotation-spacing",permalink:"/typescript-eslint-chinese/rules/type-annotation-spacing"},next:{title:"unbound-method",permalink:"/typescript-eslint-chinese/rules/unbound-method"}},p={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"Options",id:"options",level:2},{value:"<code>arrayDestructuring</code>",id:"arraydestructuring",level:3},{value:"\u274c Incorrect",id:"-incorrect",level:4},{value:"\u2705 Correct",id:"-correct",level:4},{value:"<code>arrowParameter</code>",id:"arrowparameter",level:3},{value:"\u274c Incorrect",id:"-incorrect-1",level:4},{value:"\u2705 Correct",id:"-correct-1",level:4},{value:"<code>memberVariableDeclaration</code>",id:"membervariabledeclaration",level:3},{value:"\u274c Incorrect",id:"-incorrect-2",level:4},{value:"\u2705 Correct",id:"-correct-2",level:4},{value:"<code>objectDestructuring</code>",id:"objectdestructuring",level:3},{value:"\u274c Incorrect",id:"-incorrect-3",level:4},{value:"\u2705 Correct",id:"-correct-3",level:4},{value:"<code>parameter</code>",id:"parameter",level:3},{value:"\u274c Incorrect",id:"-incorrect-4",level:4},{value:"\u2705 Correct",id:"-correct-4",level:4},{value:"<code>propertyDeclaration</code>",id:"propertydeclaration",level:3},{value:"\u274c Incorrect",id:"-incorrect-5",level:4},{value:"\u2705 Correct",id:"-correct-5",level:4},{value:"<code>variableDeclaration</code>",id:"variabledeclaration",level:3},{value:"\u274c Incorrect",id:"-incorrect-6",level:4},{value:"\u2705 Correct",id:"-correct-6",level:4},{value:"<code>variableDeclarationIgnoreFunction</code>",id:"variabledeclarationignorefunction",level:3},{value:"\u274c Incorrect",id:"-incorrect-7",level:4},{value:"\u2705 Correct",id:"-correct-7",level:4},{value:"When Not To Use It",id:"when-not-to-use-it",level:2},{value:"Further Reading",id:"further-reading",level:2},{value:"Related To",id:"related-to",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"typedef"},(0,o.kt)("inlineCode",{parentName:"h1"},"typedef")),(0,o.kt)("p",null,"Requires type annotations in certain places."),(0,o.kt)("p",null,"TypeScript cannot always infer types for all places in code.\nSome locations require type annotations for their types to be inferred."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class ContainsText {\n  // There must be a type annotation here to infer the type\n  delayedText: string;\n\n  // `typedef` requires a type annotation here to maintain consistency\n  immediateTextExplicit: string = "text";\n\n  // This is still a string type because of its initial value\n  immediateTextImplicit = "text";\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:"))," requiring type annotations unnecessarily can be cumbersome to maintain and generally reduces code readability.\nTypeScript is often better at inferring types than easily written type annotations would allow."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Instead of enabling ",(0,o.kt)("inlineCode",{parentName:"strong"},"typedef"),", it is generally recommended to use the ",(0,o.kt)("inlineCode",{parentName:"strong"},"--noImplicitAny")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"--strictPropertyInitialization")," compiler options to enforce type annotations only when useful.")),(0,o.kt)("h2",{id:"rule-details"},"Rule Details"),(0,o.kt)("p",null,"This rule can enforce type annotations in locations regardless of whether they're required.\nThis is typically used to maintain consistency for element types that sometimes require them."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To enforce type definitions existing on call signatures as per TSLint's ",(0,o.kt)("inlineCode",{parentName:"p"},"arrow-call-signature")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"call-signature")," options, use ",(0,o.kt)("inlineCode",{parentName:"p"},"explicit-function-return-type"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"explicit-module-boundary-types"),".")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Options = {\n  arrayDestructuring?: boolean;\n  arrowParameter?: boolean;\n  memberVariableDeclaration?: boolean;\n  objectDestructuring?: boolean;\n  parameter?: boolean;\n  propertyDeclaration?: boolean;\n  variableDeclaration?: boolean;\n  variableDeclarationIgnoreFunction?: boolean;\n};\n\nconst defaultOptions: Options = {\n  arrayDestructuring: false,\n  arrowParameter: false,\n  memberVariableDeclaration: false,\n  objectDestructuring: false,\n  parameter: false,\n  propertyDeclaration: false,\n  variableDeclaration: false,\n  variableDeclarationIgnoreFunction: false,\n};\n")),(0,o.kt)("p",null,"For example, with the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rules": {\n    "@typescript-eslint/typedef": [\n      "error",\n      {\n        "arrowParameter": true,\n        "variableDeclaration": true\n      }\n    ]\n  }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type annotations on arrow function parameters are required"),(0,o.kt)("li",{parentName:"ul"},"Type annotations on variables are required")),(0,o.kt)("h3",{id:"arraydestructuring"},(0,o.kt)("inlineCode",{parentName:"h3"},"arrayDestructuring")),(0,o.kt)("p",null,"Whether to enforce type annotations on variables declared using array destructuring."),(0,o.kt)("p",null,"Examples of code with ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "arrayDestructuring": true }'),":"),(0,o.kt)("h4",{id:"-incorrect"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const [a] = [1];\nconst [b, c] = [1, 2];\n")),(0,o.kt)("h4",{id:"-correct"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const [a]: number[] = [1];\nconst [b]: [number] = [2];\nconst [c, d]: [boolean, string] = [true, "text"];\n\nfor (const [key, val] of new Map([["key", 1]])) {\n}\n')),(0,o.kt)("h3",{id:"arrowparameter"},(0,o.kt)("inlineCode",{parentName:"h3"},"arrowParameter")),(0,o.kt)("p",null,"Whether to enforce type annotations for parameters of arrow functions."),(0,o.kt)("p",null,"Examples of code with ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "arrowParameter": true }'),":"),(0,o.kt)("h4",{id:"-incorrect-1"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const logsSize = (size) => console.log(size);\n\n["hello", "world"].map((text) => text.length);\n\nconst mapper = {\n  map: (text) => text + "...",\n};\n')),(0,o.kt)("h4",{id:"-correct-1"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const logsSize = (size: number) => console.log(size);\n\n["hello", "world"].map((text: string) => text.length);\n\nconst mapper = {\n  map: (text: string) => text + "...",\n};\n')),(0,o.kt)("h3",{id:"membervariabledeclaration"},(0,o.kt)("inlineCode",{parentName:"h3"},"memberVariableDeclaration")),(0,o.kt)("p",null,"Whether to enforce type annotations on member variables of classes."),(0,o.kt)("p",null,"Examples of code with ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "memberVariableDeclaration": true }'),":"),(0,o.kt)("h4",{id:"-incorrect-2"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class ContainsText {\n  delayedText;\n  immediateTextImplicit = "text";\n}\n')),(0,o.kt)("h4",{id:"-correct-2"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class ContainsText {\n  delayedText: string;\n  immediateTextImplicit: string = "text";\n}\n')),(0,o.kt)("h3",{id:"objectdestructuring"},(0,o.kt)("inlineCode",{parentName:"h3"},"objectDestructuring")),(0,o.kt)("p",null,"Whether to enforce type annotations on variables declared using object destructuring."),(0,o.kt)("p",null,"Examples of code with ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "objectDestructuring": true }'),":"),(0,o.kt)("h4",{id:"-incorrect-3"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const { length } = "text";\nconst [b, c] = Math.random() ? [1, 2] : [3, 4];\n')),(0,o.kt)("h4",{id:"-correct-3"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const { length }: { length: number } = "text";\nconst [b, c]: [number, number] = Math.random() ? [1, 2] : [3, 4];\n\nfor (const { key, val } of [{ key: "key", val: 1 }]) {\n}\n')),(0,o.kt)("h3",{id:"parameter"},(0,o.kt)("inlineCode",{parentName:"h3"},"parameter")),(0,o.kt)("p",null,"Whether to enforce type annotations for parameters of functions and methods."),(0,o.kt)("p",null,"Examples of code with ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "parameter": true }'),":"),(0,o.kt)("h4",{id:"-incorrect-4"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'function logsSize(size): void {\n  console.log(size);\n}\n\nconst doublesSize = function (size): number {\n  return size * 2;\n};\n\nconst divider = {\n  curriesSize(size): number {\n    return size;\n  },\n  dividesSize: function (size): number {\n    return size / 2;\n  },\n};\n\nclass Logger {\n  log(text): boolean {\n    console.log(">", text);\n    return true;\n  }\n}\n')),(0,o.kt)("h4",{id:"-correct-4"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'function logsSize(size: number): void {\n  console.log(size);\n}\n\nconst doublesSize = function (size: number): number {\n  return size * 2;\n};\n\nconst divider = {\n  curriesSize(size: number): number {\n    return size;\n  },\n  dividesSize: function (size: number): number {\n    return size / 2;\n  },\n};\n\nclass Logger {\n  log(text: boolean): boolean {\n    console.log(">", text);\n    return true;\n  }\n}\n')),(0,o.kt)("h3",{id:"propertydeclaration"},(0,o.kt)("inlineCode",{parentName:"h3"},"propertyDeclaration")),(0,o.kt)("p",null,"Whether to enforce type annotations for properties of interfaces and types."),(0,o.kt)("p",null,"Examples of code with ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "propertyDeclaration": true }'),":"),(0,o.kt)("h4",{id:"-incorrect-5"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Members = {\n  member;\n  otherMember;\n};\n")),(0,o.kt)("h4",{id:"-correct-5"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Members = {\n  member: boolean;\n  otherMember: string;\n};\n")),(0,o.kt)("h3",{id:"variabledeclaration"},(0,o.kt)("inlineCode",{parentName:"h3"},"variableDeclaration")),(0,o.kt)("p",null,"Whether to enforce type annotations for variable declarations, excluding array and object destructuring."),(0,o.kt)("p",null,"Examples of code with ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "variableDeclaration": true }'),":"),(0,o.kt)("h4",{id:"-incorrect-6"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const text = "text";\nlet initialText = "text";\nlet delayedText;\n')),(0,o.kt)("h4",{id:"-correct-6"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const text: string = "text";\nlet initialText: string = "text";\nlet delayedText: string;\n')),(0,o.kt)("h3",{id:"variabledeclarationignorefunction"},(0,o.kt)("inlineCode",{parentName:"h3"},"variableDeclarationIgnoreFunction")),(0,o.kt)("p",null,"Ignore variable declarations for non-arrow and arrow functions."),(0,o.kt)("p",null,"Examples of code with ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "variableDeclaration": true, "variableDeclarationIgnoreFunction": true }'),":"),(0,o.kt)("h4",{id:"-incorrect-7"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const text = "text";\n')),(0,o.kt)("h4",{id:"-correct-7"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const a = (): void => {};\nconst b = function (): void => {};\nconst c: () => void = (): void => {};\n\nclass Foo {\n  a = (): void => {};\n  b = function (): void => {};\n  c = () => void = (): void => {};\n}\n")),(0,o.kt)("h2",{id:"when-not-to-use-it"},"When Not To Use It"),(0,o.kt)("p",null,"If you are using stricter TypeScript compiler options, particularly ",(0,o.kt)("inlineCode",{parentName:"p"},"--noImplicitAny")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"--strictPropertyInitialization"),", you likely don't need this rule."),(0,o.kt)("p",null,"In general, if you do not consider the cost of writing unnecessary type annotations reasonable, then do not use this rule."),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://basarat.gitbooks.io/typescript/docs/types/type-system.html"},"TypeScript Type System")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/type-inference.html"},"Type Inference"))),(0,o.kt)("h2",{id:"related-to"},"Related To"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TSLint: ",(0,o.kt)("a",{parentName:"li",href:"https://palantir.github.io/tslint/rules/typedef"},(0,o.kt)("inlineCode",{parentName:"a"},"typedef")))))}m.isMDXComponent=!0}}]);