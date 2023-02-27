/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import ReactRendererPrism from "prism-react-renderer/prism";
import { getAllLanguagesComponents } from "../utils/getAllLanguages";
import { loadComponents } from "../utils/loadComponents";
import { HighlightLanguageInput } from "../../languages";
import Prism, { Grammar } from "prismjs";

export const definedTokens = [
  "char",
  "cdata",
  "doctype",
  "entity",
  "class-name",
  "boolean",
  "property",
  "function",
  "maybe-class-name",
  "method",
  "function-variable",
  "variable",
  "attr-name",
  "punctuation",
  "operator",
  "control-flow",
  "markup",
  "tag",
  "atrule",
  "deleted",
  "selector",
  "url",
  "string",
  "attr-value",
  "template-punctuation",
  "constant",
  "number",
  "builtin",
  "changed",
  "keyword",
  "interpolation-punctuation",
  "comment",
  "inserted",
  "important",
  "content",
  "null",
  "prolog",
  "blockquote",
  "hr",
  "code-snippet",
  "italic",
  "style",
  "bold",
  "strike",
  "list",
  "title",
  "property-line",
  "property-declaration",
  "hexcode",
  "unit",
  "macro",
  "symbol",
  "regex",
  "directive-hash",
];

const languagesInputs = getAllLanguagesComponents();
let tokens: string[] = definedTokens;
const loadedGrammars: string[] = [];

function loadGrammar(grammar: Grammar, language: string) {
  if (
    !grammar ||
    !language ||
    loadedGrammars.includes(language)
  ) {
    return;
  }

  Object.entries(grammar).forEach(
    ([key, value]: [string, any]) => {
      tokens.push(key);

      if (
        typeof value === "object" &&
        !Array.isArray(value) &&
        value["inside"]
      ) {
        //const grammarInside = value["inside"] as Grammar;
        //loadGrammar(grammarInside, language);
      } else if (Array.isArray(value)) {
        value.forEach((token) => {
          // if (token["inside"]) {
          //   const grammarInside = token[
          //     "inside"
          //   ] as Grammar;
          //   loadGrammar(grammarInside, language);
          // }

          const alias = token["alias"];
          if (alias && Array.isArray(alias)) {
            tokens = [...tokens, ...alias];
          } else if (alias) {
            tokens.push(alias);
          }
        });
      }
    }
  );

  loadedGrammars.push(language);
}

for (const languageIndex in languagesInputs) {
  const language = languagesInputs[
    languageIndex
  ] as HighlightLanguageInput;
  loadComponents(language, []);

  let languageGrammar = Prism.languages[language];

  if (!languageGrammar) {
    languageGrammar =
      ReactRendererPrism.languages[language];
  }

  loadGrammar(languageGrammar, language);
}

const uniqueTokens = new Set(tokens);
const finalTokensList = [...uniqueTokens];

fs.writeFile(
  "tokens.d.ts",
  `/**
 * Key "constructor" omitted.
 */
export type HighlightTokens = ${JSON.stringify(
    finalTokensList.filter(token => token !== "constructor"),
    null,
    2
  )}[number];

export type TokenObject = {
  pattern: RegExp;

  /**
   * If \`true\`, then the first capturing group of \`pattern\` will (effectively) behave as a lookbehind
   * group meaning that the captured text will not be part of the matched text of the new token.
   */
  lookbehind?: boolean | undefined;

  /**
   * Whether the token is greedy.
   *
   * @default false
   */
  greedy?: boolean | undefined;

  /**
   * An optional alias or list of aliases.
   */
  alias?: string | string[] | undefined;

  /**
   * The nested tokens of this token.
   *
   * This can be used for recursive language definitions.
   *
   * Note that this can cause infinite recursion.
   */
  inside?: Grammar | undefined;
};

export type TokenRule = RegExp | TokenObject;

/**
 * Key "constructor" omitted.
 */
export type Grammar = {
  [anotherToken: string]: TokenRule[];
  ${finalTokensList
    .filter(token => token !== "constructor").map((token) => {
      return token.includes("-")
        ? `"${token}"?: TokenRule[];`
        : `${token}?: TokenRule[]`;
    })
    .join("\n\t")}
};
`,
  (err) => {
    console.log(!err ? "Tokens types generated!" : err);
  }
);
