import { Highlight, HighlightProps } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { __bash, __c, __cpp, __diff, __git, __go, __graphql, __handlebars, __javascript, __json, __jsx, __less, __makeFile, __markdown, __objectivec, __ocaml, __python, __reason, __sass, __scss, __sql, __stylus, __tsx, __typescript, __yaml } from "./examples";
import { __markup, __clike, __css } from "./examples/index";

export default {
  title: "Highlight",
  component: Highlight,
  args: {
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
  argTypes: {},
} as Meta<HighlightProps>;

export const Primary: StoryObj<HighlightProps> = {
  name: "Tsx",
  args: {
    language: "tsx",
    children: __tsx
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
  args: {
    language: "markup",
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