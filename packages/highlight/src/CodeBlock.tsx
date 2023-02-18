/* eslint-disable @typescript-eslint/no-explicit-any */
import Highlight, {
  defaultProps,
  PrismTheme,
} from "prism-react-renderer";

import { HighlightPreContainer } from "./styles";
import { HighlightTheme } from "./themes/custom";
import { HighligthPlugin } from "./plugin";
import { HighlightLanguageInput } from "../languages";
import { loadComponents } from "./utils/loadComponents";

interface CodeBlockProps {
  code: string;
  language: HighlightLanguageInput;
  theme?: HighlightTheme;
  plugins?: HighligthPlugin[];
}

export function CodeBlock({
  code,
  language,
  plugins,
  theme = defaultProps.theme,
}: CodeBlockProps) {
  loadComponents(language);

  return (
    <Highlight
      {...defaultProps}
      theme={theme as PrismTheme}
      code={code}
      language={language as any}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => {
        return (
          <HighlightPreContainer
            className={className}
            style={style}
          >
            <code>
              {tokens.map((line, idx) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div
                    {...getLineProps({
                      line,
                      key: `line-${idx}`,
                    })}
                  >
                    {line.map((token, i) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <span
                          {...getTokenProps({
                            token,
                            key: `token-${i}`,
                          })}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </code>
          </HighlightPreContainer>
        );
      }}
    </Highlight>
  );
}
