/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import "./themes/global.css";
import "./themes/code.css";

import { CodeBlock } from "./CodeBlock";
import {
  Content,
  HighlightContainer,
  HighlightContent,
  HighlightNumber,
  HighlightNumbers,
  Textarea,
} from "./styles";
import themes from "./themes";
import {
  ChangeEvent,
  ComponentProps,
  FocusEvent,
  KeyboardEvent,
} from "react";
import {
  HighlightCustomTheme,
  HighlightTheme,
  HighlightThemePlain,
  HighlightThemeStyle,
  DangerousStyleEntry,
  StyleEntry,
} from "./themes/custom";
import {
  HighlightPlugin,
  DivProps,
  HighlightPluginData,
  LineInputProps,
  LineOutputProps,
  SpanProps,
  StyleObj,
  Token,
  TokenInputProps,
  TokenOutputProps,
} from "./plugins";
import {
  HighlightLanguageInput,
  HighlightLanguageComponent,
} from "../languages";
import {
  getAllLanguagesComponents,
  getAllLanguagesInputs,
} from "./utils/getAllLanguages";
import { getComponents } from "./utils/getComponents";
import {
  HighlightCustomLanguage,
  TokenObject,
  TokenRule,
  Grammar,
  HighlightCustomLanguageOptions,
} from "./languages/custom";
import {
  DefinedGrammarToken,
  GrammarToken,
} from "./themes/tokens";
import {
  javascript,
  jsx,
} from "./languages/custom/javascript";
import { objectToArray } from "./utils/objectToArray";
import { isCustomLanguage } from "./utils/isCustomLanguage";
import { loadComponents } from "./utils/loadComponents";
import { corePlugin } from "./plugins/custom/corePlugin";
import { runPlugins } from "./utils/runPlugins";
import { banner } from "./languages/custom/banner";

type HighlightDefaultTheme = keyof typeof themes;

type EditEvent<Type extends "change" | "focus" = "change"> =
  Type extends "change"
    ?
        | KeyboardEvent<HTMLTextAreaElement>
        | ChangeEvent<HTMLTextAreaElement>
    : FocusEvent<HTMLTextAreaElement>;

export type {
  HighlightTheme,
  EditEvent,
  HighlightThemePlain,
  HighlightThemeStyle,
  HighlightDefaultTheme,
  HighlightLanguageInput,
  HighlightCustomLanguageOptions,
  TokenObject,
  TokenRule,
  Grammar,
  DefinedGrammarToken,
  GrammarToken,
  DivProps,
  HighlightPluginData,
  LineInputProps,
  LineOutputProps,
  SpanProps,
  StyleObj,
  Token,
  TokenInputProps,
  TokenOutputProps,
  DangerousStyleEntry,
  StyleEntry,
  HighlightLanguageComponent,
};

export interface HighlightProps
  extends ComponentProps<typeof HighlightContainer> {
  /**
   * The code
   */
  code: string;

  /**
   * If `true` the library will not load the standard definitions of languages
   * established by the author.
   *
   * In that case the library will use the default Prism.js settings.
   *
   * This property does not disable custom definitions passed in `externalLanguages´
   *
   * @default false
   */
  disableDefaultCustomLanguages?: boolean;

  /**
   * Theme used on render the code.
   * Can be a `string` or a `HighlightTheme` object.
   *
   * @default "oneDark"
   */
  theme?: HighlightDefaultTheme | HighlightTheme;

  /**
   * language used on render the code.
   * Can be the language's `aliases` or `titles`.
   * 
   * Defined as a `string` to accept unregistered languages.
   * Useful type: `HighlightLanguageInput`
   */
  language: HighlightLanguageInput | string;

  /**
   * Custom languages that can be used to render the code.
   * You still need to set the language.
   *
   * It currently does not support definitions of languages
   * not listed.
   */
  externalLanguages?: HighlightCustomLanguage<any, any>[];

  showNumbers?: boolean;
  showNumbersBorder?: boolean;

  textareaClassName?: string;
  numbersContainerClassName?: string;
  numbersClassName?: string;

  /**
   * In work...
   */
  plugins?: HighlightPlugin<any>[];

  /**
   * If `true` the content can be edited
   * @default false
   */
  editable?: boolean;

  /**
   * Function called when editing content
   */
  onEdit?: (e: EditEvent<"change">) => void;
  onEnterEditMode?: (e: EditEvent<"focus">) => void;
  onExitEditMode?: (e: EditEvent<"focus">) => void;

  /**
   * Textarea placeholder.
   *
   * The textarea will not set the size inside the component, so you may need
   * to set a minimum size for the component to display the placeholder properly.
   */
  placeholder?: string;

  /**
   * Number of spaces in a tab
   *
   * @default 2
   */
  tabSize?: number;
}

export const highlightCustomLanguages = {
  javascript,
  jsx,
  myBanner: banner
};

export {
  themes,
  HighlightPlugin,
  HighlightCustomTheme,
  getAllLanguagesInputs,
  getAllLanguagesComponents,
  isCustomLanguage,
  loadComponents,
  objectToArray,
  getComponents,
  corePlugin,
};

export type CoreHighlightProps = Pick<
  HighlightProps,
  | "editable"
  | "tabSize"
  | "language"
  | "showNumbers"
  | "theme"
