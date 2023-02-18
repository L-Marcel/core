import Highlight, {
  Language,
  defaultProps,
  Prism,
  PrismTheme,
} from "prism-react-renderer";
import { HighlightPreContainer } from "./styles";
import { HighlightTheme } from "./themes/custom";
import { HighligthPlugin } from "./plugin";

interface CodeBlockProps {
  code: string;
  language: Language;
  theme?: HighlightTheme;
  plugins?: HighligthPlugin[];
}

export function CodeBlock({
  code,
  language,
  plugins,
  theme = defaultProps.theme,
}: CodeBlockProps) {
  return (
    <Highlight
      {...defaultProps}
      theme={theme as PrismTheme}
      code={code}
      Prism={Prism}
      language={language}
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
