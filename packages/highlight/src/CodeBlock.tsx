/* eslint-disable @typescript-eslint/no-explicit-any */
import Highlight, {
  defaultProps,
  PrismTheme,
} from "prism-react-renderer";

import { HighlightPreContainer } from "./styles";
import { HighlightTheme } from "./themes/custom";
import { HighligthPlugin } from "./plugins";
import { HighlightLanguageInput } from "../languages";
import { runPlugins } from "./utils/runPlugins";
import { CoreHighlightProps } from ".";

interface CodeBlockProps {
  code: string;
  language: HighlightLanguageInput;
  theme?: HighlightTheme;
  plugins?: HighligthPlugin<any>[];
  tabSize?: number;
  coreProps: CoreHighlightProps;
}

export function CodeBlock({
  code,
  language,
  tabSize = 2,
  plugins = [],
  theme = defaultProps.theme,
  coreProps,
}: CodeBlockProps) {
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
        const _tokens = runPlugins(
          plugins,
          "codeLines",
          tokens,
          coreProps
        );

        return (
          <HighlightPreContainer
            suppressContentEditableWarning
            className={className}
            style={style}
          >
            <code
              style={{
                tabSize,
                fontFamily: "inherit",
              }}
            >
              {_tokens.map((line, idx) => {
                const _line = runPlugins(
                  plugins,
                  "codeLine",
                  line,
                  coreProps
                );

                const _inputLineProps = runPlugins(
                  plugins,
                  "lineInput",
                  {
                    line: _line,
                    key: `line-${idx}`,
                  },
                  coreProps
                );

                const _lineProps = runPlugins(
                  plugins,
                  "lineOutput",
                  getLineProps(_inputLineProps),
                  coreProps
                );

                return (
                  // eslint-disable-next-line react/jsx-key
                  <div {..._lineProps}>
                    {_line.map((token, i) => {
                      const _inputTokenProps = runPlugins(
                        plugins,
                        "tokenInput",
                        {
                          token,
                          key: `token-${i}`,
                        },
                        coreProps
                      );

                      const _lineProps = runPlugins(
                        plugins,
                        "tokenOutput",
                        getTokenProps(_inputTokenProps),
                        coreProps
                      );

                      return (
                        // eslint-disable-next-line react/jsx-key
                        <span {..._lineProps} />
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
