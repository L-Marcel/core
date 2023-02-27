export const instalation = `//Using pnpm
pnpm add @lmarcel/highlight

//Using npm
npm install @lmarcel/highlight

//Using yarn
yarn add @lmarcel/highlight`;

export const basicUsage = `<Highlight
theme="oneDark"
language="ts"
code={\`import path from "path";
console.log(path.resolve(__dirname, "test"));\`}
/>`;

export const advancedUsage = `import { useState } from "react";
import { Highlight, EditEvent } from "@lmarcel/highlight";

export default function Home() {
  const [code, setCode] = useState(\`const a = "red";\\nconsole.log(a);\`);

  function handleOnEdit(e: EditEvent) {
    setCode(e.currentTarget.value);
  };

  return (
    <Highlight
      placeholder="Put your code here..."
      style={{
        minWidth: 800
      }}
      editable={true}
      onEdit={handleOnEdit}
      code={code}
      language="javascript"
    />
  );
};`;

export const extendingThemes = `import { HighlightCustomTheme, themes } from "@lmarcel/highlight";

export const myTheme = new HighlightCustomTheme(/*...*/);

export const anotherTheme = new HighlightCustomTheme.extends(myTheme, /*...*/);

export const storybookTheme = HighlightCustomTheme.extends(themes.oneDark, {
  numbersBorderColor: "#1ea7fd",
  backgroundColor: "#272727",
  numbersBackgroundColor: "#2b2a2a",
  numbersColor: "#cfcfcf"
});`;

export const languageDefinitions = `//my custom language definitions
const banner = new HighlightCustomLanguage(
  "myBanner",
  [],
  {
    grammar: {
      "banners": [{
        pattern: /\\btitle\\b/g,
        alias: "banner-title"
      }, {
        pattern: /\\bsubtitle\\b/g,
        alias: "banner-subtitle"
      }, {
        pattern: /\\bend\\b/g,
        alias: "banner-end"
      }]
    },
  }
);

//my javascript language definitions
const javascript = new HighlightCustomLanguage(
  "javascript",
  [],
  {
    grammar: "javascript",
  }
);

javascript.replaceTokenRule(
  "keyword",
  "control-flow",
  (oldToken) => {
    return {
      ...oldToken,
      pattern: /\\b(?<!\\.)(?:(await(?= |\\()|break(?=\\b)|catch(?=[\\s]*\\()|continue(?=\\b)|do(?=\\b)|else(?=\\b)|finally(?=\\b)|for(?=\\b)|if(?=\\b)|return(?=\\b)|switch(?=\\b)|throw(?=\\b)|try(?=\\b)|while(?=\\b)|yield(?=\\b)))/,
      alias: "control-flow",
    };
  }
);

export { javascript };`;

export const customLanguage = `const javascript = new HighlightCustomLanguage(
  "javascript",
  [],
  {
    grammar: "javascript",
  }
);`;

export const tokenRule = `javascript.replaceTokenRule(
  "keyword", //token
  "control-flow", //token rule alias
  (oldToken) => { //function to return the new token rule
    return {
      ...oldToken,

      //regex
      pattern: /\\b(?<!\\.)(?:(await(?= |\\()|break(?=\\b)|catch(?=[\\s]*\\()|continue(?=\\b)|do(?=\\b)|else(?=\\b)|finally(?=\\b)|for(?=\\b)|if(?=\\b)|return(?=\\b)|switch(?=\\b)|throw(?=\\b)|try(?=\\b)|while(?=\\b)|yield(?=\\b)))/,
      
      //token rule alias
      alias: "control-flow", 
    };
  }
);`;

export const usingPlugin = `import { corePlugin, Highlight } from "@lmarcel/highlight";

export function Code(/* ... */) {
  return (
    <Highlight
      plugins={[
        corePlugin()
      ]}
      /* ... */
    />
  );
}`;

export const corePluginCode = `//packages/highlight/src/plugins/custom/corePlugin.ts
export const corePlugin = HighlightPlugin.create<CorePluginSettings>(
  {
    codeLine: (settings, tokens, core) => {
      const spaces = core.tabSize ?? 2;

      if (
        settings?.showTabulations &&
        tokensStartWithTabulation(tokens, spaces)
      ) {
        /* ... */
      }

      return tokens;
    },
    theme: (settings, theme, core) => {
      if (settings?.showTabulations) {
        /* ... */
      }

      return theme;
    },
    code: (settings, code, core) => {
      let numberOfTabsLastLine = 0;

      if (settings?.showTabulations) {
        /* ... */
      }

      return code;
    },
  },
  {
    showTabulations: true,
  }
);`;

