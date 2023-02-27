import { HighlightCustomLanguage } from "..";

const banner = new HighlightCustomLanguage(
  "myBanner",
  [],
  {
    grammar: {
      "banners": [{
        pattern: /\btitle\b/g,
        alias: "banner-title"
      }, {
        pattern: /\bsubtitle\b/g,
        alias: "banner-subtitle"
      }, {
        pattern: /\bend\b/g,
        alias: "banner-end"
      }]
    },
  }
);

export { banner };