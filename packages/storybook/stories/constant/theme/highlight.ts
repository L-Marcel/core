import { HighlightCustomTheme, themes } from "@lmarcel/highlight";

export const storybookTheme = HighlightCustomTheme.extends(themes.oneDark, {
  numbersBorderColor: "#1ea7fd",
  backgroundColor: "#272727",
  scrollbarTrackColor: "#242323",
  scrollbarThumbColor: "#1ea7fd",
  numbersBackgroundColor: "#242323",
  numbersColor: "#cfcfcf"
});