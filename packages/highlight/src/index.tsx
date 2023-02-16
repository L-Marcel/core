import "./themes/global.css";
import "./themes/code.css";

import { Language } from "prism-react-renderer";
import { CodeBlock } from "./CodeBlock";
import {
  HighlightContainer,
  HighlightContent,
  HighlightNumber,
  HighlightNumbers,
} from "./styles";

import themes from "./themes";

import { languages } from "./themes/languages";
import { ComponentProps } from "react";
import { HighlightTheme } from "./themes/primary";

export type HighlightSupportedLanguages =
  (typeof languages)[number];

export type DefaultHighlightTheme = keyof typeof themes;
export type { HighlightTheme };

export interface HighlightProps
  extends ComponentProps<typeof HighlightContainer> {
  children: string;
  theme?: DefaultHighlightTheme | HighlightTheme;
  language?: HighlightSupportedLanguages;

  showNumbers?: boolean;
  showNumbersBorder?: boolean;

  numbersContainerClassName?: string;
  numbersClassName?: string;
}

export { themes };

export default function Highlight({
  children,
  theme = "primary",
  language = "jsx",
  showNumbers = true,
  showNumbersBorder = true,
  numbersContainerClassName,
  numbersClassName,
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
          code={children}
          theme={selectedTheme}
          language={language as Language}
        />
      </HighlightContent>
    </HighlightContainer>
  );
}
