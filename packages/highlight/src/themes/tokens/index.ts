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
] as const;

export const tokens = [
  ...definedTokens,
  new String(),
] as const;

export type DefinedGrammarToken =
  (typeof definedTokens)[number];

export type GrammarToken = (typeof tokens)[number];
