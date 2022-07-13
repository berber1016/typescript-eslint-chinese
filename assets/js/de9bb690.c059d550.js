"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[7740],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8230:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],s={},i="restrict-plus-operands",c={unversionedId:"restrict-plus-operands",id:"restrict-plus-operands",title:"restrict-plus-operands",description:"Requires both operands of addition to have type number or string.",source:"@site/rules/restrict-plus-operands.md",sourceDirName:".",slug:"/restrict-plus-operands",permalink:"/typescript-eslint-chinese/rules/restrict-plus-operands",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657247748,formattedLastUpdatedAt:"2022\u5e747\u67088\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"require-await",permalink:"/typescript-eslint-chinese/rules/require-await"},next:{title:"restrict-template-expressions",permalink:"/typescript-eslint-chinese/rules/restrict-template-expressions"}},p={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"\u274c Incorrect",id:"-incorrect",level:3},{value:"\u2705 Correct",id:"-correct",level:3},{value:"Options",id:"options",level:2},{value:"<code>checkCompoundAssignments</code>",id:"checkcompoundassignments",level:3},{value:"\u274c Incorrect",id:"-incorrect-1",level:4},{value:"\u2705 Correct",id:"-correct-1",level:4},{value:"<code>allowAny</code>",id:"allowany",level:3},{value:"\u274c Incorrect",id:"-incorrect-2",level:4},{value:"\u2705 Correct",id:"-correct-2",level:4},{value:"How to Use",id:"how-to-use",level:2},{value:"Related To",id:"related-to",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"restrict-plus-operands"},(0,o.kt)("inlineCode",{parentName:"h1"},"restrict-plus-operands")),(0,o.kt)("p",null,"Requires both operands of addition to have type ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,o.kt)("h2",{id:"rule-details"},"Rule Details"),(0,o.kt)("p",null,"Examples of code for this rule:"),(0,o.kt)("h3",{id:"-incorrect"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'var foo = "5.5" + 5;\nvar foo = 1n + 1;\n')),(0,o.kt)("h3",{id:"-correct"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'var foo = parseInt("5.5", 10) + 10;\nvar foo = 1n + 1n;\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"The rule accepts an options object with the following properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Options = {\n  // if true, check compound assignments (`+=`)\n  checkCompoundAssignments?: boolean;\n  // if true, 'any' itself and `string`,`bigint`, `number` is allowed.\n  allowAny?: boolean;\n};\n\nconst defaults = {\n  checkCompoundAssignments: false,\n  allowAny: false,\n};\n")),(0,o.kt)("h3",{id:"checkcompoundassignments"},(0,o.kt)("inlineCode",{parentName:"h3"},"checkCompoundAssignments")),(0,o.kt)("p",null,"Examples of code for this rule with ",(0,o.kt)("inlineCode",{parentName:"p"},"{ checkCompoundAssignments: true }"),":"),(0,o.kt)("h4",{id:"-incorrect-1"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/*eslint @typescript-eslint/restrict-plus-operands: ["error", { "checkCompoundAssignments": true }]*/\n\nlet foo: string | undefined;\nfoo += "some data";\n\nlet bar: string = "";\nbar += 0;\n')),(0,o.kt)("h4",{id:"-correct-1"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/*eslint @typescript-eslint/restrict-plus-operands: ["error", { "checkCompoundAssignments": true }]*/\n\nlet foo: number = 0;\nfoo += 1;\n\nlet bar = "";\nbar += "test";\n')),(0,o.kt)("h3",{id:"allowany"},(0,o.kt)("inlineCode",{parentName:"h3"},"allowAny")),(0,o.kt)("p",null,"Examples of code for this rule with ",(0,o.kt)("inlineCode",{parentName:"p"},"{ allowAny: true }"),":"),(0,o.kt)("h4",{id:"-incorrect-2"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"var fn = (a: any, b: boolean) => a + b;\nvar fn = (a: any, b: []) => a + b;\nvar fn = (a: any, b: {}) => a + b;\n")),(0,o.kt)("h4",{id:"-correct-2"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"var fn = (a: any, b: any) => a + b;\nvar fn = (a: any, b: string) => a + b;\nvar fn = (a: any, b: bigint) => a + b;\nvar fn = (a: any, b: number) => a + b;\n")),(0,o.kt)("h2",{id:"how-to-use"},"How to Use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@typescript-eslint/restrict-plus-operands": "error"\n}\n')),(0,o.kt)("h2",{id:"related-to"},"Related To"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TSLint: ",(0,o.kt)("a",{parentName:"li",href:"https://palantir.github.io/tslint/rules/restrict-plus-operands/"},"restrict-plus-operands"))))}m.isMDXComponent=!0}}]);