import { DefaultThemes } from "../themes";
import { HighlightTheme } from "../themes/custom";

export function getThemeAdditionalColors(
  theme: keyof DefaultThemes
): HighlightTheme["plain"] {
  switch (theme) {
    case "dracula":
      return {
        numbersColor: "#86868b",
        numbersBorderColor: "#a47cde",
        numbersBackgroundColor: "#20212b",
        scrollbarThumbColor: "#ad88e6",
        scrollbarTrackColor: "#191a22",
      };
    case "duotoneDark":
      return {
        numbersColor: "#86868b",
        numbersBorderColor: "#fac48e",
        numbersBackgroundColor: "#201d29",
        scrollbarThumbColor: "#f8ca9d",
        scrollbarTrackColor: "#1b1824",
      };
    case "duotoneLight":
      return {
        numbersColor: "#4e4e58",
        numbersBorderColor: "#063289",
        numbersBackgroundColor: "#f0ebe4",
        scrollbarThumbColor: "#0a317e",
        scrollbarTrackColor: "#e0dbd3",
      };
    case "github":
      return {
        numbersColor: "#4e4e58",
        numbersBorderColor: "#00008f",
        numbersBackgroundColor: "#ebebeb",
        scrollbarThumbColor: "#03037e",
        scrollbarTrackColor: "#d8d3cc",
      };
    case "nightOwl":
      return {
        numbersColor: "#d4f5ef",
        numbersBorderColor: "#7fdbca",
        numbersBackgroundColor: "#01111f",
        scrollbarThumbColor: "#6ecfbe",
        scrollbarTrackColor: "#010c16",
      };
    case "nightOwlLight":
      return {
        numbersColor: "#3a4745",
        numbersBorderColor: "#0c969b",
        numbersBackgroundColor: "#f1f1f1",
        scrollbarThumbColor: "#149ea3",
        scrollbarTrackColor: "#e9e9e9",
      };
    case "oceanicNext":
      return {
        numbersColor: "#d3bbd3",
        numbersBorderColor: "#b098b0",
        numbersBackgroundColor: "#21252e",
        scrollbarThumbColor: "#a38ca3",
        scrollbarTrackColor: "#1b1e25",
      };
    case "palenight":
      return {
        numbersColor: "#b8bfbd",
        numbersBorderColor: "#b8bfbd",
        numbersBackgroundColor: "#202333",
        scrollbarThumbColor: "#a6afac",
        scrollbarTrackColor: "#1a1d2b",
      };
    case "okaidia":
      return {
        numbersColor: "#8c8c92",
        numbersBorderColor: "#4fc2df",
        numbersBackgroundColor: "#1c1d18",
        scrollbarThumbColor: "#44b1cc",
        scrollbarTrackColor: "#171812",
      };
    case "shadesOfPurple":
      return {
        numbersColor: "#ffac3e",
        numbersBorderColor: "#fc9819",
        numbersBackgroundColor: "#252349",
        scrollbarThumbColor: "#eb8f16",
        scrollbarTrackColor: "#1d1b3f",
      };
    case "synthwave84":
      return {
        numbersColor: "#d4ccc0",
        numbersBorderColor: "#d4ccc0",
        numbersBackgroundColor: "#251c33",
        scrollbarThumbColor: "#c9c1b6",
        scrollbarTrackColor: "#181636",
      };
    case "ultramin":
      return {
        numbersColor: "#343338",
        numbersBorderColor: "#747377",
        numbersBackgroundColor: "#fafafa",
        scrollbarThumbColor: "#6d6c72",
        scrollbarTrackColor: "#e9e9e9",
      };
    case "vsDark":
      return {
        numbersColor: "#71717A",
        numbersBorderColor: "#5095ca",
        numbersBackgroundColor: "#161616",
        scrollbarThumbColor: "#438ac0",
        scrollbarTrackColor: "#131212",
      };
    case "vsLight":
      return {
        numbersColor: "#494957",
        numbersBorderColor: "#5290ff",
        numbersBackgroundColor: "#f7f7f7",
        scrollbarThumbColor: "#4986f0",
        scrollbarTrackColor: "#eeebeb",
      };
    default:
      return {
        numbersColor: "#71717A",
        numbersBackgroundColor: "hsl(218, 14%, 15%)",
        numbersBorderColor: "#9d25ba",
        scrollbarThumbColor: "#ac38c9",
        scrollbarTrackColor: "hsl(218, 15%, 11%)",
      };
  }
}
