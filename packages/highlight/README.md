Editable highlight component for react with support for many languages ​​and custom themes.

> It is now possible to create the definition of languages ​​that do not exist! That's right, you can make your own! See the [demonstration](https://core-l-marcel.vercel.app/?path=/story/highlight-examples--custom-unique-language).

# Summary 
- [Features](#features)
- [Installation](#installation)
- [Basic usage](#basic-usage)
- [Advanced usage](#advanced-usage)
- [Demonstrations](#demonstrations)
- [Edit mode](#edit-mode)
  - [Tab navigation](#tab-navigation)
- [Theming](#theming)
  - [Available themes](#available-themes)
  - [Custom themes](#custom-themes)
- [Languages](#languages)
  - [Available languages](#available-languages)
  - [Custom languages definitions](#custom-languages-definitions)
- [Plugins](#plugins)
- [For authors](#for-authors)
- [Roadmap](#roadmap)

# Features
- Support for [many languages](https://core-l-marcel.vercel.app/?path=/story/highlight-available-languages--page)
- Loads the dependencies of each language alone
- Editable content support
- Mobile editable content support
- Customizable existing or created language definitions
- Customizable theming
- Tab navigation support
- Included styles
- With built-in line number viewer
- Deep integration with TypeScript
- Plug and play! You don't need an external configuration to use it

# Installation
To install you need to run in your project:
```
//Using pnpm
pnpm add @lmarcel/highlight

//Using npm
npm install @lmarcel/highlight

//Using yarn
yarn add @lmarcel/highlight
```

# Basic usage
It's very simple to use!
```tsx
<Highlight
  theme="oneDark"
  language="ts"
  code={`import path from "path";
console.log(path.resolve(__dirname, "test"));`}
/>
```

# Advanced usage
You can edit! That's right, like a normal textarea! See the [demo](https://core-l-marcel.vercel.app/?path=/story/highlight-examples--editable).
```tsx
import { useState } from "react";
import { Highlight, EditEvent } from "@lmarcel/highlight";

export default function Home() {
  const [code, setCode] = useState(`const a = "red";\nconsole.log(a);`);

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
};
```

# Demonstrations
See some demos at [storybook](https://core-l-marcel.vercel.app/).
It has an [editable demonstration](https://core-l-marcel.vercel.app/?path=/story/highlight-examples--editable)!

# Edit mode
If the __`editable`__ property is __`true`__, the user will be able to enter the __`edit mode`__, where it is possible to change the content inside the component. 

## Tab navigation
In edit mode, the __`tab key`__ inserts a __`tab space`__ (as in a normal editor). To exit edit mode, just press __`esc key`__ or click outside the component (triggering a __`blur event`__).

However, if the user chooses to leave using the __`esc key`__, a __`focus event`__ will be triggered in the component, so that the component does not harm navigation by tab navigation.

When the component is __`focused`__, it is possible to enter __`edit mode`__ by pressing the __`enter key`__.

I thought of showing the available keys in a kind of menu, but this could harm your design and the current structure makes it __`very difficult`__ to do this within the component itself, so I left it free for you to choose how you want to indicate the navigation possibilities to the user.

I left two functions that can be passed for this purpose: __`onEnterEditMode`__ and __`onExitEditMode`__.

# Theming
You can define pre-existing or custom themes for the component.

## Available themes
I left some predefined themes, some with more extended support for some languages.

Extensive themes (I made several changes):
- __`oneDark`__
- __`oneLight`__
- __`laserwave`__
- __`dracula`__

Updated themes (I made small changes):
- __`vsDark`__
- __`vsLight`__

Old themes (not changed):
- __`byverduDracula`__
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

## Custom themes
You can also edit existing themes in a very simple way using __`HighlightCustomTheme`__. Or even create your own themes.

```tsx
import { HighlightCustomTheme, themes } from "@lmarcel/highlight";

export const myTheme = new HighlightCustomTheme(/*...*/);

export const anotherTheme = new HighlightCustomTheme.extends(myTheme, /*...*/);

export const storybookTheme = HighlightCustomTheme.extends(themes.oneDark, {
  numbersBorderColor: "#1ea7fd",
  backgroundColor: "#272727",
  numbersBackgroundColor: "#2b2a2a",
  numbersColor: "#cfcfcf"
});
```

# Languages
This library uses __`Prism.js`__ to generate the tokens for each language component, to avoid ambiguity I call these components __`languages definitions`__.

## Available languages
This library currently supports ALL __`Prism.js`__ languages __`​​dynamically`__. Because it was too big and not feasible to do manually, I migrated this list to [storybook](https://core-l-marcel.vercel.app/) in [available languages](https://core-l-marcel.vercel.app/?path=/story/highlight-available-languages--page).

## Custom languages definitions
It is possible, but quite complex, to edit language definitions using the library. You can make your own (it inevitably requires extensive knowledge of regex, see the [demonstration](https://core-l-marcel.vercel.app/?path=/story/highlight-examples--custom-unique-language)):
```ts
//my custom language definitions
const banner = new HighlightCustomLanguage(
  "myBanner",
  [],
  {
    grammar: {
      "banners": [{
        pattern: /\btitle\b/g,
        alias: "banner-title"
      }, {
        pattern: /\bsubtitle\b/g,
        alias: "banner-subtitle"
      }, {
        pattern: /\bend\b/g,
        alias: "banner-end"
      }]
    },
  }
);

//my javascript language definitions
const javascript = new HighlightCustomLanguage(
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
      pattern:
        /\b(?<!\.)(?:(await(?= |\()|break(?=\b)|catch(?=[\s]*\()|continue(?=\b)|do(?=\b)|else(?=\b)|finally(?=\b)|for(?=\b)|if(?=\b)|return(?=\b)|switch(?=\b)|throw(?=\b)|try(?=\b)|while(?=\b)|yield(?=\b)))/,
      alias: "control-flow",
    };
  }
);

export { javascript, banner };
```

The definitions are available in the __`grammar`__ property of the new language __`instance`__.

When creating a new instance it is possible to pass the raw value of this property, another instance of the class or even the name (but not an alias) of a pre-existing language (__`inheriting`__ the language definitions).

This is what happens in this section:
```ts
const javascript = new HighlightCustomLanguage(
  "javascript",
  [],
  {
    grammar: "javascript",
  }
);
```

Within __`grammar`__, the mapping of __`tokens`__ is done, each token has one or more __`rules`__ within it.

These rules can have an __`alias`__, which is the value that can be passed after the token to be used in styling.

I left some functions available in the instance to __`manipulate`__ these tokens. But it is a very complex resource and I may have missed something.
```ts
javascript.replaceTokenRule(
  "keyword", //token
  "control-flow", //token rule alias
  (oldToken) => { //function to return the new token rule
    return {
      ...oldToken,

      //regex
      pattern: 
        /\b(?<!\.)(?:(await(?= |\()|break(?=\b)|catch(?=[\s]*\()|continue(?=\b)|do(?=\b)|else(?=\b)|finally(?=\b)|for(?=\b)|if(?=\b)|return(?=\b)|switch(?=\b)|throw(?=\b)|try(?=\b)|while(?=\b)|yield(?=\b)))/,

      //token rule alias
      alias: "control-flow", 
    };
  }
);
```

# Plugins
One of the most complex and most useful parts. A single plugin can make changes to code, theme, tokens, property of rendered lines and other things. The library itself already comes with a very simple plugin that I created for testing, the __`corePlugin`__.

Currently its only function is to style spaces generated by tabs.

See how to use:
```tsx
import { corePlugin, Highlight } from "@lmarcel/highlight";

export function Code(/* ... */) {
  return (
    <Highlight
      plugins={[
        corePlugin()
      ]}
      /* ... */
    />
  );
}
```

Plugins are executed in the same order they are passed to the component.

The plugin must always be passed as a function, because it can receive specific settings from it. Avoid using too many plugins simultaneously, it can hurt __`performance`__ and some can __`conflict`__.


Here is an example of the __`structure`__ of a plugin:
```ts
//packages/highlight/src/plugins/custom/corePlugin.ts
export const corePlugin = HighlightPlugin.create<CorePluginSettings>(
  {
    codeLine: (settings, tokens, core) => {
      const spaces = core.tabSize ?? 2;

      if (
        settings?.showTabulations &&
        tokensStartWithTabulation(tokens, spaces)
      ) {
        /* ... */
      }

      return tokens;
    },
    theme: (settings, theme, core) => {
      if (settings?.showTabulations) {
        /* ... */
      }

      return theme;
    },
    code: (settings, code, core) => {
      let numberOfTabsLastLine = 0;

      if (settings?.showTabulations) {
        /* ... */
      }

      return code;
    },
  },
  {
    showTabulations: true,
  }
);
```

The functions follow the same pattern. The first parameter is the plugin's __`settings`__, the second is the value it wants to __`change`__ and __`return`__ and the last is the main __`properties`__ passed to the component.

Does not support __`async`__ functions!

I left a [demo](https://core-l-marcel.vercel.app/?path=/story/highlight-examples--editable-with-plugin) of this plugin. I made something very simple, so take it easy if you find fault!

# For authors
For those who are interested, I left a page on storybook containing some examples of how it is possible to create plugins, language definitions and themes.

See the [codes](https://core-l-marcel.vercel.app/?path=/story/highlight-for-authors-warning--page).

I also left a lot of helpful comments on the properties I typed within the code. If you are going to use TypeScript you will see occasionally. I apologize if this part is not very well documented.