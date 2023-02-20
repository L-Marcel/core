/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import "./themes/global.css";
import "./themes/code.css";

import { CodeBlock } from "./CodeBlock";
import {
  HighlightContainer,
  HighlightContent,
  HighlightNumber,
  HighlightNumbers,
} from "./styles";
import themes from "./themes";
import { ComponentProps } from "react";
import {
  HighlightCustomTheme,
  HighlightTheme,
  HighlightThemePlain,
  HighlightThemeStyle,
} from "./themes/custom";
import { HighligthPlugin } from "./plugin";
import { HighlightLanguageInput } from "../languages";
import {
  getAllLanguagesComponents,
  getAllLanguagesInputs,
} from "./utils/getAllLanguages";
import { getComponents } from "./utils/getComponents";
import {
  HighlightCustomLanguage,
  TokenObject,
  TokenRule,
  Grammar,
  HighlightCustomLanguageOptions,
} from "./language/custom";
import {
  DefinedGrammarToken,
  GrammarToken,
} from "./themes/tokens";
import {
  javascript,
  jsx,
} from "./language/custom/javascript";
import { objectToArray } from "./utils/objectToArray";
import { isCustomLanguage } from "./utils/isCustomLanguage";
import { loadComponents } from "./utils/loadComponents";

type HighlightDefaultLanguage =
  | HighlightLanguageInput
  | String;

type HighlightDefaultTheme = keyof typeof themes;

export type {
  HighlightTheme,
  HighlightThemePlain,
  HighlightThemeStyle,
  HighlightDefaultTheme,
  HighlightLanguageInput,
  HighlightCustomLanguageOptions,
  TokenObject,
  TokenRule,
  Grammar,
  DefinedGrammarToken,
  GrammarToken,
};

export interface HighlightProps
  extends ComponentProps<typeof HighlightContainer> {
  /**
   * The code
   */
  children: string;

  /**
   * If `true` the library will not load the standard definitions of languages
   * established by the author.
   *
   * In that case the library will use the default Prism.js settings.
   *
   * This property does not disable custom definitions passed in `externalLanguages´
   *
   * @default false
   */
  disableDefaultCustomLanguages?: boolean;

  /**
   * Theme used on render the code.
   * Can be a `string` or a `HighlightTheme` object.
   *
   * @default "oneDark"
   */
  theme?: HighlightDefaultTheme | HighlightTheme;

  /**
   * language used on render the code.
   * Can be the language's `aliases` or `titles`.
   */
  language: HighlightDefaultLanguage;

  /**
   * Custom languages that can be used to render the code.
   * You still need to set the language.
   *
   * It currently does not support definitions of languages
   * not listed.
   */
  externalLanguages?: HighlightCustomLanguage<any, any>[];

  showNumbers?: boolean;
  showNumbersBorder?: boolean;

  numbersContainerClassName?: string;
  numbersClassName?: string;

  /**
   * In work...
   */
  plugins?: HighligthPlugin[];
}

export const highlightCustomLanguages = {
  javascript,
  jsx,
};

export {
  themes,
  HighlightCustomTheme,
  getAllLanguagesInputs,
  getAllLanguagesComponents,
  isCustomLanguage,
  loadComponents,
  objectToArray,
  getComponents,
};

export default function Highlight({
  children,
  theme = "oneDark",
  language = "jsx",
  showNumbers = true,
  showNumbersBorder = true,
  numbersContainerClassName,
  disableDefaultCustomLanguages = false,
  externalLanguages = [],
  numbersClassName,
  plugins,
  ...rest
}: HighlightProps) {
  const numberOfLines = children.match(/\n/g)?.length;

  const lines = Array.from({
    length: numberOfLines ? numberOfLines + 1 : 1,
  }).map((_, i) => {
    return i + 1;
  });

  const selectedTheme =
    typeof theme === "string" ? themes[theme] : theme;

  return (
    <HighlightContainer
      {...rest}
      className={`lmarcel-highlight${
        rest?.className ? ` ${rest.className}` : ""
      }`}
      style={{
        backgroundColor:
          selectedTheme?.plain?.backgroundColor,
        ...rest.style,
      }}
    >
      <HighlightContent
        style={
          {
            "--scrollbar-thumb":
              selectedTheme?.plain?.srollbarThumbColor,
            "--scrollbar-track":
              selectedTheme?.plain?.scrollbarTrackColor,
          } as React.CSSProperties & {
            [key: string]: string;
          }
        }
      >
        {showNumbers && (
          <HighlightNumbers
            className={numbersContainerClassName}
            showBorder={showNumbersBorder}
            style={{
              gridTemplateRows: `repeat(${numberOfLines},24px)`,
              backgroundColor:
                selectedTheme?.plain
                  ?.numbersBackgroundColor,
              borderColor:
                selectedTheme?.plain?.numbersBorderColor,
            }}
          >
            {lines.map((line) => {
              return (
                <HighlightNumber
                  style={{
                    color:
                      selectedTheme?.plain?.numbersColor,
                  }}
                  className={numbersClassName}
                  key={line}
                >
                  {line}
                </HighlightNumber>
              );
            })}
          </HighlightNumbers>
        )}
        <CodeBlock
          plugins={plugins}
          code={children}
          theme={selectedTheme}
          language={language as any}
          externalLanguages={
            disableDefaultCustomLanguages
              ? externalLanguages
              : [
                  ...objectToArray(
                    highlightCustomLanguages
                  ),
                  ...externalLanguages,
                ]
          }
        />
      </HighlightContent>
    </HighlightContainer>
  );
}
