import components from "prismjs/components.json";

export function getAllLanguages() {
  return Object.entries(components.languages).reduce(
    (prev, [language, data]) => {
      if (language === "meta") {
        return prev;
      }

      prev.push(language);

      let languageAlias: string[] = [];
      Object.entries(data).forEach(([key, value]) => {
        switch (key) {
          case "title":
            prev.push(value);
            break;
          case "alias":
            if (typeof value === "string") {
              languageAlias.push(value);
              prev.push(value);
            } else {
              languageAlias = value;
              prev = [...prev, ...value];
            }
            break;
          case "aliasTitle":
            languageAlias.forEach((alias) => {
              prev.push(value[alias]);
            });
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
