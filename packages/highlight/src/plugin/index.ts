import { HighlightLanguageComponent } from "../../languages";
import { HighlightTheme } from "../themes/custom";

export type HighligthPluginDetails = {
  author: string;
  repository?: string;
  description?: string;
  version?: string;
};

export type HighligthPluginKitData = {
  type: "kit";
  details: HighligthPluginDetails;
  language: HighlightLanguageComponent;
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
  language: HighlightLanguageComponent;
};

export type HighligthPluginData =
  | HighligthPluginKitData
  | HighligthPluginThemeData
  | HighligthPluginLanguageData;

export class HighligthPlugin {
  constructor(public plugin: HighligthPluginData) {}
}
