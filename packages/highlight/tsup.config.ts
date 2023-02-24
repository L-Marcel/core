import { defineConfig } from "tsup";

export default defineConfig({
  injectStyle: true,
  bundle: true,
  sourcemap: false,
  clean: false,
  dts: true,
  external: ["react-dom/server"],
  entry: {
    index: "src/index.tsx",
    languages: "src/private/languages.ts",
    tokens: "src/private/tokens.ts",
  },
});
