import { defineConfig } from "tsup";

export default defineConfig({
  splitting: false,
  injectStyle: true,
  clean: false,
  dts: true,
  entry: {
    index: "src/index.tsx",
  },
});
