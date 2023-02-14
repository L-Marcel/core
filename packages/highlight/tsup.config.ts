import { defineConfig } from "tsup";

export default defineConfig({
  splitting: false,
  injectStyle: true,
  clean: false,
  dts: true,
  legacyOutput: true,
  entry: {
    index: "src/index.tsx",
  },
});
