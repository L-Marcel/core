/* eslint-disable @typescript-eslint/no-explicit-any */
import Prism from "prism-react-renderer/prism";
import { TokenObject } from "prismjs";
import type { HighlightLanguageComponent } from "../../../languages";
import {
  DefinedGrammarTokens,
  GrammarTokens,
} from "../../themes/tokens";

type GrammarRest = {
  [Key in DefinedGrammarTokens]?: TokenRules;
} & {
  [key: string]: TokenRule;
};

type Grammar = GrammarRest | Record<string, TokenRules>;

type Flags = {
  global?: boolean;
  insensitive?: boolean;
  multiline?: boolean;
  dotall?: boolean;
  unicode?: boolean;
  sticky?: boolean;
};

type TokenRuleOptions = {
  lookbehind?: boolean;
  greedy?: boolean;
  alias?: string | string[];
  inside?: Grammar;
  flags?: Flags;
};

export class TokenRule implements TokenObject {
  lookbehind?: boolean | undefined;
  greedy?: boolean | undefined;
  alias?: string | string[] | undefined;
  inside: Grammar = {};

  constructor(
    public pattern: RegExp,
    {
      flags,
      alias,
      greedy,
      inside,
      lookbehind,
    }: TokenRuleOptions = {}
  ) {
    const allFlags: string[] = [];

    if (flags) {
      Object.entries(flags).forEach(([flag, inUse]) => {
        if (inUse) {
          switch (flag) {
            case "global":
              allFlags.push("g");
              break;
            case "insensitive":
              allFlags.push("i");
              break;
            case "multiline":
              allFlags.push("m");
              break;
            case "dotall":
              allFlags.push("s");
              break;
            case "unicode":
              allFlags.push("u");
              break;
            case "sticky":
              allFlags.push("y");
              break;
            default:
              break;
          }
        }
      });
    }

    //super(pattern, allFlags.join());

    this.pattern = pattern;
    this.alias = alias;
    this.greedy = greedy;
    this.inside = inside ?? {};
    this.lookbehind = lookbehind;
  }

  addTokenInside(
    token: GrammarTokens,
    format: (rules: TokenRules) => TokenRules
  ) {
    const tokenRules = this.inside[token as keyof Grammar];

    let rules: TokenRules;
    if (!Array.isArray(tokenRules)) {
      rules = new TokenRules([tokenRules as TokenRule]);
    } else if (tokenRules) {
      rules = new TokenRules(tokenRules as TokenRule[]);
    } else {
      rules = new TokenRules([]);
    }

    this.inside[token as keyof Grammar] = format(
      rules
    ) as any;
  }
}

export class TokenRules extends Array<TokenRule> {
  constructor(rules: TokenRule[]) {
    super(rules.length);

    console.log(rules);
    rules.forEach((rule) => {
      this.push(rule);
    });
  }

  addRuleBefore(
    newRule: TokenRule,
    aliasOrIndex: string | number = -1
  ) {
    let index = aliasOrIndex;

    if (aliasOrIndex === -1) {
      this.unshift(newRule);
    } else if (typeof aliasOrIndex === "string") {
      index = this.findIndex((rule) => {
        return (
          rule.alias === aliasOrIndex ||
          (Array.isArray(rule.alias) &&
            rule.alias.includes(aliasOrIndex))
        );
      });
    }

    const oldRules = [...this];
    let ruleIndex = 0;
    oldRules.forEach((rule) => {
      if (ruleIndex === index) {
        this[ruleIndex] = newRule;
        ruleIndex++;
      }

      const isTheEnd = ruleIndex >= this.length;
      if (isTheEnd) {
        this.push(rule);
      } else {
        this[ruleIndex] = rule;
      }

      ruleIndex++;
    });
  }

