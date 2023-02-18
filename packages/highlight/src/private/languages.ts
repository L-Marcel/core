import fs from "fs";
import {
  getAllLanguagesComponents,
  getAllLanguagesInputs,
} from "../utils/getAllLanguages";

const languagesInputs = getAllLanguagesInputs();
const languagesComponents = getAllLanguagesComponents();

fs.writeFile(
  "languages.d.ts",
  `export type HighlightLanguageInput = ${JSON.stringify(
    languagesInputs,
    null,
    2
  )}[number];

export type HighlightLanguageComponent = ${JSON.stringify(
    languagesComponents,
    null,
    2
  )}[number];
`,
  (err) => {
    console.log(!err ? "Language types generated!" : err);
  }
);