export const codeExampleCorePlugin = `import { HighlightPlugin, Token } from "..";
import { DangerousStyleEntry } from "../../themes/custom/index";

export type CorePluginSettings = {
  showTabulations?: boolean;
};

function tokenStartWithTabulation(
  token: Token,
  spaces: number
) {
  return (
    token.content.startsWith("\\t") ||
    token.content.startsWith(" ".repeat(spaces))
  );
}

function tokensStartWithTabulation(
  tokens: Token[],
  spaces: number
) {
  let inStart = true;
  return tokens.some((token) => {
    if (!inStart) {
      return false;
    }

    const haveTabulation = tokenStartWithTabulation(
      token,
      spaces
    );

    if (!haveTabulation && inStart) {
      inStart = false;
    }

    return haveTabulation && inStart;
  });
}

export const corePlugin =
  HighlightPlugin.create<CorePluginSettings>(
    {
      codeLine: (settings, tokens, core) => {
        const spaces = core.tabSize ?? 2;

        if (
          settings?.showTabulations &&
          tokensStartWithTabulation(tokens, spaces)
        ) {
          let inStart = true;
          const newTokens: Token[] = [];

          tokens.forEach((token) => {
            if (
              tokenStartWithTabulation(token, spaces) &&
              inStart
            ) {
              const fakeTab = " ".repeat(spaces);

              const regex = new RegExp(
                \`(\${fakeTab}|\\\\t)\`,
                "g"
              );

              const sections = token.content
                .split(regex)
                .filter((result) => {
                  return (
                    result !== "\\t" && result !== fakeTab
                  );
                });

              const numberOfTabulations =
                sections.length - 1;

              for (
                let index = 1;
                index <= numberOfTabulations;
                index++
              ) {
                const section = sections[index];

                const newTabulation: Token = {
                  ...token,
                  content: "\\t",
                  types: [
                    ...token.types,
                    "core-tabulation",
                  ],
                };

                const newSection: Token = {
                  ...token,
                  content: section,
                };

                newTokens.push(newTabulation);
                newTokens.push(newSection);
              }

              return;
            } else {
              inStart = false;
            }

            newTokens.push(token);
          });

          tokens = newTokens;
        }

        return tokens;
      },
      theme: (settings, theme, core) => {
        if (settings?.showTabulations) {
          theme.styles.push({
            types: ["core-empty-tabulation"],
            style: {
              borderLeftStyle: "solid",
              borderLeftColor: theme.plain?.color,
              borderLeftWidth: 1,
              opacity: 0.4,
              tabSize: core.tabSize,
            } as DangerousStyleEntry,
          });

          theme.styles.push({
            types: ["core-tabulation"],
            style: {
              borderLeftStyle: "solid",
              borderLeftColor: theme.plain?.color,
              borderLeftWidth: 1,
              paddingBottom: 2,
              paddingTop: 2,
              opacity: 0.35,
              tabSize: core.tabSize,
            } as DangerousStyleEntry,
          });
        }

        return theme;
      },
      code: (settings, code, core) => {
        let numberOfTabsLastLine = 0;

        if (settings?.showTabulations) {
          const spaces = core.tabSize ?? 2;
          const fakeTab = " ".repeat(spaces);

          code = code
            .split("\\n")
            .map((line, index, list) => {
              if (
                line === "" &&
                list.length - 1 > index &&
                list[index + 1] === ""
              ) {
                line = "\\t".repeat(numberOfTabsLastLine);
              } else if (
                line.startsWith("\\t") ||
                line.startsWith(fakeTab)
              ) {
                const regex = new RegExp(
                 \`(\${fakeTab}|\\\\t)\`,
                  "g"
                );

                let inStart = true;
                const sections = line
                  .split(regex)
                  .filter((result) => {
                    const notTab =
                      result !== "\\t" && result !== fakeTab;
                    if (result !== "" && notTab) {
                      inStart = false;
                      return notTab;
                    }

                    return notTab && inStart;
                  });

                const newNumberOfTabs = sections.length - 1;
                numberOfTabsLastLine =
                  newNumberOfTabs >= numberOfTabsLastLine
                    ? newNumberOfTabs
                    : numberOfTabsLastLine;
              }

              return line;
            })
            .join("\\n");
        }

        return code;
      },
    },
    {
      showTabulations: true,
    }
  );
`;

