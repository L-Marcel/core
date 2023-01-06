import { CodeBlock } from "./CodeBlock";
import { HighlightContainer } from "./styles";
import * as themes from "./themes";
import "./themes/code.css";
import { languages } from "./themes/languages";


type HighlightSupportedLanguages = typeof languages[number];
type HighlightTheme = keyof typeof themes;

export interface HighlightProps {
  children: string;
  theme?: HighlightTheme;
  language?: HighlightSupportedLanguages;
}

export function Highlight({ 
  children, 
  theme = "primary", 
  language = "jsx" 
}: HighlightProps) {
  return (
    <HighlightContainer>
      <CodeBlock
        code={children}
        theme={themes[theme]}
        language={language}
      />
    </HighlightContainer>
  );
}