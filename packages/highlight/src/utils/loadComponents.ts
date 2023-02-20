/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Prism from "prism-react-renderer/prism";
import { HighlightLanguageInput } from "../../languages";
import { getComponents } from "./getComponents";
import { defaultProps } from "prism-react-renderer";
import { HighlightCustomLanguage } from "../language/custom";

const defaultLoadedComponents = Object.entries(
  defaultProps.Prism.languages
).map(([defaultLanguage]) => {
  return defaultLanguage;
});

function loadComponentIfLanguagesIsEqual(
  language: string,
  alias: string,
  compareTo: string,
  load?: () => void
) {
  if (
    alias === compareTo &&
    !defaultLoadedComponents.includes(language) &&
    !load
  ) {
    require(`prismjs/components/prism-${language}`);
    return true;
  } else if (
    alias === compareTo &&
    load &&
    typeof load === "function"
  ) {
    //load();
    return true;
  } else if (alias === compareTo) {
    return true;
  }

  return false;
}

export function loadComponents(
  language: HighlightLanguageInput,
  externalLanguages: HighlightCustomLanguage<any, any>[]
) {
  (typeof global !== "undefined" ? global : window).Prism =
    Prism;

  const externalComponents = externalLanguages.reduce(
    (prev, language) => {
      prev[language.name] = language;

      return prev;
    },
    {} as {
      [key: string]: HighlightCustomLanguage<any, any>;
    }
  );

  const components = getComponents();
  const availableLanguages = {
    ...components.languages,
    ...externalComponents,
  };

  Object.entries(availableLanguages).forEach(
    ([availableLanguage, availableLanguageData]) => {
      if (availableLanguage === "meta") {
        return;
      }

      const isCustom = Object.getOwnPropertyNames(
        availableLanguageData
      ).includes("__type");

      const load = isCustom
        ? undefined //(availableLanguageData as any).load
        : undefined;

      const isLoaded = loadComponentIfLanguagesIsEqual(
        availableLanguage,
        availableLanguage,
        language,
        load
      );

      if (!isLoaded) {
        Object.entries(availableLanguageData).forEach(
          ([key, value]) => {
            switch (key) {
              case "title":
                if (typeof value === "string") {
                  loadComponentIfLanguagesIsEqual(
                    availableLanguage,
                    value,
                    language,
                    load
                  );
                }
                break;
              case "alias":
                if (typeof value === "string") {
                  loadComponentIfLanguagesIsEqual(
                    availableLanguage,
                    value,
                    language,
                    load
                  );
                } else if (Array.isArray(value)) {
                  value.forEach((alias) => {
                    loadComponentIfLanguagesIsEqual(
                      availableLanguage,
                      alias,
                      language,
                      load
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
                      language,
                      load
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