  addRuleAfter(
    newRule: TokenRule,
    aliasOrIndex: string | number = -1
  ) {
    let index = aliasOrIndex;

    if (aliasOrIndex === -1) {
      this.push(newRule);
    } else if (typeof aliasOrIndex === "string") {
      index = this.findIndex((rule) => {
        return (
          rule.alias === aliasOrIndex ||
          (Array.isArray(rule.alias) &&
            rule.alias.includes(aliasOrIndex))
        );
      });
    }

    const oldRules = [...this];
    let ruleIndex = 0;
    oldRules.forEach((rule) => {
      let isTheEnd = ruleIndex >= this.length;
      if (isTheEnd) {
        this.push(rule);
      } else {
        this[ruleIndex] = rule;
      }

      ruleIndex++;
      isTheEnd = ruleIndex >= this.length;
      const isTheTarget = ruleIndex - 1 === index;

      if (isTheEnd && isTheTarget) {
        this.push(newRule);
        ruleIndex++;
      } else if (isTheTarget) {
        this[ruleIndex] = newRule;
        ruleIndex++;
      }
    });
  }

  addTokenInsideRule(
    aliasOrIndex: string | number,
    token: GrammarTokens,
    format: (rules: TokenRules) => TokenRules
  ) {
    this.forEach((rule, index) => {
      const searchByAlias =
        typeof aliasOrIndex === "string";
      const isTheTarget = searchByAlias
        ? rule.alias === aliasOrIndex ||
          (Array.isArray(rule.alias) &&
            rule.alias.includes(aliasOrIndex))
        : index === aliasOrIndex;

      if (isTheTarget) {
        rule.addTokenInside(token, format);
        this[index] = rule;
      }
    });
  }

  replaceRule(
    aliasOrIndex: string | number,
    newRule: TokenRule
  ) {
    this.forEach((rule, index) => {
      const searchByAlias =
        typeof aliasOrIndex === "string";
      const isTheTarget = searchByAlias
        ? rule.alias === aliasOrIndex ||
          (Array.isArray(rule.alias) &&
            rule.alias.includes(aliasOrIndex))
        : index === aliasOrIndex;

      if (isTheTarget) {
        this[index] = newRule;
      }
    });
  }
}

type HighlightCustomLanguageOptions<
  AllAlias extends string
> = {
  init?: Grammar | HighlightLanguageComponent;
  title?: string;
  aliasTitles?: {
    [Key in AllAlias]?: string;
  };
};

export class HighlightCustomLanguage<
  Name extends string,
  Alias extends string
> {
  public readonly __type = "custom";
  public name: Name;
  public title?: string;
  public alias: Alias[] = [];
  public aliasTitles?: {
    [Key in Alias]?: string;
  };

  public grammar: Grammar = {};

  constructor(
    languageName: Name,
    alias: Alias[],
    {
      init,
      aliasTitles,
      title,
    }: HighlightCustomLanguageOptions<Alias> = {}
  ) {
    this.name = languageName;
    this.alias = alias ?? [];
    this.aliasTitles = aliasTitles ?? {};
    this.title = title;

    if (typeof init === "string") {
      this.grammar = Prism.languages.extend(
        init,
        {}
      ) as Grammar;
    } else if (typeof init === "object") {
      this.grammar = init;
    }
  }

  token(
    token: GrammarTokens,
    format: (rules: TokenRules) => TokenRules
  ) {
    const tokenRules = this.grammar[token as keyof Grammar];

    let rules: TokenRules;
    if (!Array.isArray(tokenRules)) {
      rules = new TokenRules([tokenRules as TokenRule]);
    } else if (tokenRules) {
      rules = new TokenRules(tokenRules as TokenRule[]);
    } else {
      rules = new TokenRules([]);
    }

    this.grammar[token as keyof Grammar] = format(
      rules
    ) as any;
  }

  private cleanObject(object: any) {
    Object.keys(object).forEach((key) => {
      if (object[key] === undefined) {
        delete object[key];
      } else if (Array.isArray(object[key])) {
        object[key] = [...object[key]].map((value: any) => {
          return value;
        });
      }
    });

    return object;
  }

  getGrammar() {
    const gramar = { ...this.grammar };
    return this.cleanObject(gramar);
  }

  load() {
    (typeof global !== "undefined"
      ? global
      : window
    ).Prism = Prism;

    console.log(this.grammar);
    //console.log(this.getGrammar());
    if (typeof global !== "undefined") {
      //global.Prism.languages[this.name] = this.getGrammar();
    } else {
      //window.Prism.languages[this.name] = this.getGrammar();
    }

    console.log("called", this.grammar.keyword);
  }
}
