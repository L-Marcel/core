import { createStitches, CSS as StitchesCSS } from "@stitches/react";

export const stitches = createStitches({
  prefix: "",
  theme: {},
  utils: {},
});

export type CSS = StitchesCSS<typeof stitches>;
