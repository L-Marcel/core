import { HighlightPlugin, Token } from "..";
import { DangerousStyleEntry } from "../../themes/custom/index";

export type CorePluginSettings = {
  showTabulations?: boolean;
};

function tokenStartWithTabulation(
  token: Token,
  spaces: number
) {
  return (
    token.content.startsWith("\t") ||
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
                `(${fakeTab}|\\t)`,
                "g"
              );

              const sections = token.content
                .split(regex)
                .filter((result) => {
                  return (
                    result !== "\t" && result !== fakeTab
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
                  content: "\t",
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
            .split("\n")
            .map((line, index, list) => {
              if (
                line === "" &&
                list.length - 1 > index &&
                list[index + 1] === ""
              ) {
                line = "\t".repeat(numberOfTabsLastLine);
              } else if (
                line.startsWith("\t") ||
                line.startsWith(fakeTab)
              ) {
                const regex = new RegExp(
                  `(${fakeTab}|\\t)`,
                  "g"
                );

                let inStart = true;
                const sections = line
                  .split(regex)
                  .filter((result) => {
                    const notTab =
                      result !== "\t" && result !== fakeTab;
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
            .join("\n");
        }

        return code;
      },
    },
    {
      showTabulations: true,
    }
  );
