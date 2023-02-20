import { HighlightLanguageComponent } from "../../languages";
import { HighlightTheme } from "../themes/custom";

export type HighligthPluginKitData = {
  type: "kit";
  language: HighlightLanguageComponent;
  theme: HighlightTheme;
};

export type HighligthPluginThemeData = {
  type: "theme";
  theme: HighlightTheme;
};

export type HighligthPluginLanguageData = {
  type: "language";
  language: HighlightLanguageComponent;
};

export type HighligthPluginData =
  | HighligthPluginKitData
  | HighligthPluginThemeData
  | HighligthPluginLanguageData;

export class HighligthPlugin {
  constructor(public plugin: HighligthPluginData) {}
}
