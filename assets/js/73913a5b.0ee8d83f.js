"use strict";(self.webpackChunktypescript_eslint_chinese=self.webpackChunktypescript_eslint_chinese||[]).push([[2930],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),y=a,m=d["".concat(c,".").concat(y)]||d[y]||p[y]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1799:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],l={},c="return-await",s={unversionedId:"return-await",id:"return-await",title:"return-await",description:"Enforces consistent returning of awaited values.",source:"@site/rules/return-await.md",sourceDirName:".",slug:"/return-await",permalink:"/typescript-eslint-chinese/rules/return-await",draft:!1,tags:[],version:"current",lastUpdatedBy:"GEARLESS JOE",lastUpdatedAt:1657247748,formattedLastUpdatedAt:"2022\u5e747\u67088\u65e5",frontMatter:{},sidebar:"rules",previous:{title:"restrict-template-expressions",permalink:"/typescript-eslint-chinese/rules/restrict-template-expressions"},next:{title:"semi",permalink:"/typescript-eslint-chinese/rules/semi"}},u={},p=[{value:"Rule Details",id:"rule-details",level:2},{value:"How to Use",id:"how-to-use",level:2},{value:"Options",id:"options",level:2},{value:"<code>in-try-catch</code>",id:"in-try-catch",level:3},{value:"\u274c Incorrect",id:"-incorrect",level:4},{value:"\u2705 Correct",id:"-correct",level:4},{value:"<code>always</code>",id:"always",level:3},{value:"\u274c Incorrect",id:"-incorrect-1",level:4},{value:"\u2705 Correct",id:"-correct-1",level:4},{value:"<code>never</code>",id:"never",level:3},{value:"\u274c Incorrect",id:"-incorrect-2",level:4},{value:"\u2705 Correct",id:"-correct-2",level:4}],d={toc:p};function y(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"return-await"},(0,i.kt)("inlineCode",{parentName:"h1"},"return-await")),(0,i.kt)("p",null,"Enforces consistent returning of awaited values."),(0,i.kt)("p",null,"Returning an awaited promise can make sense for better stack trace information as well as for consistent error handling (returned promises will not be caught in an async function try/catch)."),(0,i.kt)("h2",{id:"rule-details"},"Rule Details"),(0,i.kt)("p",null,"This rule builds on top of the ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/no-return-await"},(0,i.kt)("inlineCode",{parentName:"a"},"eslint/no-return-await"))," rule.\nIt expands upon the base rule to add support for optionally requiring ",(0,i.kt)("inlineCode",{parentName:"p"},"return await")," in certain cases."),(0,i.kt)("h2",{id:"how-to-use"},"How to Use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  // note you must disable the base rule as it can report incorrect errors\n  "no-return-await": "off",\n  "@typescript-eslint/return-await": "error"\n}\n')),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'type Options = "in-try-catch" | "always" | "never";\n\nconst defaultOptions: Options = "in-try-catch";\n')),(0,i.kt)("h3",{id:"in-try-catch"},(0,i.kt)("inlineCode",{parentName:"h3"},"in-try-catch")),(0,i.kt)("p",null,"Requires that a returned promise must be ",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"ed in ",(0,i.kt)("inlineCode",{parentName:"p"},"try-catch-finally")," blocks, and disallows it elsewhere.\nSpecifically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if you ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," a promise within a ",(0,i.kt)("inlineCode",{parentName:"li"},"try"),", then it must be ",(0,i.kt)("inlineCode",{parentName:"li"},"await"),"ed."),(0,i.kt)("li",{parentName:"ul"},"if you ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," a promise within a ",(0,i.kt)("inlineCode",{parentName:"li"},"catch"),", and there ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"is no"))," ",(0,i.kt)("inlineCode",{parentName:"li"},"finally"),", then it ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"must not"))," be ",(0,i.kt)("inlineCode",{parentName:"li"},"await"),"ed."),(0,i.kt)("li",{parentName:"ul"},"if you ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," a promise within a ",(0,i.kt)("inlineCode",{parentName:"li"},"catch"),", and there ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"is a"))," ",(0,i.kt)("inlineCode",{parentName:"li"},"finally"),", then it ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"must"))," be ",(0,i.kt)("inlineCode",{parentName:"li"},"await"),"ed."),(0,i.kt)("li",{parentName:"ul"},"if you ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," a promise within a ",(0,i.kt)("inlineCode",{parentName:"li"},"finally"),", then it ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"must not"))," be ",(0,i.kt)("inlineCode",{parentName:"li"},"await"),"ed.")),(0,i.kt)("p",null,"Examples of code with ",(0,i.kt)("inlineCode",{parentName:"p"},"in-try-catch"),":"),(0,i.kt)("h4",{id:"-incorrect"},"\u274c Incorrect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'async function invalidInTryCatch1() {\n  try {\n    return Promise.resolve("try");\n  } catch (e) {}\n}\n\nasync function invalidInTryCatch2() {\n  try {\n    throw new Error("error");\n  } catch (e) {\n    return await Promise.resolve("catch");\n  }\n}\n\nasync function invalidInTryCatch3() {\n  try {\n    throw new Error("error");\n  } catch (e) {\n    return Promise.resolve("catch");\n  } finally {\n    console.log("cleanup");\n  }\n}\n\nasync function invalidInTryCatch4() {\n  try {\n    throw new Error("error");\n  } catch (e) {\n    throw new Error("error2");\n  } finally {\n    return await Promise.resolve("finally");\n  }\n}\n\nasync function invalidInTryCatch5() {\n  return await Promise.resolve("try");\n}\n\nasync function invalidInTryCatch6() {\n  return await "value";\n}\n')),(0,i.kt)("h4",{id:"-correct"},"\u2705 Correct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'async function validInTryCatch1() {\n  try {\n    return await Promise.resolve("try");\n  } catch (e) {}\n}\n\nasync function validInTryCatch2() {\n  try {\n    throw new Error("error");\n  } catch (e) {\n    return Promise.resolve("catch");\n  }\n}\n\nasync function validInTryCatch3() {\n  try {\n    throw new Error("error");\n  } catch (e) {\n    return await Promise.resolve("catch");\n  } finally {\n    console.log("cleanup");\n  }\n}\n\nasync function validInTryCatch4() {\n  try {\n    throw new Error("error");\n  } catch (e) {\n    throw new Error("error2");\n  } finally {\n    return Promise.resolve("finally");\n  }\n}\n\nasync function validInTryCatch5() {\n  return Promise.resolve("try");\n}\n\nasync function validInTryCatch6() {\n  return "value";\n}\n')),(0,i.kt)("h3",{id:"always"},(0,i.kt)("inlineCode",{parentName:"h3"},"always")),(0,i.kt)("p",null,"Requires that all returned promises are ",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"ed."),(0,i.kt)("p",null,"Examples of code with ",(0,i.kt)("inlineCode",{parentName:"p"},"always"),":"),(0,i.kt)("h4",{id:"-incorrect-1"},"\u274c Incorrect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'async function invalidAlways1() {\n  try {\n    return Promise.resolve("try");\n  } catch (e) {}\n}\n\nasync function invalidAlways2() {\n  return Promise.resolve("try");\n}\n\nasync function invalidAlways3() {\n  return await "value";\n}\n')),(0,i.kt)("h4",{id:"-correct-1"},"\u2705 Correct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'async function validAlways1() {\n  try {\n    return await Promise.resolve("try");\n  } catch (e) {}\n}\n\nasync function validAlways2() {\n  return await Promise.resolve("try");\n}\n\nasync function validAlways3() {\n  return "value";\n}\n')),(0,i.kt)("h3",{id:"never"},(0,i.kt)("inlineCode",{parentName:"h3"},"never")),(0,i.kt)("p",null,"Disallows all ",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"ing any returned promises."),(0,i.kt)("p",null,"Examples of code with ",(0,i.kt)("inlineCode",{parentName:"p"},"never"),":"),(0,i.kt)("h4",{id:"-incorrect-2"},"\u274c Incorrect"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'async function invalidNever1() {\n  try {\n    return await Promise.resolve("try");\n  } catch (e) {}\n}\n\nasync function invalidNever2() {\n  return await Promise.resolve("try");\n}\n\nasync function invalidNever3() {\n  return await "value";\n}\n')),(0,i.kt)("h4",{id:"-correct-2"},"\u2705 Correct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'async function validNever1() {\n  try {\n    return Promise.resolve("try");\n  } catch (e) {}\n}\n\nasync function validNever2() {\n  return Promise.resolve("try");\n}\n\nasync function validNever3() {\n  return "value";\n}\n')))}y.isMDXComponent=!0}}]);