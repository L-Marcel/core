import "./themes/global.css";
import "./themes/code.css";

import { Language, PrismTheme } from "prism-react-renderer";
import { CodeBlock } from "./CodeBlock";
import {
  HighlightContainer,
  HighlightNumber,
  HighlightNumbers,
} from "./styles";

import * as themes from "./themes";

import { languages } from "./themes/languages";
import { ComponentProps } from "react";

type HighlightSupportedLanguages =
  (typeof languages)[number];

type HighlightTheme = keyof typeof themes;

export interface HighlightProps
  extends ComponentProps<typeof HighlightContainer> {
  children: string;
  theme?: HighlightTheme | PrismTheme;
  language?: HighlightSupportedLanguages;
  showNumbers?: boolean;

  numbersContainerClassName?: string;
  numbersClassName?: string;
}

export default function Highlight({
  children,
  theme = "primary",
  language = "jsx",
  showNumbers = false,
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

  return (
    <HighlightContainer {...rest}>
      {showNumbers && (
        <HighlightNumbers
          className={numbersContainerClassName}
          style={{
            gridTemplateRows: `repeat(${numberOfLines},24px)`,
          }}
        >
          {lines.map((line) => {
            return (
              <HighlightNumber
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
        theme={
          typeof theme === "string" ? themes[theme] : theme
        }
        language={language as Language}
      />
    </HighlightContainer>
  );
}
