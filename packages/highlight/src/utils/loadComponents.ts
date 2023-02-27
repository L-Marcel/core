/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Prism from "prismjs";
import ReactRendererPrism from "prism-react-renderer/prism";
import { HighlightLanguageInput } from "../../languages";
import { getComponents } from "./getComponents";
import { defaultProps } from "prism-react-renderer";
import { HighlightCustomLanguage } from "../languages/custom";
import { isCustomLanguage } from "./isCustomLanguage";

const defaultLoadedComponents = Object.entries(
  defaultProps.Prism.languages
).map(([defaultLanguage]) => {
  return defaultLanguage;
});

const components = getComponents();

export function loadDependencies(language: string) {
  const languages: {
    require?: string[] | string;
  }[] = components.languages as any;

  const component = languages[language as any];

  if (
    component.require &&
    Array.isArray(component.require)
  ) {
    component.require.forEach((dep) => {
      loadDependencies(dep);
      require(`prismjs/components/prism-${dep}`);
    });
  } else if (component.require) {
    loadDependencies(component.require);
    require(`prismjs/components/prism-${component.require}`);
  }
}

function loadComponentIfLanguagesIsEqual(
  language: string,
  alias: string,
  compareTo: string,
  custom?: HighlightCustomLanguage<any, any>
) {
  if (
    alias === compareTo &&
    !defaultLoadedComponents.includes(language) &&
    !custom
  ) {
    loadDependencies(language);
    require(`prismjs/components/prism-${language}`);
    ReactRendererPrism.languages[language] =
      Prism.languages[language];
      
    return true;
  } else if (alias === compareTo && custom) {
    custom.load();
    return true;
  } else if (alias === compareTo) {
    Prism.languages[language] =
      ReactRendererPrism.languages[language];
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

      const custom = isCustomLanguage(availableLanguageData)
        ? availableLanguageData
        : undefined;

      const isLoaded = loadComponentIfLanguagesIsEqual(
        availableLanguage,
        availableLanguage,
        language,
        custom
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
                    custom
                  );
                }
                break;
              case "alias":
                if (typeof value === "string") {
                  loadComponentIfLanguagesIsEqual(
                    availableLanguage,
                    value,
                    language,
                    custom
                  );
                } else if (Array.isArray(value)) {
                  value.forEach((alias) => {
                    loadComponentIfLanguagesIsEqual(
                      availableLanguage,
                      alias,
                      language,
                      custom
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
                      custom
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
