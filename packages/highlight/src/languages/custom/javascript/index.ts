import { HighlightCustomLanguage } from "..";

const javascript = new HighlightCustomLanguage(
  "javascript",
  [],
  {
    grammar: "javascript",
  }
);

const jsx = new HighlightCustomLanguage("jsx", [], {
  grammar: "jsx",
});

javascript.replaceTokenRule(
  "keyword",
  "control-flow",
  (oldToken) => {
    return {
      ...oldToken,
      pattern:
        /\b(?<!\.)(?:(await(?= |\()|break(?=\b)|catch(?=[\s]*\()|continue(?=\b)|do(?=\b)|else(?=\b)|finally(?=\b)|for(?=\b)|if(?=\b)|return(?=\b)|switch(?=\b)|throw(?=\b)|try(?=\b)|while(?=\b)|yield(?=\b)))/,
      alias: "control-flow",
    };
  }
);

jsx.replaceTokenRule(
  "keyword",
  "control-flow",
  (oldToken) => {
    return {
      ...oldToken,
      pattern:
        /\b(?<!\.)(?:(await(?= |\()|break(?=\b)|catch(?=[\s]*\()|continue(?=\b)|do(?=\b)|else(?=\b)|finally(?=\b)|for(?=\b)|if(?=\b)|return(?=\b)|switch(?=\b)|throw(?=\b)|try(?=\b)|while(?=\b)|yield(?=\b)))/,
      alias: "control-flow",
    };
  }
);

export { javascript, jsx };
