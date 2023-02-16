import { DefaultThemes } from "../themes";
import { HighlightTheme } from "../themes/primary";

export function getThemeAdditionalColors(
  theme: keyof DefaultThemes
): HighlightTheme["plain"] {
  switch (theme) {
    case "dracula":
      return {
        numbersBorderColor: "#a47cde",
        numbersBackgroundColor: "#20212b",
        srollbarThumbColor: "#ad88e6",
        scrollbarTrackColor: "#191a22",
      };
    case "duotoneDark":
      return {
        numbersBorderColor: "#fac48e",
        numbersBackgroundColor: "#201d29",
        srollbarThumbColor: "#f8ca9d",
        scrollbarTrackColor: "#1b1824",
      };
    case "duotoneLight":
      return {
        numbersBorderColor: "#063289",
        numbersBackgroundColor: "#f0ebe4",
        srollbarThumbColor: "#0a317e",
        scrollbarTrackColor: "#e0dbd3",
      };
    case "github":
      return {
        numbersBorderColor: "#00008f",
        numbersBackgroundColor: "#ebebeb",
        srollbarThumbColor: "#03037e",
        scrollbarTrackColor: "#d8d3cc",
      };
    case "nightOwl":
      return {
        numbersBorderColor: "#7fdbca",
        numbersBackgroundColor: "#01111f",
        srollbarThumbColor: "#6ecfbe",
        scrollbarTrackColor: "#010c16",
      };
    case "nightOwlLight":
      return {
        numbersBorderColor: "#0c969b",
        numbersBackgroundColor: "#f1f1f1",
        srollbarThumbColor: "#149ea3",
        scrollbarTrackColor: "#e9e9e9",
      };
    case "oceanicNext":
      return {
        numbersBorderColor: "#b098b0",
        numbersBackgroundColor: "#21252e",
        srollbarThumbColor: "#a38ca3",
        scrollbarTrackColor: "#1b1e25",
      };
    case "palenight":
      return {
        numbersBorderColor: "#b8bfbd",
        numbersBackgroundColor: "#202333",
        srollbarThumbColor: "#a6afac",
        scrollbarTrackColor: "#1a1d2b",
      };
    case "okaidia":
      return {
        numbersBorderColor: "#4fc2df",
        numbersBackgroundColor: "#1c1d18",
        srollbarThumbColor: "#44b1cc",
        scrollbarTrackColor: "#171812",
      };
    case "shadesOfPurple":
      return {
        numbersBorderColor: "#fc9819",
        numbersBackgroundColor: "#252349",
        srollbarThumbColor: "#eb8f16",
        scrollbarTrackColor: "#1d1b3f",
      };
    case "synthwave84":
      return {
        numbersBorderColor: "#d4ccc0",
        numbersBackgroundColor: "#251c33",
        srollbarThumbColor: "#c9c1b6",
        scrollbarTrackColor: "#181636",
      };
    case "ultramin":
      return {
        numbersBorderColor: "#747377",
        numbersBackgroundColor: "#fafafa",
        srollbarThumbColor: "#6d6c72",
        scrollbarTrackColor: "#e9e9e9",
      };
    case "vsDark":
      return {
        numbersBorderColor: "#5095ca",
        numbersBackgroundColor: "#161616",
        srollbarThumbColor: "#438ac0",
        scrollbarTrackColor: "#131212",
      };
    case "vsLight":
      return {
        numbersBorderColor: "#5290ff",
        numbersBackgroundColor: "#f7f7f7",
        srollbarThumbColor: "#4986f0",
        scrollbarTrackColor: "#eeebeb",
      };
    default:
      return {
        numbersBackgroundColor: "#1b1816",
        numbersBorderColor: "#9d25ba",
        srollbarThumbColor: "#ac38c9",
        scrollbarTrackColor: "#201d1b",
      };
  }
}
