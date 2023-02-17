import { HighlightSupportedLanguages } from "../languages";
import { HighlightTheme } from "../custom";

export type HighligthPluginDetails = {
  author: string;
  repository?: string;
  description?: string;
  version?: string;
};

export type HighligthPluginKitData = {
  type: "kit";
  details: HighligthPluginDetails;
  language: HighlightSupportedLanguages;
  theme: HighlightTheme;
};

export type HighligthPluginThemeData = {
  type: "theme";
  details: HighligthPluginDetails;
  theme: HighlightTheme;
};

export type HighligthPluginLanguageData = {
  type: "language";
  details: HighligthPluginDetails;
  language: HighlightSupportedLanguages;
};

export type HighligthPluginData =
  | HighligthPluginKitData
  | HighligthPluginThemeData
  | HighligthPluginLanguageData;

export class HighligthPlugin {
  constructor(public plugin: HighligthPluginData) {}
}
