import { Language } from "prism-react-renderer";
import { CodeBlock } from "./CodeBlock";
import { CopyButton, HighlightContainer, HighlightNumber, HighlightNumbers } from "./styles";
import * as themes from "./themes";
import "./themes/code.css";
import { languages } from "./themes/languages";
import { Copy } from "phosphor-react";


type HighlightSupportedLanguages = typeof languages[number];
type HighlightTheme = keyof typeof themes;

export interface HighlightProps {
  children: string;
  theme?: HighlightTheme;
  language?: HighlightSupportedLanguages;
}

export default function Highlight({ 
  children, 
  theme = "primary", 
  language = "jsx" 
}: HighlightProps) {
  const numberOfLines = children.match(/\n/g)?.length;

  const lines = Array.from({
    length: (numberOfLines? numberOfLines + 1:0)
  }).map((_,i) => i);

  return (
    <HighlightContainer>
      <CopyButton>
        <Copy/>
      </CopyButton>
      <HighlightNumbers
        css={{
          "--number-of-lines-in-code": numberOfLines
        }}
      >
        {lines.map((line) => {
          return (
            <HighlightNumber key={line}>{line}</HighlightNumber>
          );
        })}
      </HighlightNumbers>
      <CodeBlock
        code={children}
        theme={themes[theme]}
        language={language as Language}
      />
    </HighlightContainer>
  );
}