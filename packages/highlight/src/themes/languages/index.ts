import type { HighlightLanguage } from "../../../languages";

export const languages = [
  "markup",
  "html",
  "bash",
  "clike",
  "c",
  "cpp",
  "css",
  "css-extras",
  "javascript",
  "jsx",
  "js-extras",
  "js-templates",
  "coffeescript",
  "diff",
  "git",
  "go",
  "graphql",
  "markup-templating",
  "handlebars",
  "json",
  "less",
  "makefile",
  "markdown",
  "objectivec",
  "ocaml",
  "python",
  "reason",
  "sass",
  "scss",
  "sql",
  "stylus",
  "tsx",
  "typescript",
  "wasm",
  "yaml",
  new String(),
] as const;

export type HighlightSupportedLanguages =
  | (typeof languages)[number]
  | HighlightLanguage;
