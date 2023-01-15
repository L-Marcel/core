import Highlight, { Language, PrismTheme, defaultProps } from "prism-react-renderer";

interface CodeBlockProps {
  code: string; 
  language: Language;
  theme?: PrismTheme;
}

export function CodeBlock({ code, language, theme = defaultProps.theme }: CodeBlockProps) {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre className={className} style={style}>
            <code>
              {tokens.map((line, idx) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div {...getLineProps({ line, key: `line-${idx}` })}>
                    {line.map((token, i) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <span
                          {...getTokenProps({ token, key: `token-${i}` })}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </code>
          </pre>
        );
      }}
    </Highlight>
  );
}