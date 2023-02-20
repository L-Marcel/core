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
import { HighlightCustomLanguage } from "./language/custom";
import { javascript } from "./language/custom/javascript";

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
};

export interface HighlightProps
  extends ComponentProps<typeof HighlightContainer> {
  children: string;

  theme?: HighlightDefaultTheme | HighlightTheme;
  language?: HighlightDefaultLanguage;
  externalLanguages?: HighlightCustomLanguage<any, any>[];

  showNumbers?: boolean;
  showNumbersBorder?: boolean;

  numbersContainerClassName?: string;
  numbersClassName?: string;

  plugins?: HighligthPlugin[];
}

export {
  themes,
  HighlightCustomTheme,
  getAllLanguagesInputs,
  getAllLanguagesComponents,
  getComponents,
};

export default function Highlight({
  children,
  theme = "oneDark",
  language = "jsx",
  showNumbers = true,
  showNumbersBorder = true,
  numbersContainerClassName,
  externalLanguages = [javascript], //for test
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
          externalLanguages={externalLanguages}
        />
      </HighlightContent>
    </HighlightContainer>
  );
}
