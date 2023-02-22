import { EditEvent, Highlight, HighlightProps, corePlugin, getAllLanguagesInputs } from "@lmarcel/highlight";
import { Meta, StoryObj, ComponentStory } from "@storybook/react";
import { EditableHighlightHelp } from "../../src/components/EditableHighlightHelp";
import { __markup, __latex, __clike, __css , __bash, __c, __cpp, __diff, __git, __go, __graphql, __handlebars, __javascript, __json, __jsx, __less, __makeFile, __markdown, __objectivec, __ocaml, __python, __reason, __sass, __scss, __sql, __stylus, __tsx, __typescript, __yaml } from "./examples/Code";
import { useState } from "react";

export default {
  title: "Highlight/Examples",
  component: Highlight,
  args: {
    full: false,
    theme: "oneDark",
    language: "tsx",
    code: `export function Highlight({ 
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
      options: getAllLanguagesInputs(),
      control: { type: 'select' },
    }
  }
} as Meta<HighlightProps>;

const EditableHightlight: ComponentStory<typeof Highlight> = (props) => {
  const [code, setCode] = useState(props.code);
  const [inEditMode, setInEditMode] = useState(false);

  function handleOnEdit(e: EditEvent) {
    setCode(e.currentTarget.value);
  };

  const modes = ["static", "editable", "edit"];
  const messages = [
    "Editable property is disabled, you cannot edit", 
    "Click or focus and press enter to edit", 
    "Click outside or press esc to exit"
  ]; 

  return (
    <main>
      <EditableHighlightHelp
        mode={props.editable? inEditMode? modes[2]:modes[1]:modes[0]}
        help={props.editable? inEditMode? messages[2]:messages[1]:messages[0]}
      />
      <Highlight
        {...props}
        onEnterEditMode={() => {
          setInEditMode(true);
        }}
        onExitEditMode={() => {
          setInEditMode(false);
        }}
        onEdit={handleOnEdit}
        code={code}
      />
    </main>
  );
};

export const Editable = EditableHightlight.bind({});
Editable.argTypes = {
  full: {
    table: {
      disable: true,
    },
  },
  code: {
    table: {
      disable: true,
    },
  }
};
Editable.args = {
  placeholder: "Put your code here...",
  full: true,
  language: "tsx",
  editable: true,
  code: __tsx
};

const EditableHightlightWithPlugin: ComponentStory<typeof Highlight> = (props) => {
  const [code, setCode] = useState(props.code);
  const [inEditMode, setInEditMode] = useState(false);

  function handleOnEdit(e: EditEvent) {
    setCode(e.currentTarget.value);
  };

  const modes = ["static", "editable", "edit"];
  const messages = [
    "Editable property is disabled, you cannot edit", 
    "Click or focus and press enter to edit", 
    "Click outside or press esc to exit"
  ]; 

  return (
    <main>
      <EditableHighlightHelp
        plugin
        mode={props.editable? inEditMode? modes[2]:modes[1]:modes[0]}
        help={props.editable? inEditMode? messages[2]:messages[1]:messages[0]}
      />
      <Highlight
        {...props}
        plugins={[
          corePlugin()
        ]}
        onEnterEditMode={() => {
          setInEditMode(true);
        }}
        onExitEditMode={() => {
          setInEditMode(false);
        }}
        onEdit={handleOnEdit}
        code={code}
      />
    </main>
  );
};

export const EditableWithPlugin = EditableHightlightWithPlugin.bind({});
EditableWithPlugin.argTypes = {
  full: {
    table: {
      disable: true,
    },
  },
  code: {
    table: {
      disable: true,
    },
  }
};
EditableWithPlugin.args = {
  placeholder: "Put your code here...",
  full: true,
  language: "tsx",
  editable: true,
  code: __tsx
};

export const WithoutNumbers: StoryObj<HighlightProps> = {
  name: "Without Numbers",
  args: {
    language: "tsx",
    showNumbers: false,
    code: __tsx
  }
};

export const OneLine: StoryObj<HighlightProps> = {
  name: "One Line",
  args: {
    language: "tsx",
    code: "l-marcel setup"
  }
};


export const WithScroll: StoryObj<HighlightProps> = {
  name: "With Scroll",
  args: {
    language: "tsx",
    code: __tsx,
    style: {
      maxWidth: 450
    }
  }
};

export const Full: StoryObj<HighlightProps> = {
  name: "Full Width",
  args: {
    language: "tsx",
    full: true,
    code: __tsx
  }
};

export const typescript: StoryObj<HighlightProps> = {
  args: {
    language: "typescript",
    code: __typescript
  }
};

export const javascript: StoryObj<HighlightProps> = {
  args: {
    language: "javascript",
    code: __javascript
  }
};

export const jsx: StoryObj<HighlightProps> = {
  args: {
    language: "jsx",
    code: __jsx
  }
};

export const markup: StoryObj<HighlightProps> = {
  name: "Html/Markup",
  args: {
    language: "html",
    code: __markup
  }
};

export const bash: StoryObj<HighlightProps> = {
  args: {
    language: "bash",
    code: __bash
  }
};

export const clike: StoryObj<HighlightProps> = {
  args: {
    language: "clike",
    code: __clike
  }
};

export const c: StoryObj<HighlightProps> = {
  args: {
    language: "c",
    code: __c
  }
};

export const cpp: StoryObj<HighlightProps> = {
  args: {
    language: "cpp",
    code: __cpp
  }
};

export const css: StoryObj<HighlightProps> = {
  args: {
    language: "css",
    code: __css
  }
};

export const diff: StoryObj<HighlightProps> = {
  args: {
    language: "diff",
    code: __diff
  }
};

export const git: StoryObj<HighlightProps> = {
  args: {
    language: "git",
    code: __git
  }
};

export const go: StoryObj<HighlightProps> = {
  args: {
    language: "go",
    code: __go
  }
};

export const graphql: StoryObj<HighlightProps> = {
  args: {
    language: "graphql",
    code: __graphql
  }
};

export const handlebars: StoryObj<HighlightProps> = {
  args: {
    language: "handlebars",
    code: __handlebars
  }
};

export const json: StoryObj<HighlightProps> = {
  args: {
    language: "json",
    code: __json
  }
};

export const less: StoryObj<HighlightProps> = {
  args: {
    language: "less",
    code: __less
  }
};

export const makefile: StoryObj<HighlightProps> = {
  args: {
    language: "makefile",
    code: __makeFile
  }
};

export const markdown: StoryObj<HighlightProps> = {
  args: {
    language: "markdown",
    code: __markdown
  }
};

export const objectivec: StoryObj<HighlightProps> = {
  args: {
    language: "objectivec",
    code: __objectivec
  }
};

export const ocaml: StoryObj<HighlightProps> = {
  args: {
    language: "ocaml",
    code: __ocaml
  }
};

export const python: StoryObj<HighlightProps> = {
  args: {
    language: "python",
    code: __python
  }
};

export const reason: StoryObj<HighlightProps> = {
  args: {
    language: "reason",
    code: __reason
  }
};

export const sass: StoryObj<HighlightProps> = {
  args: {
    language: "sass",
    code: __sass
  }
};

export const scss: StoryObj<HighlightProps> = {
  args: {
    language: "scss",
    code: __scss
  }
};

export const sql: StoryObj<HighlightProps> = {
  args: {
    language: "sql",
    code: __sql
  }
};

export const stylus: StoryObj<HighlightProps> = {
  args: {
    language: "stylus",
    code: __stylus
  }
};

export const yaml: StoryObj<HighlightProps> = {
  args: {
    language: "yaml",
    code: __yaml
  }
};

export const latex: StoryObj<HighlightProps> = {
  args: {
    language: "latex",
    code: __latex
  }
};