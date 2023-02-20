/* eslint-disable @typescript-eslint/no-explicit-any */
import Prism from "prism-react-renderer/prism";
import type { HighlightLanguageComponent } from "../../../languages";
import {
  DefinedGrammarToken,
  GrammarToken,
} from "../../themes/tokens";
import { getComponents } from "../../utils/getComponents";

export type TokenObject = {
  pattern: RegExp;

  /**
   * If `true`, then the first capturing group of `pattern` will (effectively) behave as a lookbehind
   * group meaning that the captured text will not be part of the matched text of the new token.
   */
  lookbehind?: boolean | undefined;

  /**
   * Whether the token is greedy.
   *
   * @default false
   */
  greedy?: boolean | undefined;

  /**
   * An optional alias or list of aliases.
   */
  alias?: string | string[] | undefined;

  /**
   * The nested tokens of this token.
   *
   * This can be used for recursive language definitions.
   *
   * Note that this can cause infinite recursion.
   */
  inside?: Grammar | undefined;
};

export type TokenRule = RegExp | TokenObject;

export type Grammar = {
  [Key in DefinedGrammarToken]?: TokenRule[];
} & {
  [key: string]: TokenRule[];
};

export type HighlightCustomLanguageOptions<
  AllAlias extends string
> = {
  /**
   * The initial definitions of the language.
   *
   * It can be a `string` referencing a language that already exists,
   * an instance of `HighlightCustomLanguage` or an object of type `grammar`.
   */
  grammar?:
    | Grammar
    | HighlightCustomLanguage<any, any>
    | HighlightLanguageComponent;

  /**
   * the language's title, if `replaceAliasOrTitles` is `false`
   * it will not replace the extended language' alias.
   */
  title?: string;

  /**
   * indicates whether the `alias`, `title` and `aliasTitles`
   * from the extended definition should be kept.
   */
  replaceAliasOrTitles?: boolean;

  /**
   * The language's alias titles, if `replaceAliasOrTitles` is `false` it will
   * just complement the extended language' alias titles.
   */
  aliasTitles?: {
    [Key in AllAlias]?: string;
  };
};

export class HighlightCustomLanguage<
  Name extends string,
  Alias extends string
> {
  name: Name;
  title?: string;
  alias: Alias[] = [];
  aliasTitles?: {
    [Key in Alias]?: string;
  };

  grammar: Grammar = {};

  /**
   * Create a new language definition
   *
   * @param {string} languageName - the language's name, if it already exists it will replace the default settings.
   * @param {string[]} alias - the language's alias, if `replaceAliasOrTitles` is `false` it will just complement the extended language' alias.
   *
   * @param {Grammar | HighlightCustomLanguage<any, any> | HighlightLanguageComponent} options.grammar - the initial definitions of the language. It can be a `string` referencing a language that already exists, an instance of `HighlightCustomLanguage` or an object of type `grammar`.
   * @param {boolean} [options.replaceAliasOrTitles=false] - a `boolean` that indicates whether the `alias`, `title` and `aliasTitles` from the extended definition should be kept.
   * @param {string} options.title - the language's title, if `replaceAliasOrTitles` is `false` it will not replace the extended language' alias.
   * @param {Object} options.aliasTitles - the language's alias titles, if `replaceAliasOrTitles` is `false` it will just complement the extended language' alias titles.
   */
  constructor(
    languageName: Name,
    alias: Alias[],
    {
      grammar,
      aliasTitles,
      title,
      replaceAliasOrTitles,
    }: HighlightCustomLanguageOptions<Alias> = {}
  ) {
    this.name = languageName;

    if (typeof grammar === "string") {
      this.grammar = Prism.languages.extend(
        grammar,
        {}
      ) as Grammar;

      if (replaceAliasOrTitles) {
        this.alias = alias ?? [];
        this.aliasTitles = aliasTitles ?? {};
        this.title = title;
      } else {
        const components = getComponents();
        const defaultConfig = components.languages[
          grammar
        ] as any;

        const keys = Object.keys(defaultConfig);
        const newTitle = defaultConfig.title ?? title;
        const newAlias = new Set(
          keys.includes("alias")
            ? Array.isArray(defaultConfig.alias)
              ? [...alias, ...defaultConfig.alias]
              : [...alias, defaultConfig.alias]
            : alias
        );

        const newAliasTitles = keys.includes("aliasTitles")
          ? {
              ...(aliasTitles ?? {}),
              ...defaultConfig.aliasTitles,
            }
          : aliasTitles ?? {};

        this.alias = [...newAlias] ?? [];
        this.aliasTitles = newAliasTitles ?? {};
        this.title = newTitle;
      }
    } else if (grammar instanceof HighlightCustomLanguage) {
      const parent = grammar;
      this.grammar = parent.grammar;

      if (replaceAliasOrTitles) {
        this.alias = alias ?? [];
        this.aliasTitles = aliasTitles ?? {};
        this.title = title;
      } else {
        const newTitle = parent.title ?? title;
        const newAlias = new Set(
          Array.isArray(parent.alias)
            ? [...alias, ...parent.alias]
            : [...alias, parent.alias]
        );

        const newAliasTitles = {
          ...(aliasTitles ?? {}),
          ...parent.aliasTitles,
        };

        this.alias = [...newAlias] ?? [];
        this.aliasTitles = newAliasTitles ?? {};
        this.title = newTitle;
      }
    } else if (typeof grammar === "object") {
      this.grammar = grammar;
      this.alias = alias ?? [];
      this.aliasTitles = aliasTitles ?? {};
      this.title = title;
    }
  }

  /**
   * Looks up a token within language definitions and replaces a
   * rule from its list.
   *
   * If the token is not a list (in this case, it will be a regex,
   * which is possible in Prism.js default definitions) this function
   * will transform it into a list since the established standard of this
   * library is that the value of tokens it must be a list.
   *
   * Transforming the value into a list does not change its operation s
   * ince its settings are passed to index `0` of the list.
   *
   * @param {GrammarToken} key - the target token
   * @param {GrammarToken | number} aliasOrIndex - the index of your rules, if it is not a list you can pass the value `0`. It also accepts an alias in case it is a list.
   * @param {Function} newToken - function that need to return the new token rule
   */
  replaceToken(
    key: GrammarToken,
    aliasOrIndex: GrammarToken | number,
    format: (oldToken: TokenRule) => TokenRule
  ) {
    const grammarKey = key as DefinedGrammarToken;

    if (aliasOrIndex !== -1 && this.grammar[grammarKey]) {
      const list = this.grammar[grammarKey]
        ? Array.isArray(this.grammar[grammarKey])
          ? this.grammar[grammarKey] ?? []
          : this.grammar[grammarKey]
          ? ([
              this.grammar[grammarKey] as any,
            ] as TokenRule[])
          : []
        : [];

      this.grammar[grammarKey] = list.map(
        (tokenRule, index) => {
          if (
            typeof aliasOrIndex === "string" &&
            Object.keys(tokenRule).includes("alias") &&
            (tokenRule as TokenObject).alias?.includes(
              aliasOrIndex
            )
          ) {
            return format(tokenRule);
          } else if (index === aliasOrIndex) {
            return format(tokenRule);
          }

          return tokenRule;
        }
      );
    }
  }

  load() {
    (typeof global !== "undefined"
      ? global
      : window
    ).Prism = Prism;

    if (typeof global !== "undefined") {
      global.Prism.languages[this.name] = this.grammar;
    } else {
      window.Prism.languages[this.name] = this.grammar;
    }
  }
}
