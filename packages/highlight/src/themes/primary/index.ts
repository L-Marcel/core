import { Language, PrismTheme } from "prism-react-renderer";
import { tokens } from "../tokens";

export interface HighlightTheme
  extends Omit<PrismTheme, "styles"> {
  plain: PrismTheme["plain"] & {
    numbersColor?: string;
    numbersBackgroundColor?: string;
    numbersBorderColor?: string;
    srollbarThumbColor?: string;
    scrollbarTrackColor?: string;
  };
  styles: {
    types: (typeof tokens)[number][];
    style: PrismTheme["styles"][number]["style"];
    languages?: Language[];
  }[];
}

const primary: HighlightTheme = {
  plain: {
    color: "#d4d7db",
    numbersColor: "#71717A",
    backgroundColor: "#252322",
    numbersBackgroundColor: "#1b1816",
    numbersBorderColor: "#9d25ba",
    srollbarThumbColor: "#ac38c9",
    scrollbarTrackColor: "#201d1b",
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "rgb(0, 0, 128)",
      },
    },
    {
      types: ["comment", "inserted"],
      style: {
        color: "#7F848E",
      },
    },
    {
      types: [
        "builtin",
        "changed",
        "keyword",
        "interpolation-punctuation",
      ],
      style: {
        color: "#C678DD",
      },
    },
    {
      types: ["number"],
      style: {
        color: "#D19A66",
      },
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(100, 102, 149)",
      },
    },
    {
      types: [],
      style: {
        color: "#D19A66",
      },
    },
    {
      types: [
        "string",
        "attr-value",
        "template-punctuation",
      ],
      style: {
        color: "#98C379",
      },
    },
    {
      types: ["selector"],
      style: {
        color: "rgb(215, 186, 125)",
      },
    },
    {
      types: ["tag", "atrule", "deleted"],
      style: {
        color: "#E06C75",
      },
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#E06C75",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "rgb(212, 212, 212)",
      },
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080",
      },
    },
    {
      types: ["function"],
      style: {
        color: "#D19A66",
      },
    },
    {
      types: [
        "class-name",
        "function",
        "mayble-class-name",
        "method",
        "function-variable",
        "variable",
        "attr-name",
        "constant",
      ],
      style: {
        color: "#E5C07B",
      },
    },
    {
      types: ["char"],
      style: {
        color: "rgb(209, 105, 105)",
      },
    },
  ],
};

export default primary;
