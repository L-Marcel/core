/* eslint-disable @typescript-eslint/ban-types */
import { PrismTheme } from "prism-react-renderer";
import { GrammarToken } from "../tokens";
import { HighlightLanguageComponent } from "../../../languages";

export type HighlightThemePlain = PrismTheme["plain"] & {
  numbersColor?: string;
  numbersBackgroundColor?: string;
  numbersBorderColor?: string;
  srollbarThumbColor?: string;
  scrollbarTrackColor?: string;
};

export type HighlightThemeStyle = {
  types: GrammarToken[];
  style: PrismTheme["styles"][number]["style"];
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
