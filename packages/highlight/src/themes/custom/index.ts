/* eslint-disable @typescript-eslint/ban-types */
import { PrismTheme } from "prism-react-renderer";
import { GrammarTokens } from "../tokens";
import { HighlightLanguageComponent } from "../../../languages";

export type HighlightThemePlain = PrismTheme["plain"] & {
  numbersColor?: string;
  numbersBackgroundColor?: string;
  numbersBorderColor?: string;
  srollbarThumbColor?: string;
  scrollbarTrackColor?: string;
};

export type HighlightThemeStyle = {
  types: GrammarTokens[];
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
  constructor(
    public plain: HighlightThemePlain,
    public styles: HighlightThemeStyle[] = []
  ) {}

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
