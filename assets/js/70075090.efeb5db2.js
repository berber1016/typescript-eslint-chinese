"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[8803],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},217:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),l=["components"],i={},s="dot-notation",p={unversionedId:"dot-notation",id:"dot-notation",title:"dot-notation",description:"Enforces dot notation whenever possible.",source:"@site/rules/dot-notation.md",sourceDirName:".",slug:"/dot-notation",permalink:"/typescript-eslint-chinese/rules/dot-notation",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657247748,formattedLastUpdatedAt:"2022\u5e747\u67088\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"default-param-last",permalink:"/typescript-eslint-chinese/rules/default-param-last"},next:{title:"explicit-function-return-type",permalink:"/typescript-eslint-chinese/rules/explicit-function-return-type"}},c={},u=[{value:"Rule Details",id:"rule-details",level:2},{value:"How to Use",id:"how-to-use",level:2},{value:"Options",id:"options",level:2},{value:"<code>allowPrivateClassPropertyAccess</code>",id:"allowprivateclasspropertyaccess",level:3},{value:"<code>allowProtectedClassPropertyAccess</code>",id:"allowprotectedclasspropertyaccess",level:3},{value:"<code>allowIndexSignaturePropertyAccess</code>",id:"allowindexsignaturepropertyaccess",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dot-notation"},(0,a.kt)("inlineCode",{parentName:"h1"},"dot-notation")),(0,a.kt)("p",null,"Enforces dot notation whenever possible."),(0,a.kt)("h2",{id:"rule-details"},"Rule Details"),(0,a.kt)("p",null,"This rule extends the base ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/dot-notation"},(0,a.kt)("inlineCode",{parentName:"a"},"eslint/dot-notation"))," rule.\nIt adds:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for optionally ignoring computed ",(0,a.kt)("inlineCode",{parentName:"li"},"private")," and/or ",(0,a.kt)("inlineCode",{parentName:"li"},"protected")," member access."),(0,a.kt)("li",{parentName:"ul"},"Compatibility with TypeScript's ",(0,a.kt)("inlineCode",{parentName:"li"},"noPropertyAccessFromIndexSignature")," option.")),(0,a.kt)("h2",{id:"how-to-use"},"How to Use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  // note you must disable the base rule as it can report incorrect errors\n  "dot-notation": "off",\n  "@typescript-eslint/dot-notation": ["error"]\n}\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/dot-notation#options"},(0,a.kt)("inlineCode",{parentName:"a"},"eslint/dot-notation"))," options.\nThis rule adds the following options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Options extends BaseDotNotationOptions {\n  allowPrivateClassPropertyAccess?: boolean;\n  allowProtectedClassPropertyAccess?: boolean;\n  allowIndexSignaturePropertyAccess?: boolean;\n}\nconst defaultOptions: Options = {\n  ...baseDotNotationDefaultOptions,\n  allowPrivateClassPropertyAccess: false,\n  allowProtectedClassPropertyAccess: false,\n  allowIndexSignaturePropertyAccess: false,\n};\n")),(0,a.kt)("p",null,"If the TypeScript compiler option ",(0,a.kt)("inlineCode",{parentName:"p"},"noPropertyAccessFromIndexSignature")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", then this rule always allows the use of square bracket notation to access properties of types that have a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," index signature, even if ",(0,a.kt)("inlineCode",{parentName:"p"},"allowIndexSignaturePropertyAccess")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h3",{id:"allowprivateclasspropertyaccess"},(0,a.kt)("inlineCode",{parentName:"h3"},"allowPrivateClassPropertyAccess")),(0,a.kt)("p",null,"Example of a correct code when ",(0,a.kt)("inlineCode",{parentName:"p"},"allowPrivateClassPropertyAccess")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'class X {\n  private priv_prop = 123;\n}\n\nconst x = new X();\nx["priv_prop"] = 123;\n')),(0,a.kt)("h3",{id:"allowprotectedclasspropertyaccess"},(0,a.kt)("inlineCode",{parentName:"h3"},"allowProtectedClassPropertyAccess")),(0,a.kt)("p",null,"Example of a correct code when ",(0,a.kt)("inlineCode",{parentName:"p"},"allowProtectedClassPropertyAccess")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'class X {\n  protected protected_prop = 123;\n}\n\nconst x = new X();\nx["protected_prop"] = 123;\n')),(0,a.kt)("h3",{id:"allowindexsignaturepropertyaccess"},(0,a.kt)("inlineCode",{parentName:"h3"},"allowIndexSignaturePropertyAccess")),(0,a.kt)("p",null,"Example of correct code when ",(0,a.kt)("inlineCode",{parentName:"p"},"allowIndexSignaturePropertyAccess")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'class X {\n  [key: string]: number;\n}\n\nconst x = new X();\nx["hello"] = 123;\n')),(0,a.kt)("p",null,"If the TypeScript compiler option ",(0,a.kt)("inlineCode",{parentName:"p"},"noPropertyAccessFromIndexSignature")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", then the above code is always allowed, even if ",(0,a.kt)("inlineCode",{parentName:"p"},"allowIndexSignaturePropertyAccess")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("sup",null,(0,a.kt)("p",null,"Taken with \u2764\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eslint/eslint/blob/main/docs/rules/dot-notation.md"},"from ESLint core"))))}m.isMDXComponent=!0}}]);