>;

export function Highlight({
  code,
  theme = "oneDark",
  language = "jsx",
  showNumbers = true,
  tabSize = 2,
  placeholder,
  onEdit,
  onEnterEditMode,
  onExitEditMode,
  editable = false,
  showNumbersBorder = true,
  textareaClassName,
  numbersContainerClassName,
  disableDefaultCustomLanguages = false,
  externalLanguages = [],
  numbersClassName,
  plugins = [],
  ...rest
}: HighlightProps) {
  const coreProps = {
    language,
    editable,
    showNumbers,
    tabSize,
    theme,
  };

  code = runPlugins(plugins, "code", code, coreProps);

  const numberOfLines = code.match(/\n/g)?.length;

  const lines = Array.from({
    length: numberOfLines ? numberOfLines + 1 : 1,
  }).map((_, i) => {
    return i + 1;
  });

  const selectedTheme = runPlugins(
    plugins,
    "theme",
    typeof theme === "string" ? themes[theme] : theme,
    coreProps
  );

  loadComponents(
    language as any,
    disableDefaultCustomLanguages
      ? externalLanguages
      : [
          ...objectToArray(highlightCustomLanguages),
          ...externalLanguages,
        ]
  );

  function handleOnFocusHighlight(
    e: FocusEvent<HTMLDivElement>
  ) {
    e.currentTarget.role = "focused";

    if (
      !e.currentTarget.className.includes(
        " focused-lmarcel-highlight"
      )
    ) {
      e.currentTarget.className +=
        " focused-lmarcel-highlight";
    }

    rest?.onFocus && rest?.onFocus(e);
  }

  function handleOnBlurHighlight(
    e: FocusEvent<HTMLDivElement>
  ) {
    e.currentTarget.role = "";

    if (
      e.currentTarget.className.includes(
        " focused-lmarcel-highlight"
      )
    ) {
      e.currentTarget.className =
        e.currentTarget.className.replace(
          " focused-lmarcel-highlight",
          ""
        );
    }

    rest?.onBlur && rest?.onBlur(e);
  }

  function handleOnKeyDownHighlight(
    e: KeyboardEvent<HTMLDivElement>
  ) {
    const isFocused = e.currentTarget.role === "focused";
    if (
      e.key == "Enter" &&
      editable &&
      onEdit &&
      isFocused
    ) {
      e.preventDefault();
      const textarea =
        e.currentTarget.getElementsByClassName(
          "lmarcel-highlight-textarea"
        ) as HTMLCollectionOf<HTMLTextAreaElement>;

      if (textarea.length > 0) {
        textarea[0].selectionStart = 0;
        textarea[0].selectionEnd = 0;
        textarea[0].focus();
        e.currentTarget.role = "";
      }
    }

    rest?.onKeyDown && rest?.onKeyDown(e);
  }

  function handleOnKeyDownHighlightTextArea(
    e: KeyboardEvent<HTMLTextAreaElement>
  ) {
    e.stopPropagation();
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;

      e.currentTarget.value =
        e.currentTarget.value.substring(0, start) +
        "\t" +
        e.currentTarget.value.substring(end);

      e.currentTarget.selectionStart = start + 1;
      e.currentTarget.selectionEnd = start + 1;

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onEdit && onEdit(e);
    } else if (e.key === "Escape") {
      const parents = document.getElementsByClassName(
        "focused-lmarcel-highlight"
      ) as HTMLCollectionOf<HTMLDivElement>;

      if (parents.length > 0) {
        parents[0].role = "focused";
        parents[0].focus();
      }
    }
  }

  return (
    <HighlightContainer
      tabIndex={0}
      onFocus={handleOnFocusHighlight}
      onBlur={handleOnBlurHighlight}
      onKeyDown={handleOnKeyDownHighlight}
      {...rest}
      className={`lmarcel-highlight${
        rest?.className ? ` ${rest.className}` : ""
      }`}
      style={{
        color: selectedTheme?.plain?.color,
        backgroundColor:
          selectedTheme?.plain?.backgroundColor,
        ...rest.style,
      }}
    >
      <HighlightContent
        style={
          {
            "--scrollbar-thumb":
              selectedTheme?.plain?.scrollbarThumbColor,
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
              gridTemplateRows: `repeat(${lines.length},24px)`,
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
        <Content
          style={{
            width: "-webkit-fill-available",
          }}
        >
          {editable && onEdit && (
            <Textarea
              tabIndex={-1}
              placeholder={placeholder}
              spellCheck={false}
              draggable={false}
              value={code}
              className={`lmarcel-highlight-textarea${
                textareaClassName
                  ? ` ${textareaClassName}`
                  : ""
              }`}
              onFocus={onEnterEditMode}
              onBlur={onExitEditMode}
              onKeyDown={handleOnKeyDownHighlightTextArea}
              style={{
                caretColor: selectedTheme?.plain?.color,
                resize: "none",
                tabSize,
              }}
              onChange={onEdit}
            />
          )}
          <CodeBlock
            plugins={plugins}
            tabSize={tabSize}
            code={code}
            theme={selectedTheme}
            language={language as any}
            coreProps={coreProps}
          />
        </Content>
      </HighlightContent>
    </HighlightContainer>
  );
}
