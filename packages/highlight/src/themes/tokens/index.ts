import { HighlightTokens } from "../../../tokens";

//small cheat
export const tokens = [new String()] as const;

export type DefinedGrammarToken = HighlightTokens;
export type GrammarToken =
  | HighlightTokens
  | (typeof tokens)[number];
