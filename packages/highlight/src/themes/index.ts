import dracula from "prism-react-renderer/themes/dracula";
import duotoneDark from "prism-react-renderer/themes/duotoneDark";
import duotoneLight from "prism-react-renderer/themes/duotoneLight";
import github from "prism-react-renderer/themes/github";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
import oceanicNext from "prism-react-renderer/themes/oceanicNext";
import palenight from "prism-react-renderer/themes/palenight";
import okaidia from "prism-react-renderer/themes/okaidia";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
import synthwave84 from "prism-react-renderer/themes/synthwave84";
import ultramin from "prism-react-renderer/themes/ultramin";
import vsDark from "prism-react-renderer/themes/vsDark";
import vsLight from "prism-react-renderer/themes/vsLight";
import { HighlightTheme } from "./custom";
import { getThemeAdditionalColors } from "../utils/getThemeAdditionalColors";
import oneDark from "./custom/one/dark";
import oneLight from "./custom/one/light";
import laserwave from "./custom/laserwave";
import byverduDracula from "./custom/dracula";
import { getThemeAdditionalStyles } from "../utils/getThemeAdditionalStyles";
export interface DefaultThemes {
  dracula: HighlightTheme;
  duotoneDark: HighlightTheme;
  duotoneLight: HighlightTheme;
  github: HighlightTheme;
  nightOwl: HighlightTheme;
  nightOwlLight: HighlightTheme;
  oceanicNext: HighlightTheme;
  palenight: HighlightTheme;
  okaidia: HighlightTheme;
  shadesOfPurple: HighlightTheme;
  synthwave84: HighlightTheme;
  ultramin: HighlightTheme;
  vsDark: HighlightTheme;
  vsLight: HighlightTheme;
}

const defaultThemes: DefaultThemes = {
  dracula,
  duotoneDark,
  duotoneLight,
  github,
  nightOwl,
  nightOwlLight,
  oceanicNext,
  palenight,
  okaidia,
  shadesOfPurple,
  synthwave84,
  ultramin,
  vsDark,
  vsLight,
};

const newdefaultThemes = Object.entries(
  defaultThemes
).reduce((prev, [key, theme]) => {
  const _key = key as keyof DefaultThemes;

  const someColorsOfPlain = getThemeAdditionalColors(_key);
  const someStyles = getThemeAdditionalStyles(_key);
  prev[_key] = {
    plain: {
      ...theme?.plain,
      ...someColorsOfPlain,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    styles: [...(theme?.styles as any[]), ...someStyles],
  } as HighlightTheme;

  return prev;
}, defaultThemes);

const themes = {
  ...newdefaultThemes,
  byverduDracula,
  oneDark,
  oneLight,
  laserwave,
};

export default themes;
