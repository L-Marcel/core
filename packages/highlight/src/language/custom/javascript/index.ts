import { HighlightCustomLanguage, TokenRule } from "..";

const javascript = new HighlightCustomLanguage(
  "javascript",
  ["js"],
  {
    init: "javascript",
  }
);

javascript.token("keyword", (rules) => {
  const newControlFlowRule = new TokenRule(
    /\b(?<!\.)(?:await |break\b|catch[\s]*\(|continue\b|do\b|else\b|finally\b|for\b|if\b|return\b|switch\b|throw\b|try\b|while\b|yield\b)/,
    {
      alias: "control-flow",
    }
  );

  rules.replaceRule("control-flow", newControlFlowRule);

  return rules;
});

export { javascript };
