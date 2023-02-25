/* eslint-disable @typescript-eslint/ban-types */
import { PrismTheme } from "prism-react-renderer";
import { GrammarToken } from "../tokens";
import { HighlightLanguageComponent } from "../../../languages";
import { CSSProperties } from "react";

/**
 * Common properties used to style code. If you want to use properties
 * that aren't available there, try using the `DangerousStyleEntry`.
 *
 * But use at your own risk.
 */
export type StyleEntry = {
  color?: string;
  backgroundColor?: string;
  fontStyle?: "normal" | "italic";
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  opacity?: number;
};

/**
 * Properties that aren't available in `StyleEntry`.
 *
 * Use at your own risk.
 */
export type DangerousStyleEntry = CSSProperties &
  StyleEntry;

/**
 * Code container styling.
 */
export type HighlightThemePlain = PrismTheme["plain"] & {
  numbersColor?: string;
  numbersBackgroundColor?: string;
  numbersBorderColor?: string;
  scrollbarThumbColor?: string;
  scrollbarTrackColor?: string;
};

/**
 * Rule of styles used in each token.
 */
export type HighlightThemeStyle = {
  types: GrammarToken[];
  style: StyleEntry;
  languages?: (HighlightLanguageComponent | String)[];
};

export interface HighlightTheme
  extends Omit<PrismTheme, "styles"> {
  plain: HighlightThemePlain;
  styles: HighlightThemeStyle[];
}

export class HighlightCustomTheme
  implements HighlightTheme
{
  /**
   * Create a new theme
   *
   * @param plain - code's contianer styles
   * @param styles - code's line styles
   */
  constructor(
    public plain: HighlightThemePlain,
    public styles: HighlightThemeStyle[] = []
  ) {}

  /**
   *
   * @param theme - theme to extends
   * @param plain - new code's contianer styles
   * @param styles - new code's line styles
   */
  static extends(
    theme: HighlightTheme,
    plain: HighlightThemePlain,
    styles: HighlightThemeStyle[] = []
  ) {
    let finalPlain = theme.plain;
    let finalStyles = theme.styles;

    finalPlain = {
      ...theme.plain,
      ...plain,
    };

    finalStyles = [...theme.styles, ...styles];

    return new HighlightCustomTheme(
      finalPlain,
      finalStyles
    );
  }
}
