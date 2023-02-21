It will still take a while for a complete documentation to come out, but I left some predefined themes and several demos in [storybook](https://core-l-marcel.vercel.app/)! 

> Bundle error fixed, now you won't have problem rendering.

It is already possible to edit the definitions of languages ​​used to change colors, but only for predefined languages: ([available languages](https://core-l-marcel.vercel.app/?path=/story/highlight-documentation--page#languages)). I am also very happy because I was able to enable changing the code inside the component on the fly. I left an example of use in [Advanced Usage](#advanced-usage).

> I added support for tabs inside the textarea. At the moment this can interfere with tab browsing. I will resolve this as soon as possible. You can also use the version where the tab is disabled (__`2.0.2`__)

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

## Advanced usage
You can edit! That's right, like a normal textarea!
```tsx
import { useState } from "react";
import { Highlight, EditEvent } from "@lmarcel/highlight";

export default function Home() {
  const [code, setCode] = useState(`const a = red;\nconsole.log(a);`);

  function handleOnEdit(e: EditEvent) {
    setCode(e.currentTarget.value);
  };

  return (
    <main>
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
    </main>
  );
};
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

### Extending themes
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