export const oneDarkCode = `import { HighlightCustomTheme } from "..";

//based on: https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css
const oneDark = new HighlightCustomTheme(
  {
    color: "hsl(220, 14%, 71%)",
    numbersColor: "#71717A",
    backgroundColor: "hsl(220, 13%, 18%)",
    numbersBackgroundColor: "hsl(218, 14%, 15%)",
    numbersBorderColor: "#9d25ba",
    scrollbarThumbColor: "#ac38c9",
    scrollbarTrackColor: "hsl(218, 15%, 11%)",
  },
  [
    {
      types: ["bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "hsl(220, 10%, 40%)",
      },
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "hsl(220, 14%, 71%)",
      },
    },
    {
      types: [
        "attr-name",
        "class-name",
        "boolean",
        "constant",
        "number",
        "atrule",
      ],
      style: {
        color: "hsl(29, 54%, 61%)",
      },
    },
    {
      types: ["unit"],
      style: {
        color: "hsl(29, 45%, 52%)",
        fontStyle: "italic",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "hsl(286, 60%, 67%)",
      },
    },
    {
      types: [
        "property",
        "tag",
        "symbol",
        "deleted",
        "important",
      ],
      style: {
        color: "hsl(355, 65%, 65%)",
      },
    },
    {
      types: [
        "selector",
        "string",
        "char",
        "builtin",
        "inserted",
        "regex",
        "attr-value",
      ],
      style: {
        color: "hsl(95, 38%, 62%)",
      },
    },
    {
      types: [
        "variable",
        "operator",
        "function",
        "mayble-class-name",
      ],
      style: {
        color: "hsl(207, 82%, 66%)",
      },
    },
    {
      types: ["url"],
      style: {
        color: "hsl(187, 47%, 55%)",
      },
    },
    {
      languages: ["css"],
      types: ["selector"],
      style: {
        color: "hsl(355, 65%, 65%)",
      },
    },
    {
      languages: ["css"],
      types: ["property"],
      style: {
        color: "hsl(220, 14%, 71%)",
      },
    },
    {
      languages: ["css"],
      types: ["function"],
      style: {
        color: "hsl(187, 47%, 55%)",
      },
    },
    {
      languages: ["css"],
      types: ["hexcode"],
      style: {
        color: "hsl(187, 45%, 49%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["css"],
      types: ["string"],
      style: {
        color: "hsl(95, 38%, 62%)",
      },
    },
    {
      languages: ["css"],
      types: ["important", "atrule"],
      style: {
        color: "hsl(286, 60%, 67%)",
      },
    },
    {
      languages: ["javascript"],
      types: ["operator"],
      style: {
        color: "hsl(286, 60%, 67%)",
      },
    },
    {
      languages: ["javascript"],
      types: ["interpolation-punctuation"],
      style: {
        color: "hsl(5, 48%, 51%)",
      },
    },
    {
      languages: ["latex"],
      types: ["selector"],
      style: {
        color: "rgb(152, 195, 121)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["json"],
      types: ["operator"],
      style: {
        color: "hsl(220, 14%, 71%)",
      },
    },

    {
      languages: ["json"],
      types: ["null"],
      style: {
        color: "hsl(29, 54%, 61%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["url", "operator", "string"],
      style: {
        color: "hsl(220, 14%, 71%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["content"],
      style: {
        color: "hsl(207, 82%, 66%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["url-reference"],
      style: {
        color: "hsl(187, 47%, 55%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["url-reference"],
      style: {
        color: "hsl(187, 47%, 55%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["blockquote", "hr"],
      style: {
        color: "hsl(220, 10%, 40%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["markdown"],
      types: ["code-snippet"],
      style: {
        color: "hsl(187, 47%, 55%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["bold"],
      style: {
        color: "hsl(29, 54%, 61%)",
        fontWeight: "bold",
      },
    },
    {
      languages: ["markdown"],
      types: ["italic"],
      style: {
        color: "hsl(286, 60%, 67%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["markdown"],
      types: ["strike", "list", "title", "punctuation"],
      style: {
        color: "hsl(355, 65%, 65%)",
      },
    },
    {
      types: ["macro", "directive-hash"],
      style: {
        color: "hsl(286, 56%, 62%)",
      },
    },
    {
      types: ["class-name"],
      languages: ["tsx", "jsx"],
      style: {
        color: "#E5C07B",
      },
    },
    {
      types: ["attr-name"],
      languages: ["tsx", "jsx"],
      style: {
        color: "#D19A66",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        fontStyle: "italic",
      },
    },
  ]
);

export default oneDark;`;

