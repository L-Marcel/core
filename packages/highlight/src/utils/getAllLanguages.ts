import components from "prismjs/components.json";

export function getAllLanguagesInputs() {
  return Object.entries(components.languages).reduce(
    (prev, [language, data]) => {
      if (language === "meta") {
        return prev;
      }

      prev.push(language);

      let languageAlias: string[] = [];
      Object.entries(data).forEach(([key, value]) => {
        switch (key) {
          case "alias":
            if (typeof value === "string") {
              languageAlias.push(value);
              prev.push(value);
            } else if (Array.isArray(value)) {
              languageAlias = value;
              prev = [...prev, ...value];
            }
            break;
          default:
            break;
        }
      });

      return prev;
    },
    [] as string[]
  );
}

export function getAllLanguagesComponents() {
  return Object.entries(components.languages).reduce(
    (prev, [language]) => {
      if (language === "meta") {
        return prev;
      }

      prev.push(language);
      return prev;
    },
    [] as string[]
  );
}
