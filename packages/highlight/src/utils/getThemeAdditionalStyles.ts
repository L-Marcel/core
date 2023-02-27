import { DefaultThemes } from "../themes";
import { HighlightTheme } from "../themes/custom";

export function getThemeAdditionalStyles(
  theme: keyof DefaultThemes
): HighlightTheme["styles"] {
  switch (theme) {
    case "dracula":
      return [
        {
          types: ["class-name"],
          style: {
            color: "rgb(231, 240, 130)",
            fontStyle: "italic",
          },
        },
        {
          types: ["maybe-class-name"],
          style: {
            fontStyle: "italic",
          },
        },
        {
          types: ["attr-name"],
          languages: ["jsx", "tsx"],
          style: {
            fontStyle: "italic",
          },
        },
        {
          types: ["atrule", "important"],
          style: {
            color: "#f877c6",
          },
        },
        {
          types: ["punctuation"],
          languages: ["markdown"],
          style: {
            color: "#cf4b9d",
          },
        },
        {
          types: ["punctuation"],
          languages: ["yaml"],
          style: {
            color: "#ac8af4",
          },
        },
        {
          types: ["operator"],
          style: {
            color: "#d0bff7",
            fontStyle: "italic",
          },
        },
        {
          types: ["symbol"],
          style: {
            color: "#ac8af4",
            fontStyle: "italic",
          },
        },
        {
          types: ["punctuation"],
          languages: ["makefile"],
          style: {
            color: "#9471df",
          },
        },
        {
          types: ["builtin"],
          languages: ["makefile"],
          style: {
            color: "#f877c6",
          },
        },
        {
          types: ["property", "property-declaration"],
          style: {
            color: "#bd93f9",
          },
        },
        {
          types: ["number", "content"],
          style: {
            color: "#aff877",
          },
        },
        {
          types: ["unit"],
          style: {
            color: "#7cc544",
            fontStyle: "italic",
          },
        },
        {
          types: ["hexcode"],
          style: {
            color: "#aff877",
            fontStyle: "italic",
          },
        },
        {
          types: ["banners"],
          languages: ["myBanner"], 
          style: {
            color: "hsl(286, 60%, 67%)"
          }
        },
        {
          types: ["banner-end"],
          languages: ["myBanner"], 
          style: {
            color: "hsl(133, 45%, 53%)"
          }
        }
      ];
    case "vsDark":
      return [
        {
          types: ["unit"],
          style: {
            color: "rgb(160, 189, 145)",
            fontStyle: "italic",
          },
        },
        {
          types: ["hexcode"],
          style: {
            color: "rgb(181, 206, 168)",
            fontStyle: "italic",
          },
        },
        {
          types: ["important", "punctuation"],
          languages: ["markdown"],
          style: {
            color: "rgb(206, 145, 120)",
            fontWeight: "bold",
          },
        },
        {
          types: ["symbol"],
          style: {
            color: "rgb(181, 206, 168)",
          },
        },
        {
          types: ["content"],
          style: {
            color: "rgb(220, 220, 170)",
          },
        },
        {
          types: ["banners"],
          languages: ["myBanner"], 
          style: {
            color: "hsl(286, 60%, 67%)"
          }
        },
        {
          types: ["banner-end"],
          languages: ["myBanner"], 
          style: {
            color: "hsl(133, 45%, 53%)"
          }
        }
      ];
    case "vsLight":
      return [
        {
          types: ["unit"],
          style: {
            color: "rgb(8, 109, 72))",
            fontStyle: "italic",
          },
        },
        {
          types: ["hexcode"],
          style: {
            color: "rgb(9, 134, 88)",
            fontStyle: "italic",
          },
        },
        {
          types: ["important", "punctuation"],
          languages: ["markdown"],
          style: {
            color: "rgb(163, 21, 21)",
            fontWeight: "bold",
          },
        },
        {
          types: ["symbol"],
          style: {
            color: "rgb(8, 109, 72))",
          },
        },
        {
          types: ["content"],
          style: {
            color: "rgb(207, 124, 7)",
          },
        },
        {
          types: ["banners"],
          languages: ["myBanner"], 
          style: {
            color: "hsl(286, 60%, 67%)"
          }
        },
        {
          types: ["banner-end"],
          languages: ["myBanner"], 
          style: {
            color: "hsl(133, 45%, 53%)"
          }
        }
      ];
    default:
      return [];
  }
}
