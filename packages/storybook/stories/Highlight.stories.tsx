import Highlight, { HighlightProps } from "@lmarcel/highlight";

import { Meta, StoryObj } from "@storybook/react";
import { __markup, __latex, __clike, __css , __bash, __c, __cpp, __diff, __git, __go, __graphql, __handlebars, __javascript, __json, __jsx, __less, __makeFile, __markdown, __objectivec, __ocaml, __python, __reason, __sass, __scss, __sql, __stylus, __tsx, __typescript, __yaml } from "./examples/Code";

export default {
  title: "Highlight",
  component: Highlight,
  args: {
    full: false,
    theme: "oneDark",
    language: "tsx",
    children: `export function Highlight({ 
  children, 
  theme = "default" 
}: HighlightProps, test: string) {
  type HighlightTheme = keyof typeof themes;

  return (
    <CodeBlock
      code={children}
      theme={themes[theme]}
      languageuage="tsx"
    />
  );
}`
  },
  argTypes: {
    theme: {
      options: [
        "oneDark",
        "dracula",
        "duotoneDark",
        "duotoneLight",
        "github",
        "nightOwl",
        "nightOwlLight",
        "oceanicNext",
        "palenight",
        "okaidia",
        "shadesOfPurple",
        "synthwave84",
        "ultramin",
        "vsDark",
        "vsLight",
      ],
      control: { type: 'select' },
    },
    language: {
      options: [
        "html",
        "markup",
        "bash",
        "clike",
        "c",
        "cpp",
        "css",
        "css-extras",
        "javascript",
        "jsx",
        "js-extras",
        "js-templates",
        "coffeescript",
        "diff",
        "git",
        "go",
        "graphql",
        "markup-templating",
        "handlebars",
        "json",
        "less",
        "makefile",
        "markdown",
        "objectivec",
        "ocaml",
        "python",
        "reason",
        "sass",
        "scss",
        "sql",
        "stylus",
        "tsx",
        "typescript",
        "wasm",
        "yaml"
      ],
      control: { type: 'select' },
    }
  }
} as Meta<HighlightProps>;

export const Primary: StoryObj<HighlightProps> = {
  name: "Tsx",
  args: {
    language: "tsx",
    children: __tsx
  }
};

export const Full: StoryObj<HighlightProps> = {
  name: "Full Width",
  args: {
    language: "tsx",
    full: true,
    children: __tsx
  }
};

export const WithScroll: StoryObj<HighlightProps> = {
  name: "With Scroll",
  args: {
    language: "tsx",
    children: __tsx,
    style: {
      maxWidth: 450
    }
  }
};

export const WithoutNumbers: StoryObj<HighlightProps> = {
  name: "Without Numbers",
  args: {
    language: "tsx",
    showNumbers: false,
    children: __tsx
  }
};

export const OneLine: StoryObj<HighlightProps> = {
  name: "One Line",
  args: {
    language: "tsx",
    children: "l-marcel setup"
  }
};

export const typescript: StoryObj<HighlightProps> = {
  args: {
    language: "typescript",
    children: __typescript
  }
};

export const javascript: StoryObj<HighlightProps> = {
  args: {
    language: "javascript",
    children: __javascript
  }
};

export const jsx: StoryObj<HighlightProps> = {
  args: {
    language: "jsx",
    children: __jsx
  }
};

export const markup: StoryObj<HighlightProps> = {
  name: "Html/Markup",
  args: {
    language: "html",
    children: __markup
  }
};

export const bash: StoryObj<HighlightProps> = {
  args: {
    language: "bash",
    children: __bash
  }
};

export const clike: StoryObj<HighlightProps> = {
  args: {
    language: "clike",
    children: __clike
  }
};

export const c: StoryObj<HighlightProps> = {
  args: {
    language: "c",
    children: __c
  }
};

export const cpp: StoryObj<HighlightProps> = {
  args: {
    language: "cpp",
    children: __cpp
  }
};

export const css: StoryObj<HighlightProps> = {
  args: {
    language: "css",
    children: __css
  }
};

export const diff: StoryObj<HighlightProps> = {
  args: {
    language: "diff",
    children: __diff
  }
};

export const git: StoryObj<HighlightProps> = {
  args: {
    language: "git",
    children: __git
  }
};

export const go: StoryObj<HighlightProps> = {
  args: {
    language: "go",
    children: __go
  }
};

export const graphql: StoryObj<HighlightProps> = {
  args: {
    language: "graphql",
    children: __graphql
  }
};

export const handlebars: StoryObj<HighlightProps> = {
  args: {
    language: "handlebars",
    children: __handlebars
  }
};

export const json: StoryObj<HighlightProps> = {
  args: {
    language: "json",
    children: __json
  }
};

export const less: StoryObj<HighlightProps> = {
  args: {
    language: "less",
    children: __less
  }
};

export const makefile: StoryObj<HighlightProps> = {
  args: {
    language: "makefile",
    children: __makeFile
  }
};

export const markdown: StoryObj<HighlightProps> = {
  args: {
    language: "markdown",
    children: __markdown
  }
};

export const objectivec: StoryObj<HighlightProps> = {
  args: {
    language: "objectivec",
    children: __objectivec
  }
};

export const ocaml: StoryObj<HighlightProps> = {
  args: {
    language: "ocaml",
    children: __ocaml
  }
};

export const python: StoryObj<HighlightProps> = {
  args: {
    language: "python",
    children: __python
  }
};

export const reason: StoryObj<HighlightProps> = {
  args: {
    language: "reason",
    children: __reason
  }
};

export const sass: StoryObj<HighlightProps> = {
  args: {
    language: "sass",
    children: __sass
  }
};

export const scss: StoryObj<HighlightProps> = {
  args: {
    language: "scss",
    children: __scss
  }
};

export const sql: StoryObj<HighlightProps> = {
  args: {
    language: "sql",
    children: __sql
  }
};

export const stylus: StoryObj<HighlightProps> = {
  args: {
    language: "stylus",
    children: __stylus
  }
};

export const yaml: StoryObj<HighlightProps> = {
  args: {
    language: "yaml",
    children: __yaml
  }
};

export const latex: StoryObj<HighlightProps> = {
  args: {
    language: "latex",
    children: __latex
  }
};