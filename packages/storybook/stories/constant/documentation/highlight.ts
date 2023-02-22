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

export const languageDefinitions = `const javascript = new HighlightCustomLanguage(
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
export const corePlugin = HighligthPlugin.create<CorePluginSettings>(
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

export const codeExampleCorePlugin = `import { HighligthPlugin, Token } from "..";
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
  HighligthPlugin.create<CorePluginSettings>(
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
    srollbarThumbColor: "#ac38c9",
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