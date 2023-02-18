It will still take a while for a complete documentation to come out, but I left some predefined themes and several demos in [storybook](https://core-l-marcel.vercel.app/)! 

> Notice that I'm using the library itself in the documentation in the storybook.

Does not yet support custom languages ([available languages](https://core-l-marcel.vercel.app/?path=/story/highlight-documentation--page#languages)). The idea is to allow this through customizable plugins. Already supports custom themes. Some theme tokens still don't appear in the options, in the future I'm thinking of leaving something dynamic.

## Installation
To install you need to run in your project:
```
//Using pnpm
pnpm add @lmarcel/highlight

//Using npm
npm install @lmarcel/highlight

//Using yarn
yarn add @lmarcel/highlight
```

## Basic usage
```tsx
<Highlight
  theme="oneDark"
  language="ts"
  children={`import path from "path";
console.log(path.resolve(__dirname, "test"));`}
/>
```

### List of available themes
- __`oneDark`__
- __`dracula`__
- __`duotoneDark`__
- __`duotoneLight`__
- __`github`__
- __`nightOwl`__
- __`nightOwlLight`__
- __`oceanicNext`__
- __`palenight`__
- __`okaidia`__
- __`shadesOfPurple`__
- __`synthwave84`__
- __`ultramin`__
- __`vsDark`__
- __`vsLight`__

### Extending Themes
You can also edit existing themes in a very simple way.
```tsx
import { HighlightCustomTheme, themes } from "@lmarcel/highlight";

export const storybookTheme = HighlightCustomTheme.extends(themes.oneDark, {
  numbersBorderColor: "#1ea7fd",
  backgroundColor: "#272727",
  numbersBackgroundColor: "#2b2a2a",
  numbersColor: "#cfcfcf"
});
```

### List of available languages
This library currently supports ALL __`Prism.js`__ languages __`​​dynamically`__. Because it was too big and not feasible to do manually, I migrated this list to [storybook](https://core-l-marcel.vercel.app/). 

[Available languages](https://core-l-marcel.vercel.app/?path=/story/highlight-documentation--page#languages)