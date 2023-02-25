import { HighlightCustomTheme } from "..";

//based on: https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-light.css
const oneLight = new HighlightCustomTheme(
  {
    color: "hsl(230, 8%, 24%)",
    numbersColor: "hsl(233, 9%, 18%)",
    backgroundColor: "hsl(230, 1%, 98%)",
    numbersBackgroundColor: "hsl(0, 0%, 94%)",
    numbersBorderColor: "#9d25ba",
    scrollbarThumbColor: "#ac38c9",
    scrollbarTrackColor: "hsl(0, 0%, 88%)",
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
        color: "hsl(230, 4%, 64%)",
      },
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "hsl(230, 4%, 64%)",
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
        color: "hsl(35, 99%, 36%)",
      },
    },
    {
      types: ["unit"],
      style: {
        color: "hsl(35, 99%, 27%)",
        fontStyle: "italic",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "hsl(301, 63%, 40%)",
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
        color: "hsl(5, 74%, 59%)",
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
        color: "hsl(119, 34%, 47%)",
      },
    },
    {
      types: ["variable", "operator", "function"],
      style: {
        color: "hsl(221, 87%, 60%)",
      },
    },
    {
      types: ["url"],
      style: {
        color: "hsl(198, 99%, 37%)",
      },
    },
    {
      types: ["css"],
      style: {
        color: "hsl(230, 8%, 24%)",
      },
    },
    {
      languages: ["css"],
      types: ["selector"],
      style: {
        color: "hsl(5, 74%, 59%)",
      },
    },
    {
      languages: ["css"],
      types: ["property"],
      style: {
        color: "hsl(230, 8%, 24%)",
      },
    },
    {
      languages: ["css"],
      types: ["function"],
      style: {
        color: "hsl(198, 99%, 37%)",
      },
    },
    {
      languages: ["css"],
      types: ["hexcode"],
      style: {
        color: "hsl(198, 99%, 33%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["css"],
      types: ["string", "url"],
      style: {
        color: "hsl(119, 34%, 47%)",
      },
    },
    {
      languages: ["css"],
      types: ["important", "atrule"],
      style: {
        color: "hsl(301, 63%, 40%)",
      },
    },
    {
      languages: ["javascript"],
      types: ["operator"],
      style: {
        color: "hsl(301, 63%, 40%)",
      },
    },
    {
      languages: ["javascript"],
      types: ["interpolation-punctuation"],
      style: {
        color: "hsl(344, 84%, 43%)",
      },
    },
    {
      languages: ["latex"],
      types: ["selector"],
      style: {
        color: "hsl(119, 34%, 47%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["json"],
      types: ["operator"],
      style: {
        color: "hsl(230, 8%, 24%)",
      },
    },

    {
      languages: ["json"],
      types: ["null"],
      style: {
        color: "hsl(35, 99%, 36%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["url", "operator", "string"],
      style: {
        color: "hsl(230, 8%, 24%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["content"],
      style: {
        color: "hsl(221, 87%, 60%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["url-reference"],
      style: {
        color: "hsl(221, 87%, 60%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["url-reference"],
      style: {
        color: "hsl(221, 87%, 60%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["blockquote", "hr"],
      style: {
        color: "hsl(230, 4%, 64%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["markdown"],
      types: ["code-snippet"],
      style: {
        color: "hsl(119, 34%, 47%)",
      },
    },
    {
      languages: ["markdown"],
      types: ["bold"],
      style: {
        color: "hsl(35, 99%, 36%)",
        fontWeight: "bold",
      },
    },
    {
      languages: ["markdown"],
      types: ["italic"],
      style: {
        color: "hsl(301, 63%, 40%)",
        fontStyle: "italic",
      },
    },
    {
      languages: ["markdown"],
      types: ["strike", "list", "title", "punctuation"],
      style: {
        color: "hsl(5, 74%, 59%)",
      },
    },
    {
      types: ["macro", "directive-hash"],
      style: {
        color: "hsl(301, 63%, 40%)",
      },
    },
    {
      types: ["class-name"],
      languages: ["tsx", "jsx"],
      style: {
        color: "hsl(35, 96%, 42%)",
      },
    },
    {
      types: ["attr-name"],
      languages: ["tsx", "jsx"],
      style: {
        color: "hsl(35, 93%, 42%)",
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

export default oneLight;