export const javascriptDefinitionCode = `import { HighlightCustomLanguage } from "..";

const javascript = new HighlightCustomLanguage(
  "javascript",
  [],
  {
    grammar: "javascript",
  }
);

const jsx = new HighlightCustomLanguage("jsx", [], {
  grammar: "jsx",
});

javascript.replaceTokenRule(
  "keyword",
  "control-flow",
  (oldToken) => {
    return {
      ...oldToken,
      pattern:
        /\\b(?<!\\.)(?:(await(?= |\\()|break(?=\\b)|catch(?=[\\s]*\\()|continue(?=\\b)|do(?=\\b)|else(?=\\b)|finally(?=\\b)|for(?=\\b)|if(?=\\b)|return(?=\\b)|switch(?=\\b)|throw(?=\\b)|try(?=\\b)|while(?=\\b)|yield(?=\\b)))/,
      alias: "control-flow",
    };
  }
);

jsx.replaceTokenRule(
  "keyword",
  "control-flow",
  (oldToken) => {
    return {
      ...oldToken,
      pattern:
        /\\b(?<!\\.)(?:(await(?= |\\()|break(?=\\b)|catch(?=[\\s]*\\()|continue(?=\\b)|do(?=\\b)|else(?=\\b)|finally(?=\\b)|for(?=\\b)|if(?=\\b)|return(?=\\b)|switch(?=\\b)|throw(?=\\b)|try(?=\\b)|while(?=\\b)|yield(?=\\b)))/,
      alias: "control-flow",
    };
  }
);

export { javascript, jsx };`;

export const oneLightCode = `import { HighlightCustomTheme } from "..";

//based on: https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-light.css
const oneLight = new HighlightCustomTheme(
  {
    color: "hsl(230, 8%, 24%)",
    numbersColor: "hsl(233, 9%, 18%)",
    backgroundColor: "hsl(230, 1%, 98%)",
    numbersBackgroundColor: "hsl(0, 0%, 94%)",
    numbersBorderColor: "#9d25ba",
    scrollbarThumbColor: "#ac38c9",
    scrollbarTrackColor: "hsl(0, 0%, 88%)",
  },
  [
    {
      types: ["bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "hsl(230, 4%, 64%)",
      },
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "hsl(230, 4%, 64%)",
      },
    },
    {
      types: [
        "attr-name",
        "class-name",
        "boolean",
        "constant",
        "number",
        "atrule",
      ],
      style: {
        color: "hsl(35, 99%, 36%)",
      },
    },
    {
      types: ["unit"],
      style: {
        color: "hsl(35, 99%, 27%)",
        fontStyle: "italic",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "hsl(301, 63%, 40%)",
      },
    },
    {
      types: [
        "property",
        "tag",
        "symbol",
        "deleted",
        "important",
      ],
      style: {
        color: "hsl(5, 74%, 59%)",
      },
    },
    {
      types: [
        "selector",
        "string",
        "char",
        "builtin",
        "inserted",
        "regex",
        "attr-value",
      ],
      style: {
        color: "hsl(119, 34%, 47%)",
      },
    },
    {
      types: ["variable", "operator", "function"],
      style: {
        color: "hsl(221, 87%, 60%)",
      },
    },
    {
      types: ["url"],
      style: {
        color: "hsl(198, 99%, 37%)",
      },
    },
    {
      types: ["css"],
      style: {
        color: "hsl(230, 8%, 24%)",
      },
    },
    {
      languages: ["css"],
      types: ["selector"],
      style: {
        color: "hsl(5, 74%, 59%)",
      },
    },
    {
      languages: ["css"],
      types: ["property"],
      style: {
        color: "hsl(230, 8%, 24%)",
      },
    },
    {
      languages: ["css"],
      types: ["function"],
      style: {
        color: "hsl(198, 99%, 37%)",
      },
    },
    {
      languages: ["css"],
      types: ["hexcode"],
      style: {
        color: "hsl(198, 99%, 33%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["css"],
      types: ["string", "url"],
      style: {
        color: "hsl(119, 34%, 47%)",
      },
    },
    {
      languages: ["css"],
      types: ["important", "atrule"],
      style: {
        color: "hsl(301, 63%, 40%)",
      },
    },
    {
      languages: ["javascript"],
      types: ["operator"],
      style: {
        color: "hsl(301, 63%, 40%)",
      },
    },
    {
      languages: ["javascript"],
      types: ["interpolation-punctuation"],
      style: {
        color: "hsl(344, 84%, 43%)",
      },
    },
    {
      languages: ["latex"],
      types: ["selector"],
      style: {
        color: "hsl(119, 34%, 47%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["json"],
      types: ["operator"],
      style: {
        color: "hsl(230, 8%, 24%)",
      },
    },

    {
      languages: ["json"],
      types: ["null"],
      style: {
        color: "hsl(35, 99%, 36%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["url", "operator", "string"],
      style: {
        color: "hsl(230, 8%, 24%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["content"],
      style: {
        color: "hsl(221, 87%, 60%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["url-reference"],
      style: {
        color: "hsl(221, 87%, 60%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["url-reference"],
      style: {
        color: "hsl(221, 87%, 60%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["blockquote", "hr"],
      style: {
        color: "hsl(230, 4%, 64%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["markdown"],
      types: ["code-snippet"],
      style: {
        color: "hsl(119, 34%, 47%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["bold"],
      style: {
        color: "hsl(35, 99%, 36%)",
        fontWeight: "bold",
      },
    },
    {
      languages: ["markdown"],
      types: ["italic"],
      style: {
        color: "hsl(301, 63%, 40%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["markdown"],
      types: ["strike", "list", "title", "punctuation"],
      style: {
        color: "hsl(5, 74%, 59%)",
      },
    },
    {
      types: ["macro", "directive-hash"],
      style: {
        color: "hsl(301, 63%, 40%)",
      },
    },
    {
      types: ["class-name"],
      languages: ["tsx", "jsx"],
      style: {
        color: "hsl(35, 96%, 42%)",
      },
    },
    {
      types: ["attr-name"],
      languages: ["tsx", "jsx"],
      style: {
        color: "hsl(35, 93%, 42%)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        fontStyle: "italic",
      },
    },
  ]
);

export default oneLight;`;

