export const documentationHighlightInstalationCode = `//Using pnpm
pnpm add @lmarcel/highlight

//Using npm
npm install @lmarcel/highlight

//Using yarn
yarn add @lmarcel/highlight`;

export const documentationHighlightBasicUsageExample = `<Highlight
  theme="oneDark"
  language="ts"
  children={\`import path from "path";
console.log(path.resolve(__dirname, "test"));\`}
/>`;

export const documentationHighlightExtendingThemes = `import { HighlightCustomTheme, themes } from "@lmarcel/highlight";

const storybookTheme = HighlightCustomTheme.extends(themes.oneDark, {
  numbersBorderColor: "#1ea7fd",
  backgroundColor: "#272727",
  numbersBackgroundColor: "#2b2a2a",
  numbersColor: "#cfcfcf"
});`;