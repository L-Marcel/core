import { CSSProperties, ComponentProps } from "react";
import { HighlightCustomTheme } from "../themes/custom";
import { CoreHighlightProps } from "..";

export type SpanProps = ComponentProps<"span">;
export type DivProps = ComponentProps<"span">;

/**
 * A common token used in rendering, not to be confused
 * with the token format passed in language definitions.
 */
export type Token = {
  /**
   * The passed token and its aliases
   */
  types: string[];

  /**
   * The content related to the token, typically a snippet of the rendered line.
   */
  content: string;

  /**
   * Says if the token is empty
   */
  empty?: boolean;
};

export type StyleObj = CSSProperties & {
  [key: string]: string | number | null;
};

/**
 * Line properties before being processed and rendered.
 */
export type LineInputProps = DivProps & {
  key?: React.Key;
  style?: StyleObj;
  className?: string;
  line: Token[];
};

/**
 * Line properties after being processed and before rendered.
 */
export type LineOutputProps = DivProps & {
  key?: React.Key;
  style?: StyleObj;
  readonly className: string;
};

/**
 * Properties of the token to be inserted into the line
 * before it is processed and rendered.
 */
export type TokenInputProps = SpanProps & {
  key?: React.Key;
  style?: StyleObj;
  className?: string;
  token: Token;
};

/**
 * Properties of the token to be inserted into the line
 * after it is processed and before rendered.
 */
export type TokenOutputProps = SpanProps & {
  key?: React.Key;
  style?: StyleObj;
  className: string;
  readonly children: string;
};

export type HighlightPluginData<Settings> = {
  /**
   * Use this function to change the theme in use.
   *
   * @param settings - plugin's settings
   * @param theme - theme in use
   * @param highlightProps - main highlight properties
   *
   * @returns formatted theme
   */
  theme?: (
    settings: Settings,
    theme: HighlightCustomTheme,
    highlightProps: CoreHighlightProps
  ) => HighlightCustomTheme;

  /**
   * Use this function to change the current code.
   *
   * @param settings - plugin's settings
   * @param code - current code
   * @param highlightProps - main highlight properties
   *
   * @returns formatted code
   */
  code?: (
    settings: Settings,
    code: string,
    highlightProps: CoreHighlightProps
  ) => string;

  /**
   * Use this function to change the token input.
   *
   * The `token input` is nothing more than the properties that will be passed
   * inside the `spans` rendered on each line for each token.
   *
   * What you pass here will still be processed by the `prism-react-renderer` function.
   *
   * @param settings - plugin's settings
   * @param props - token input props
   * @param highlightProps - main highlight properties
   *
   * @returns formatted token input
   */
  tokenInput?: (
    settings: Settings,
    props: TokenInputProps,
    highlightProps: CoreHighlightProps
  ) => TokenInputProps;

  /**
   * Use this function to change the token output.
   *
   * The `token output` is nothing more than the properties that will be passed
   * inside the `span` rendered on each line for each token after be
   * processed by the `prism-react-renderer` function.
   *
   * @param settings - plugin's settings
   * @param props - token output props
   * @param highlightProps - main highlight properties
   *
   * @returns formatted token output
   */
  tokenOutput?: (
    settings: Settings,
    props: TokenOutputProps,
    highlightProps: CoreHighlightProps
  ) => TokenOutputProps;

  /**
   * Use this function to change the line input.
   *
   * The `line input` is nothing more than the properties that will be passed
   * inside the `div` rendered for each line.
   *
   * What you pass here will still be processed by the `prism-react-renderer` function.
   *
   * @param settings - plugin's settings
   * @param props - line input props
   * @param highlightProps - main highlight properties
   *
   * @returns formatted line input
   */
  lineInput?: (
    settings: Settings,
    props: LineInputProps,
    highlightProps: CoreHighlightProps
  ) => LineInputProps;

  /**
   * Use this function to change the line output.
   *
   * The `line output` is nothing more than the properties that will be passed
   * inside the `div` rendered for each line after be
   * processed by the `prism-react-renderer` function.
   *
   * @param settings - plugin's settings
   * @param props - line output props
   * @param highlightProps - main highlight properties
   *
   * @returns formatted line output
   */
  lineOutput?: (
    settings: Settings,
    props: LineOutputProps,
    highlightProps: CoreHighlightProps
  ) => LineOutputProps;

  /**
   * Use this function to modify the array of tokens representing lines of code.
   *
   * @param settings - plugin's settings
   * @param tokens - array of tokens
   * @param highlightProps - main highlight properties
   *
   * @returns formatted array of tokens
   */
  codeLines?: (
    settings: Settings,
    tokens: Token[][],
    highlightProps: CoreHighlightProps
  ) => Token[][];

  /**
   * Use this function to modify the tokens inside each lines of code.
   *
   * @param settings - plugin's settings
   * @param tokens - the tokens
   * @param highlightProps - main highlight properties
   *
   * @returns formatted tokens
   */
  codeLine?: (
    settings: Settings,
    tokens: Token[],
    highlightProps: CoreHighlightProps
  ) => Token[];
};

export class HighlightPlugin<Settings> {
  /**
   * This function is private, use the static `create` method instead.
   */
  private constructor(
    public plugin: HighlightPluginData<Settings>,
    public settings: Settings
  ) {}

  /**
   * Create a new plugin.
   *
   * It is important to pass the typing of the plugin settings
   * in the generic if you are using typescript!
   *
   * @param plugin - the methods of your plugin
   * @param defaultSettings - plugin default settings
   * @returns plugin instance
   */
  static create<Settings>(
    plugin: HighlightPluginData<Settings>,
    defaultSettings: Settings
  ) {
    return (settings: Settings = defaultSettings) => {
      const finalSettings: Settings = {
        ...defaultSettings,
        ...settings,
      };

      return new HighlightPlugin<Settings>(
        plugin,
        finalSettings
      );
    };
  }
}
