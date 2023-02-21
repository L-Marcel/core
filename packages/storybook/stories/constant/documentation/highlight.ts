export const instalation = `//Using pnpm
pnpm add @lmarcel/highlight

//Using npm
npm install @lmarcel/highlight

//Using yarn
yarn add @lmarcel/highlight`;

export const basicUsage = `<Highlight
theme="oneDark"
language="ts"
code={\`import path from "path";
console.log(path.resolve(__dirname, "test"));\`}
/>`;

export const advancedUsage = `import { useState } from "react";
import { Highlight, EditEvent } from "@lmarcel/highlight";

export default function Home() {
  const [code, setCode] = useState(\`const a = "red";\\nconsole.log(a);\`);

  function handleOnEdit(e: EditEvent) {
    setCode(e.currentTarget.value);
  };

  return (
    <Highlight
      placeholder="Put your code here..."
      style={{
        minWidth: 800
      }}
      editable={true}
      onEdit={handleOnEdit}
      code={code}
      language="javascript"
    />
  );
};`;

export const extendingThemes = `import { HighlightCustomTheme, themes } from "@lmarcel/highlight";

export const myTheme = new HighlightCustomTheme(/*...*/);

export const anotherTheme = new HighlightCustomTheme.extends(myTheme, /*...*/);

export const storybookTheme = HighlightCustomTheme.extends(themes.oneDark, {
  numbersBorderColor: "#1ea7fd",
  backgroundColor: "#272727",
  numbersBackgroundColor: "#2b2a2a",
  numbersColor: "#cfcfcf"
});`;

export const languageDefinitions = `const javascript = new HighlightCustomLanguage(
  "javascript",
  [],
  {
    grammar: "javascript",
  }
);

javascript.replaceTokenRule(
  "keyword",
  "control-flow",
  (oldToken) => {
    return {
      ...oldToken,
      pattern: /\\b(?<!\\.)(?:(await(?= |\\()|break(?=\\b)|catch(?=[\\s]*\\()|continue(?=\\b)|do(?=\\b)|else(?=\\b)|finally(?=\\b)|for(?=\\b)|if(?=\\b)|return(?=\\b)|switch(?=\\b)|throw(?=\\b)|try(?=\\b)|while(?=\\b)|yield(?=\\b)))/,
      alias: "control-flow",
    };
  }
);

export { javascript };`;

export const customLanguage = `const javascript = new HighlightCustomLanguage(
  "javascript",
  [],
  {
    grammar: "javascript",
  }
);`;

export const tokenRule = `javascript.replaceTokenRule(
  "keyword", //token
  "control-flow", //token rule alias
  (oldToken) => { //function to return the new token rule
    return {
      ...oldToken,

      //regex
      pattern: /\\b(?<!\\.)(?:(await(?= |\\()|break(?=\\b)|catch(?=[\\s]*\\()|continue(?=\\b)|do(?=\\b)|else(?=\\b)|finally(?=\\b)|for(?=\\b)|if(?=\\b)|return(?=\\b)|switch(?=\\b)|throw(?=\\b)|try(?=\\b)|while(?=\\b)|yield(?=\\b)))/,
      
      //token rule alias
      alias: "control-flow", 
    };
  }
);`;