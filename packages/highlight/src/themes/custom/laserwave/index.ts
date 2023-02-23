import { HighlightCustomTheme } from "..";

//based on: https://github.com/PrismJS/prism-themes/blob/master/themes/prism-laserwave.css
const laserwave = new HighlightCustomTheme(
  {
    backgroundColor: "#27212e",
    color: "#ffffff",
    numbersColor: "#ebebeb",
    numbersBackgroundColor: "#211b27",
    numbersBorderColor: "#39adbd",
    srollbarThumbColor: "#40b4c4",
    scrollbarTrackColor: "#1e1824",
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
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "#91889b",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#7b6995",
      },
    },
    {
      types: ["builtin", "constant", "boolean"],
      style: {
        color: "#ffe261",
      },
    },
    {
      types: ["number"],
      style: {
        color: "#b381c5",
      },
    },
    {
      types: ["unit"],
      style: {
        color: "#9c68af",
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "atrule", "property", "keyword"],
      style: {
        color: "#40b4c4",
      },
    },
    {
      types: ["hexcode"],
      style: {
        color: "#b381c5",
        fontStyle: "italic",
      },
    },
    {
      types: [
        "doctype",
        "operator",
        "inserted",
        "tag",
        "class-name",
        "symbol",
      ],
      style: {
        color: "#74dfc4",
      },
    },
    {
      types: [
        "attr-name",
        "function",
        "deleted",
        "selector",
      ],
      style: {
        color: "#eb64b9",
      },
    },
    {
      types: ["content", "markup"],
      languages: ["markdown"],
      style: {
        color: "#eb64b9",
      },
    },
    {
      types: ["attr-value", "regex", "char", "string"],
      style: {
        color: "#b4dce7",
      },
    },
    {
      types: ["entity", "url", "variable"],
      style: {
        color: "#ffffff",
      },
    },
  ]
);

export default laserwave;
