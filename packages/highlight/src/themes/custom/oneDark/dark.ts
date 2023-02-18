import { HighlightCustomTheme } from "..";

//based on: https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css
const oneDark = new HighlightCustomTheme(
  {
    color: "hsl(220, 14%, 71%)",
    numbersColor: "#71717A",
    backgroundColor: "hsl(220, 13%, 18%)",
    numbersBackgroundColor: "hsl(218, 14%, 15%)",
    numbersBorderColor: "#9d25ba",
    srollbarThumbColor: "#ac38c9",
    scrollbarTrackColor: "hsl(218, 15%, 11%)",
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
        color: "hsl(220, 10%, 40%)",
      },
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "hsl(220, 14%, 71%)",
      },
    },
    {
      types: [
        "attr-name",
        "class-name",
        "boolean",
        "constant",
        "number",
        "atrule",
      ],
      style: {
        color: "hsl(29, 54%, 61%)",
      },
    },
    {
      types: ["unit"],
      style: {
        color: "hsl(29, 45%, 52%)",
        fontStyle: "italic",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "hsl(286, 60%, 67%)",
      },
    },
    {
      types: [
        "property",
        "tag",
        "symbol",
        "deleted",
        "important",
      ],
      style: {
        color: "hsl(355, 65%, 65%)",
      },
    },
    {
      types: [
        "selector",
        "string",
        "char",
        "builtin",
        "inserted",
        "regex",
        "attr-value",
      ],
      style: {
        color: "hsl(95, 38%, 62%)",
      },
    },
    {
      types: [
        "variable",
        "operator",
        "function",
        "mayble-class-name",
      ],
      style: {
        color: "hsl(207, 82%, 66%)",
      },
    },
    {
      types: ["url"],
      style: {
        color: "hsl(187, 47%, 55%)",
      },
    },
    {
      languages: ["css"],
      types: ["selector"],
      style: {
        color: "hsl(355, 65%, 65%)",
      },
    },
    {
      languages: ["css"],
      types: ["property"],
      style: {
        color: "hsl(220, 14%, 71%)",
      },
    },
    {
      languages: ["css"],
      types: ["function"],
      style: {
        color: "hsl(187, 47%, 55%)",
      },
    },
    {
      languages: ["css"],
      types: ["hexcode"],
      style: {
        color: "hsl(187, 45%, 49%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["css"],
      types: ["string"],
      style: {
        color: "hsl(95, 38%, 62%)",
      },
    },
    {
      languages: ["css"],
      types: ["important", "atrule"],
      style: {
        color: "hsl(286, 60%, 67%)",
      },
    },
    {
      languages: ["javascript"],
      types: ["operator"],
      style: {
        color: "hsl(286, 60%, 67%)",
      },
    },
    {
      languages: ["javascript"],
      types: ["interpolation-punctuation"],
      style: {
        color: "hsl(5, 48%, 51%)",
      },
    },
    {
      languages: ["json"],
      types: ["operator"],
      style: {
        color: "hsl(220, 14%, 71%)",
      },
    },
    {
      languages: ["json"],
      types: ["null"],
      style: {
        color: "hsl(29, 54%, 61%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["url", "operator", "string"],
      style: {
        color: "hsl(220, 14%, 71%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["content"],
      style: {
        color: "hsl(207, 82%, 66%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["url-reference"],
      style: {
        color: "hsl(187, 47%, 55%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["url-reference"],
      style: {
        color: "hsl(187, 47%, 55%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["blockquote", "hr"],
      style: {
        color: "hsl(220, 10%, 40%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["markdown"],
      types: ["code-snippet"],
      style: {
        color: "hsl(187, 47%, 55%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["bold"],
      style: {
        color: "hsl(29, 54%, 61%)",
        fontWeight: "bold",
      },
    },
    {
      languages: ["markdown"],
      types: ["italic"],
      style: {
        color: "hsl(286, 60%, 67%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["markdown"],
      types: ["strike", "list", "title", "punctuation"],
      style: {
        color: "hsl(355, 65%, 65%)",
      },
    },
    {
      types: ["macro", "directive-hash"],
      style: {
        color: "hsl(286, 56%, 62%)",
      },
    },
    {
      types: ["class-name"],
      languages: ["tsx", "jsx"],
      style: {
        color: "#E5C07B",
      },
    },
    {
      types: ["attr-name"],
      languages: ["tsx", "jsx"],
      style: {
        color: "#D19A66",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        fontStyle: "italic",
      },
    },
  ]
);

export default oneDark;