export const laserwaveCode = `import { HighlightCustomTheme } from "..";

//based on: https://github.com/PrismJS/prism-themes/blob/master/themes/prism-laserwave.css
const laserwave = new HighlightCustomTheme(
  {
    backgroundColor: "#27212e",
    color: "#ffffff",
    numbersColor: "#ebebeb",
    numbersBackgroundColor: "#211b27",
    numbersBorderColor: "#39adbd",
    scrollbarThumbColor: "#40b4c4",
    scrollbarTrackColor: "#1e1824",
  },
  [
    {
      types: ["bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "#91889b",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#7b6995",
      },
    },
    {
      types: ["builtin", "constant", "boolean"],
      style: {
        color: "#ffe261",
      },
    },
    {
      types: ["number"],
      style: {
        color: "#b381c5",
      },
    },
    {
      types: ["unit"],
      style: {
        color: "#9c68af",
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "atrule", "property", "keyword"],
      style: {
        color: "#40b4c4",
      },
    },
    {
      types: ["hexcode"],
      style: {
        color: "#b381c5",
        fontStyle: "italic",
      },
    },
    {
      types: [
        "doctype",
        "operator",
        "inserted",
        "tag",
        "class-name",
        "symbol",
      ],
      style: {
        color: "#74dfc4",
      },
    },
    {
      types: [
        "attr-name",
        "function",
        "deleted",
        "selector",
      ],
      style: {
        color: "#eb64b9",
      },
    },
    {
      types: ["content", "markup"],
      languages: ["markdown"],
      style: {
        color: "#eb64b9",
      },
    },
    {
      types: ["attr-value", "regex", "char", "string"],
      style: {
        color: "#b4dce7",
      },
    },
    {
      types: ["entity", "url", "variable"],
      style: {
        color: "#ffffff",
      },
    },
  ]
);

export default laserwave;`;

export const myBannerDefinitionCode = `import { HighlightCustomLanguage } from "..";

const banner = new HighlightCustomLanguage(
  "myBanner",
  [],
  {
    grammar: {
      "banners": [{
        pattern: /\\btitle\\b/g,
        alias: "banner-title"
      }, {
        pattern: /\\bsubtitle\\b/g,
        alias: "banner-subtitle"
      }, {
        pattern: /\\bend\\b/g,
        alias: "banner-end"
      }]
    },
  }
);

export { banner };`;