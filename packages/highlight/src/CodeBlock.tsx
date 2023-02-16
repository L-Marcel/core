import Highlight, {
  Language,
  defaultProps,
} from "prism-react-renderer";
import { HighlightPreContainer } from "./styles";
import { HighlightTheme } from "./themes/primary";

interface CodeBlockProps {
  code: string;
  language: Language;
  theme?: HighlightTheme;
}

export function CodeBlock({
  code,
  language,
  theme = defaultProps.theme,
}: CodeBlockProps) {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={code}
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
