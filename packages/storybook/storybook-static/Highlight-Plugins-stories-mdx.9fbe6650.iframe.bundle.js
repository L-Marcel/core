"use strict";(self.webpackChunk_lmarcel_book=self.webpackChunk_lmarcel_book||[]).push([[976],{"./stories/constant/documentation/highlight.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cp:()=>codeExampleCorePlugin,Jt:()=>instalation,dV:()=>oneDarkCode,dw:()=>usingPlugin,fH:()=>extendingThemes,fI:()=>customLanguage,kP:()=>advancedUsage,lQ:()=>tokenRule,nc:()=>languageDefinitions,oQ:()=>javascriptDefinitionCode,tN:()=>corePluginCode,uR:()=>basicUsage});var instalation="//Using pnpm\npnpm add @lmarcel/highlight\n\n//Using npm\nnpm install @lmarcel/highlight\n\n//Using yarn\nyarn add @lmarcel/highlight",basicUsage='<Highlight\ntheme="oneDark"\nlanguage="ts"\ncode={`import path from "path";\nconsole.log(path.resolve(__dirname, "test"));`}\n/>',advancedUsage='import { useState } from "react";\nimport { Highlight, EditEvent } from "@lmarcel/highlight";\n\nexport default function Home() {\n  const [code, setCode] = useState(`const a = "red";\\nconsole.log(a);`);\n\n  function handleOnEdit(e: EditEvent) {\n    setCode(e.currentTarget.value);\n  };\n\n  return (\n    <Highlight\n      placeholder="Put your code here..."\n      style={{\n        minWidth: 800\n      }}\n      editable={true}\n      onEdit={handleOnEdit}\n      code={code}\n      language="javascript"\n    />\n  );\n};',extendingThemes='import { HighlightCustomTheme, themes } from "@lmarcel/highlight";\n\nexport const myTheme = new HighlightCustomTheme(/*...*/);\n\nexport const anotherTheme = new HighlightCustomTheme.extends(myTheme, /*...*/);\n\nexport const storybookTheme = HighlightCustomTheme.extends(themes.oneDark, {\n  numbersBorderColor: "#1ea7fd",\n  backgroundColor: "#272727",\n  numbersBackgroundColor: "#2b2a2a",\n  numbersColor: "#cfcfcf"\n});',languageDefinitions='const javascript = new HighlightCustomLanguage(\n  "javascript",\n  [],\n  {\n    grammar: "javascript",\n  }\n);\n\njavascript.replaceTokenRule(\n  "keyword",\n  "control-flow",\n  (oldToken) => {\n    return {\n      ...oldToken,\n      pattern: /\\b(?<!\\.)(?:(await(?= |\\()|break(?=\\b)|catch(?=[\\s]*\\()|continue(?=\\b)|do(?=\\b)|else(?=\\b)|finally(?=\\b)|for(?=\\b)|if(?=\\b)|return(?=\\b)|switch(?=\\b)|throw(?=\\b)|try(?=\\b)|while(?=\\b)|yield(?=\\b)))/,\n      alias: "control-flow",\n    };\n  }\n);\n\nexport { javascript };',customLanguage='const javascript = new HighlightCustomLanguage(\n  "javascript",\n  [],\n  {\n    grammar: "javascript",\n  }\n);',tokenRule='javascript.replaceTokenRule(\n  "keyword", //token\n  "control-flow", //token rule alias\n  (oldToken) => { //function to return the new token rule\n    return {\n      ...oldToken,\n\n      //regex\n      pattern: /\\b(?<!\\.)(?:(await(?= |\\()|break(?=\\b)|catch(?=[\\s]*\\()|continue(?=\\b)|do(?=\\b)|else(?=\\b)|finally(?=\\b)|for(?=\\b)|if(?=\\b)|return(?=\\b)|switch(?=\\b)|throw(?=\\b)|try(?=\\b)|while(?=\\b)|yield(?=\\b)))/,\n      \n      //token rule alias\n      alias: "control-flow", \n    };\n  }\n);',usingPlugin='import { corePlugin, Highlight } from "@lmarcel/highlight";\n\nexport function Code(/* ... */) {\n  return (\n    <Highlight\n      plugins={[\n        corePlugin()\n      ]}\n      /* ... */\n    />\n  );\n}',corePluginCode="//packages/highlight/src/plugins/custom/corePlugin.ts\nexport const corePlugin = HighligthPlugin.create<CorePluginSettings>(\n  {\n    codeLine: (settings, tokens, core) => {\n      const spaces = core.tabSize ?? 2;\n\n      if (\n        settings?.showTabulations &&\n        tokensStartWithTabulation(tokens, spaces)\n      ) {\n        /* ... */\n      }\n\n      return tokens;\n    },\n    theme: (settings, theme, core) => {\n      if (settings?.showTabulations) {\n        /* ... */\n      }\n\n      return theme;\n    },\n    code: (settings, code, core) => {\n      let numberOfTabsLastLine = 0;\n\n      if (settings?.showTabulations) {\n        /* ... */\n      }\n\n      return code;\n    },\n  },\n  {\n    showTabulations: true,\n  }\n);",codeExampleCorePlugin='import { HighligthPlugin, Token } from "..";\nimport { DangerousStyleEntry } from "../../themes/custom/index";\n\nexport type CorePluginSettings = {\n  showTabulations?: boolean;\n};\n\nfunction tokenStartWithTabulation(\n  token: Token,\n  spaces: number\n) {\n  return (\n    token.content.startsWith("\\t") ||\n    token.content.startsWith(" ".repeat(spaces))\n  );\n}\n\nfunction tokensStartWithTabulation(\n  tokens: Token[],\n  spaces: number\n) {\n  let inStart = true;\n  return tokens.some((token) => {\n    if (!inStart) {\n      return false;\n    }\n\n    const haveTabulation = tokenStartWithTabulation(\n      token,\n      spaces\n    );\n\n    if (!haveTabulation && inStart) {\n      inStart = false;\n    }\n\n    return haveTabulation && inStart;\n  });\n}\n\nexport const corePlugin =\n  HighligthPlugin.create<CorePluginSettings>(\n    {\n      codeLine: (settings, tokens, core) => {\n        const spaces = core.tabSize ?? 2;\n\n        if (\n          settings?.showTabulations &&\n          tokensStartWithTabulation(tokens, spaces)\n        ) {\n          let inStart = true;\n          const newTokens: Token[] = [];\n\n          tokens.forEach((token) => {\n            if (\n              tokenStartWithTabulation(token, spaces) &&\n              inStart\n            ) {\n              const fakeTab = " ".repeat(spaces);\n\n              const regex = new RegExp(\n                `(${fakeTab}|\\\\t)`,\n                "g"\n              );\n\n              const sections = token.content\n                .split(regex)\n                .filter((result) => {\n                  return (\n                    result !== "\\t" && result !== fakeTab\n                  );\n                });\n\n              const numberOfTabulations =\n                sections.length - 1;\n\n              for (\n                let index = 1;\n                index <= numberOfTabulations;\n                index++\n              ) {\n                const section = sections[index];\n\n                const newTabulation: Token = {\n                  ...token,\n                  content: "\\t",\n                  types: [\n                    ...token.types,\n                    "core-tabulation",\n                  ],\n                };\n\n                const newSection: Token = {\n                  ...token,\n                  content: section,\n                };\n\n                newTokens.push(newTabulation);\n                newTokens.push(newSection);\n              }\n\n              return;\n            } else {\n              inStart = false;\n            }\n\n            newTokens.push(token);\n          });\n\n          tokens = newTokens;\n        }\n\n        return tokens;\n      },\n      theme: (settings, theme, core) => {\n        if (settings?.showTabulations) {\n          theme.styles.push({\n            types: ["core-empty-tabulation"],\n            style: {\n              borderLeftStyle: "solid",\n              borderLeftColor: theme.plain?.color,\n              borderLeftWidth: 1,\n              opacity: 0.4,\n              tabSize: core.tabSize,\n            } as DangerousStyleEntry,\n          });\n\n          theme.styles.push({\n            types: ["core-tabulation"],\n            style: {\n              borderLeftStyle: "solid",\n              borderLeftColor: theme.plain?.color,\n              borderLeftWidth: 1,\n              paddingBottom: 2,\n              paddingTop: 2,\n              opacity: 0.35,\n              tabSize: core.tabSize,\n            } as DangerousStyleEntry,\n          });\n        }\n\n        return theme;\n      },\n      code: (settings, code, core) => {\n        let numberOfTabsLastLine = 0;\n\n        if (settings?.showTabulations) {\n          const spaces = core.tabSize ?? 2;\n          const fakeTab = " ".repeat(spaces);\n\n          code = code\n            .split("\\n")\n            .map((line, index, list) => {\n              if (\n                line === "" &&\n                list.length - 1 > index &&\n                list[index + 1] === ""\n              ) {\n                line = "\\t".repeat(numberOfTabsLastLine);\n              } else if (\n                line.startsWith("\\t") ||\n                line.startsWith(fakeTab)\n              ) {\n                const regex = new RegExp(\n                 `(${fakeTab}|\\\\t)`,\n                  "g"\n                );\n\n                let inStart = true;\n                const sections = line\n                  .split(regex)\n                  .filter((result) => {\n                    const notTab =\n                      result !== "\\t" && result !== fakeTab;\n                    if (result !== "" && notTab) {\n                      inStart = false;\n                      return notTab;\n                    }\n\n                    return notTab && inStart;\n                  });\n\n                const newNumberOfTabs = sections.length - 1;\n                numberOfTabsLastLine =\n                  newNumberOfTabs >= numberOfTabsLastLine\n                    ? newNumberOfTabs\n                    : numberOfTabsLastLine;\n              }\n\n              return line;\n            })\n            .join("\\n");\n        }\n\n        return code;\n      },\n    },\n    {\n      showTabulations: true,\n    }\n  );\n',oneDarkCode='import { HighlightCustomTheme } from "..";\n\n//based on: https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css\nconst oneDark = new HighlightCustomTheme(\n  {\n    color: "hsl(220, 14%, 71%)",\n    numbersColor: "#71717A",\n    backgroundColor: "hsl(220, 13%, 18%)",\n    numbersBackgroundColor: "hsl(218, 14%, 15%)",\n    numbersBorderColor: "#9d25ba",\n    srollbarThumbColor: "#ac38c9",\n    scrollbarTrackColor: "hsl(218, 15%, 11%)",\n  },\n  [\n    {\n      types: ["bold"],\n      style: {\n        fontWeight: "bold",\n      },\n    },\n    {\n      types: ["italic"],\n      style: {\n        fontStyle: "italic",\n      },\n    },\n    {\n      types: ["comment", "prolog", "cdata"],\n      style: {\n        color: "hsl(220, 10%, 40%)",\n      },\n    },\n    {\n      types: ["doctype", "punctuation", "entity"],\n      style: {\n        color: "hsl(220, 14%, 71%)",\n      },\n    },\n    {\n      types: [\n        "attr-name",\n        "class-name",\n        "boolean",\n        "constant",\n        "number",\n        "atrule",\n      ],\n      style: {\n        color: "hsl(29, 54%, 61%)",\n      },\n    },\n    {\n      types: ["unit"],\n      style: {\n        color: "hsl(29, 45%, 52%)",\n        fontStyle: "italic",\n      },\n    },\n    {\n      types: ["keyword"],\n      style: {\n        color: "hsl(286, 60%, 67%)",\n      },\n    },\n    {\n      types: [\n        "property",\n        "tag",\n        "symbol",\n        "deleted",\n        "important",\n      ],\n      style: {\n        color: "hsl(355, 65%, 65%)",\n      },\n    },\n    {\n      types: [\n        "selector",\n        "string",\n        "char",\n        "builtin",\n        "inserted",\n        "regex",\n        "attr-value",\n      ],\n      style: {\n        color: "hsl(95, 38%, 62%)",\n      },\n    },\n    {\n      types: [\n        "variable",\n        "operator",\n        "function",\n        "mayble-class-name",\n      ],\n      style: {\n        color: "hsl(207, 82%, 66%)",\n      },\n    },\n    {\n      types: ["url"],\n      style: {\n        color: "hsl(187, 47%, 55%)",\n      },\n    },\n    {\n      languages: ["css"],\n      types: ["selector"],\n      style: {\n        color: "hsl(355, 65%, 65%)",\n      },\n    },\n    {\n      languages: ["css"],\n      types: ["property"],\n      style: {\n        color: "hsl(220, 14%, 71%)",\n      },\n    },\n    {\n      languages: ["css"],\n      types: ["function"],\n      style: {\n        color: "hsl(187, 47%, 55%)",\n      },\n    },\n    {\n      languages: ["css"],\n      types: ["hexcode"],\n      style: {\n        color: "hsl(187, 45%, 49%)",\n        fontStyle: "italic",\n      },\n    },\n    {\n      languages: ["css"],\n      types: ["string"],\n      style: {\n        color: "hsl(95, 38%, 62%)",\n      },\n    },\n    {\n      languages: ["css"],\n      types: ["important", "atrule"],\n      style: {\n        color: "hsl(286, 60%, 67%)",\n      },\n    },\n    {\n      languages: ["javascript"],\n      types: ["operator"],\n      style: {\n        color: "hsl(286, 60%, 67%)",\n      },\n    },\n    {\n      languages: ["javascript"],\n      types: ["interpolation-punctuation"],\n      style: {\n        color: "hsl(5, 48%, 51%)",\n      },\n    },\n    {\n      languages: ["latex"],\n      types: ["selector"],\n      style: {\n        color: "rgb(152, 195, 121)",\n        fontStyle: "italic",\n      },\n    },\n    {\n      languages: ["json"],\n      types: ["operator"],\n      style: {\n        color: "hsl(220, 14%, 71%)",\n      },\n    },\n\n    {\n      languages: ["json"],\n      types: ["null"],\n      style: {\n        color: "hsl(29, 54%, 61%)",\n      },\n    },\n    {\n      languages: ["markdown"],\n      types: ["url", "operator", "string"],\n      style: {\n        color: "hsl(220, 14%, 71%)",\n      },\n    },\n    {\n      languages: ["markdown"],\n      types: ["content"],\n      style: {\n        color: "hsl(207, 82%, 66%)",\n      },\n    },\n    {\n      languages: ["markdown"],\n      types: ["url-reference"],\n      style: {\n        color: "hsl(187, 47%, 55%)",\n      },\n    },\n    {\n      languages: ["markdown"],\n      types: ["url-reference"],\n      style: {\n        color: "hsl(187, 47%, 55%)",\n      },\n    },\n    {\n      languages: ["markdown"],\n      types: ["blockquote", "hr"],\n      style: {\n        color: "hsl(220, 10%, 40%)",\n        fontStyle: "italic",\n      },\n    },\n    {\n      languages: ["markdown"],\n      types: ["code-snippet"],\n      style: {\n        color: "hsl(187, 47%, 55%)",\n      },\n    },\n    {\n      languages: ["markdown"],\n      types: ["bold"],\n      style: {\n        color: "hsl(29, 54%, 61%)",\n        fontWeight: "bold",\n      },\n    },\n    {\n      languages: ["markdown"],\n      types: ["italic"],\n      style: {\n        color: "hsl(286, 60%, 67%)",\n        fontStyle: "italic",\n      },\n    },\n    {\n      languages: ["markdown"],\n      types: ["strike", "list", "title", "punctuation"],\n      style: {\n        color: "hsl(355, 65%, 65%)",\n      },\n    },\n    {\n      types: ["macro", "directive-hash"],\n      style: {\n        color: "hsl(286, 56%, 62%)",\n      },\n    },\n    {\n      types: ["class-name"],\n      languages: ["tsx", "jsx"],\n      style: {\n        color: "#E5C07B",\n      },\n    },\n    {\n      types: ["attr-name"],\n      languages: ["tsx", "jsx"],\n      style: {\n        color: "#D19A66",\n        fontStyle: "italic",\n      },\n    },\n    {\n      types: ["comment"],\n      style: {\n        fontStyle: "italic",\n      },\n    },\n  ]\n);\n\nexport default oneDark;',javascriptDefinitionCode='import { HighlightCustomLanguage } from "..";\n\nconst javascript = new HighlightCustomLanguage(\n  "javascript",\n  [],\n  {\n    grammar: "javascript",\n  }\n);\n\nconst jsx = new HighlightCustomLanguage("jsx", [], {\n  grammar: "jsx",\n});\n\njavascript.replaceTokenRule(\n  "keyword",\n  "control-flow",\n  (oldToken) => {\n    return {\n      ...oldToken,\n      pattern:\n        /\\b(?<!\\.)(?:(await(?= |\\()|break(?=\\b)|catch(?=[\\s]*\\()|continue(?=\\b)|do(?=\\b)|else(?=\\b)|finally(?=\\b)|for(?=\\b)|if(?=\\b)|return(?=\\b)|switch(?=\\b)|throw(?=\\b)|try(?=\\b)|while(?=\\b)|yield(?=\\b)))/,\n      alias: "control-flow",\n    };\n  }\n);\n\njsx.replaceTokenRule(\n  "keyword",\n  "control-flow",\n  (oldToken) => {\n    return {\n      ...oldToken,\n      pattern:\n        /\\b(?<!\\.)(?:(await(?= |\\()|break(?=\\b)|catch(?=[\\s]*\\()|continue(?=\\b)|do(?=\\b)|else(?=\\b)|finally(?=\\b)|for(?=\\b)|if(?=\\b)|return(?=\\b)|switch(?=\\b)|throw(?=\\b)|try(?=\\b)|while(?=\\b)|yield(?=\\b)))/,\n      alias: "control-flow",\n    };\n  }\n);\n\nexport { javascript, jsx };'},"./stories/constant/theme/highlight.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>storybookTheme});var _lmarcel_highlight__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../highlight/dist/index.js"),storybookTheme=_lmarcel_highlight__WEBPACK_IMPORTED_MODULE_0__.HighlightCustomTheme.extends(_lmarcel_highlight__WEBPACK_IMPORTED_MODULE_0__.themes.oneDark,{numbersBorderColor:"#1ea7fd",backgroundColor:"#272727",scrollbarTrackColor:"#242323",srollbarThumbColor:"#1ea7fd",numbersBackgroundColor:"#242323",numbersColor:"#cfcfcf"})},"./stories/Highlight/Plugins.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/.pnpm/core-js@3.27.1/node_modules/core-js/modules/es.object.assign.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+addon-docs@6.5.16_roqby4na46ow4afvcs66y4x42e/node_modules/@storybook/addon-docs/dist/esm/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),_lmarcel_highlight__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../highlight/dist/index.js"),_constant_documentation_highlight__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./stories/constant/documentation/highlight.ts"),_constant_theme_highlight__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./stories/constant/theme/highlight.ts");function _createMdxContent(props){var _components=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Highlight/Plugins"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{children:"Plugins"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["One of the most complex and most useful parts. A single plugin can make changes to code, theme, tokens, property of rendered lines and other things. The library itself already comes with a very simple plugin that I created for testing, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"corePlugin"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Currently its only function is to style spaces generated by tabs."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"See how to use:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lmarcel_highlight__WEBPACK_IMPORTED_MODULE_5__.Highlight,{theme:_constant_theme_highlight__WEBPACK_IMPORTED_MODULE_6__.j,language:"ts",full:!0,style:{marginBottom:"1rem"},code:_constant_documentation_highlight__WEBPACK_IMPORTED_MODULE_7__.dw}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Plugins are executed in the same order they are passed to the component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The plugin must always be passed as a function, because it can receive specific settings from it. Avoid using too many plugins simultaneously, it can hurt ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"performance"})," and some can ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"conflict"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Here is an example of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"structure"})," of a plugin:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lmarcel_highlight__WEBPACK_IMPORTED_MODULE_5__.Highlight,{theme:_constant_theme_highlight__WEBPACK_IMPORTED_MODULE_6__.j,language:"ts",full:!0,style:{marginBottom:"1rem"},code:_constant_documentation_highlight__WEBPACK_IMPORTED_MODULE_7__.tN}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The functions follow the same pattern. The first parameter is the plugin's ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"settings"}),", the second is the value it wants to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"change"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"return"})," and the last is the main ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"properties"})," passed to the component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Does not support ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"async"})," functions!"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["I left a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://core-l-marcel.vercel.app/?path=/story/highlight-examples--editable-with-plugin",children:"demo"})," of this plugin. I made something very simple, so take it easy if you find fault!"]})]})}function MDXContent(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_Object$assign=Object.assign({},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components),MDXLayout=_Object$assign.wrapper;return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Highlight/Plugins",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react__WEBPACK_IMPORTED_MODULE_1__.createElement(MDXContent,null))}});const __WEBPACK_DEFAULT_EXPORT__=componentMeta;var __namedExportsOrder=["__page"]}}]);