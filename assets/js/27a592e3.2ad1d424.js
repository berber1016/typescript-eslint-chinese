"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[7177],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(y,s(s({ref:t},u),{},{components:n})):a.createElement(y,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6960:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),s=["components"],r={},l="ban-types",p={unversionedId:"ban-types",id:"ban-types",title:"ban-types",description:"Disallows certain types.",source:"@site/rules/ban-types.md",sourceDirName:".",slug:"/ban-types",permalink:"/typescript-eslint-chinese/rules/ban-types",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657247748,formattedLastUpdatedAt:"2022\u5e747\u67088\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"ban-tslint-comment",permalink:"/typescript-eslint-chinese/rules/ban-tslint-comment"},next:{title:"brace-style",permalink:"/typescript-eslint-chinese/rules/brace-style"}},u={},c=[{value:"Rule Details",id:"rule-details",level:2},{value:"Options",id:"options",level:2},{value:"<code>types</code>",id:"types",level:3},{value:"<code>extendDefaults</code>",id:"extenddefaults",level:3},{value:"Default Options",id:"default-options",level:3},{value:"Examples",id:"examples",level:3},{value:"\u274c Incorrect",id:"-incorrect",level:4},{value:"\u2705 Correct",id:"-correct",level:4},{value:"Related To",id:"related-to",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ban-types"},(0,o.kt)("inlineCode",{parentName:"h1"},"ban-types")),(0,o.kt)("p",null,"Disallows certain types."),(0,o.kt)("p",null,"Some builtin types have aliases, some types are considered dangerous or harmful.\nIt's often a good idea to ban certain types to help with consistency and safety."),(0,o.kt)("h2",{id:"rule-details"},"Rule Details"),(0,o.kt)("p",null,"This rule bans specific types and can suggest alternatives.\nNote that it does not ban the corresponding runtime objects from being used."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Options = {\n  types?: {\n    [typeName: string]:\n      | false\n      | string\n      | {\n          message: string;\n          fixWith?: string;\n        };\n  };\n  extendDefaults?: boolean;\n};\n")),(0,o.kt)("p",null,"The rule accepts a single object as options."),(0,o.kt)("h3",{id:"types"},(0,o.kt)("inlineCode",{parentName:"h3"},"types")),(0,o.kt)("p",null,"An object whose keys are the types you want to ban, and the values are error messages."),(0,o.kt)("p",null,"The type can either be a type name literal (",(0,o.kt)("inlineCode",{parentName:"p"},"Foo"),"), a type name with generic parameter instantiation(s) (",(0,o.kt)("inlineCode",{parentName:"p"},"Foo<Bar>"),"), the empty object literal (",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),"), or the empty tuple type (",(0,o.kt)("inlineCode",{parentName:"p"},"[]"),")."),(0,o.kt)("p",null,"The values can be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A string, which is the error message to be reported; or"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"false")," to specifically un-ban this type (useful when you are using ",(0,o.kt)("inlineCode",{parentName:"li"},"extendDefaults"),"); or"),(0,o.kt)("li",{parentName:"ul"},"An object with the following properties:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message: string")," - the message to display when the type is matched."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fixWith?: string")," - a string to replace the banned type with when the fixer is run. If this is omitted, no fix will be done.")))),(0,o.kt)("h3",{id:"extenddefaults"},(0,o.kt)("inlineCode",{parentName:"h3"},"extendDefaults")),(0,o.kt)("p",null,"If you're specifying custom ",(0,o.kt)("inlineCode",{parentName:"p"},"types"),", you can set this to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to extend the default ",(0,o.kt)("inlineCode",{parentName:"p"},"types")," configuration. This is a convenience option to save you copying across the defaults when adding another type."),(0,o.kt)("p",null,"If this is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", the rule will ",(0,o.kt)("em",{parentName:"p"},"only")," use the types defined in your configuration."),(0,o.kt)("p",null,"Example configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "@typescript-eslint/ban-types": [\n    "error",\n    {\n      "types": {\n        // add a custom message to help explain why not to use it\n        "Foo": "Don\'t use Foo because it is unsafe",\n\n        // add a custom message, AND tell the plugin how to fix it\n        "OldAPI": {\n          "message": "Use NewAPI instead",\n          "fixWith": "NewAPI"\n        },\n\n        // un-ban a type that\'s banned by default\n        "{}": false\n      },\n      "extendDefaults": true\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"default-options"},"Default Options"),(0,o.kt)("p",null,'The default options provide a set of "best practices", intended to provide safety and standardization in your codebase:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Don't use the upper-case primitive types, you should use the lower-case types for consistency."),(0,o.kt)("li",{parentName:"ul"},"Avoid the ",(0,o.kt)("inlineCode",{parentName:"li"},"Function")," type, as it provides little safety for the following reasons:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It provides no type safety when calling the value, which means it's easy to provide the wrong arguments."),(0,o.kt)("li",{parentName:"ul"},"It accepts class declarations, which will fail when called, as they are called without the ",(0,o.kt)("inlineCode",{parentName:"li"},"new")," keyword."))),(0,o.kt)("li",{parentName:"ul"},"Avoid the ",(0,o.kt)("inlineCode",{parentName:"li"},"Object")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),' types, as they mean "any non-nullish value".',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'This is a point of confusion for many developers, who think it means "any object type".'),(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/typescript-eslint/typescript-eslint/issues/2063#issuecomment-675156492"},"this comment for more information"),".")))),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"The default options suggest using ",(0,o.kt)("inlineCode",{parentName:"p"},"Record<string, unknown>"),"; this was a stylistic decision, as the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Record")," type is considered to look cleaner.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Default Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const defaultTypes = {\n  String: {\n    message: "Use string instead",\n    fixWith: "string",\n  },\n  Boolean: {\n    message: "Use boolean instead",\n    fixWith: "boolean",\n  },\n  Number: {\n    message: "Use number instead",\n    fixWith: "number",\n  },\n  Symbol: {\n    message: "Use symbol instead",\n    fixWith: "symbol",\n  },\n  BigInt: {\n    message: "Use bigint instead",\n    fixWith: "bigint",\n  },\n\n  Function: {\n    message: [\n      "The `Function` type accepts any function-like value.",\n      "It provides no type safety when calling the function, which can be a common source of bugs.",\n      "It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.",\n      "If you are expecting the function to accept certain arguments, you should explicitly define the function shape.",\n    ].join("\\n"),\n  },\n\n  // object typing\n  Object: {\n    message: [\n      \'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.\',\n      \'- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.\',\n      \'- If you want a type meaning "any value", you probably want `unknown` instead.\',\n    ].join("\\n"),\n  },\n  "{}": {\n    message: [\n      \'`{}` actually means "any non-nullish value".\',\n      \'- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.\',\n      \'- If you want a type meaning "any value", you probably want `unknown` instead.\',\n    ].join("\\n"),\n  },\n};\n'))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Examples of code with the default options:"),(0,o.kt)("h4",{id:"-incorrect"},"\u274c Incorrect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// use lower-case primitives for consistency\nconst str: String = "foo";\nconst bool: Boolean = true;\nconst num: Number = 1;\nconst symb: Symbol = Symbol("foo");\nconst bigInt: BigInt = 1n;\n\n// use a proper function type\nconst func: Function = () => 1;\n\n// use safer object types\nconst capitalObj1: Object = 1;\nconst capitalObj2: Object = { a: "string" };\n\nconst curly1: {} = 1;\nconst curly2: {} = { a: "string" };\n')),(0,o.kt)("h4",{id:"-correct"},"\u2705 Correct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// use lower-case primitives for consistency\nconst str: string = "foo";\nconst bool: boolean = true;\nconst num: number = 1;\nconst symb: symbol = Symbol("foo");\nconst bigInt: bigint = 1n;\n\n// use a proper function type\nconst func: () => number = () => 1;\n\n// use safer object types\nconst lowerObj: object = {};\n\nconst capitalObj1: number = 1;\nconst capitalObj2: { a: string } = { a: "string" };\n\nconst curly1: number = 1;\nconst curly2: Record<"a", string> = { a: "string" };\n')),(0,o.kt)("h2",{id:"related-to"},"Related To"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TSLint: ",(0,o.kt)("a",{parentName:"li",href:"https://palantir.github.io/tslint/rules/ban-types"},"ban-types"))))}m.isMDXComponent=!0}}]);