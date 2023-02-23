import { HighlightCustomTheme } from "..";

//based on: https://github.com/PrismJS/prism-themes/blob/master/themes/prism-dracula.css
const byverduDracula = new HighlightCustomTheme(
  {
    backgroundColor: "#282a36",
    color: "#f8f8f2",
    numbersColor: "#a5a5aa",
    numbersBorderColor: "#a47cde",
    numbersBackgroundColor: "#20212b",
    srollbarThumbColor: "#ad88e6",
    scrollbarTrackColor: "#191a22",
  },
  [
    {
      types: ["bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#6272a4",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#f8f8f2",
      },
    },
    {
      types: [
        "property",
        "tag",
        "constant",
        "symbol",
        "deleted",
      ],
      style: {
        color: "#ff79c6",
      },
    },
    {
      types: ["boolean", "number"],
      style: {
        color: "#bd93f9",
      },
    },
    {
      types: ["unit"],
      style: {
        color: "#b083f0",
      },
    },
    {
      types: [
        "selector",
        "attr-name",
        "string",
        "char",
        "builtin",
        "inserted",
      ],
      style: {
        color: "#50fa7b",
      },
    },
    {
      types: [
        "operator",
        "entity",
        "url",
        "variable",
        "style",
      ],
      style: {
        color: "#f8f8f2",
      },
    },
    {
      types: ["string"],
      languages: ["css"],
      style: {
        color: "#f8f8f2",
      },
    },
    {
      types: [
        "atrule",
        "attr-value",
        "function",
        "class-name",
      ],
      style: {
        color: "#f1fa8c",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#8be9fd",
      },
    },
    {
      types: ["regex", "important"],
      style: {
        color: "#ffb86c",
      },
    },
  ]
);

export default byverduDracula;
