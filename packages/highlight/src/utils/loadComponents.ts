/* eslint-disable @typescript-eslint/no-explicit-any */
import Prism from "prism-react-renderer/prism";
import { HighlightLanguageInput } from "../../languages";
import { getComponents } from "./getComponents";
import { defaultProps } from "prism-react-renderer";

const defaultLoadedComponents = Object.entries(
  defaultProps.Prism.languages
).map(([defaultLanguage]) => {
  return defaultLanguage;
});

function loadComponentIfLanguagesIsEqual(
  language: string,
  alias: string,
  compareTo: string
) {
  if (
    alias === compareTo &&
    !defaultLoadedComponents.includes(language)
  ) {
    require(`prismjs/components/prism-${language}`);
    return true;
  } else if (alias === compareTo) {
    return true;
  }

  return false;
}

export function loadComponents(
  language: HighlightLanguageInput
) {
  (typeof global !== "undefined" ? global : window).Prism =
    Prism;

  const components = getComponents();
  const availableLanguages = components.languages;

  Object.entries(availableLanguages).forEach(
    ([availableLanguage, availableLanguageData]) => {
      if (availableLanguage === "meta") {
        return;
      }

      const isLoaded = loadComponentIfLanguagesIsEqual(
        availableLanguage,
        availableLanguage,
        language
      );

      if (!isLoaded) {
        Object.entries(availableLanguageData).forEach(
          ([key, value]) => {
            switch (key) {
              case "title":
                loadComponentIfLanguagesIsEqual(
                  availableLanguage,
                  value,
                  language
                );
                break;
              case "alias":
                if (typeof value === "string") {
                  loadComponentIfLanguagesIsEqual(
                    availableLanguage,
                    value,
                    language
                  );
                } else if (Array.isArray(value)) {
                  value.forEach((alias) => {
                    loadComponentIfLanguagesIsEqual(
                      availableLanguage,
                      alias,
                      language
                    );
                  });
                }
                break;
              case "aliasTitle":
                Object.entries(value).forEach(
                  ([, title]: any) => {
                    loadComponentIfLanguagesIsEqual(
                      availableLanguage,
                      title,
                      language
                    );
                  }
                );
                break;
              default:
                break;
            }
          }
        );
      }
    }
  );
}
