import fs from "fs";
import { getAllLanguages } from "../utils/getAllLanguages";

const languages = getAllLanguages();

fs.writeFile(
  "languages.d.ts",
  `export type HighlightLanguage = keyof ${JSON.stringify(
    languages,
    null,
    2
  )};
`,
  (err) => {
    console.log(!err ? "Language types generated!" : err);
  }
);
