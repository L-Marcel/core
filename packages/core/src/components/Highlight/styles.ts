import { styled } from "@stitches/react";
import tw from "twin.macro";

export const HighlightContainer = styled("div", {
  ...tw`
    py-4
    bg-zinc-800
    rounded-md
  `,

  "code, kdb, samp, pre": {
    ...tw`
      font-code
    `
  },

  ".token-line": {
    ...tw`
      pr-10
      pl-4
    `
  },

  ".token-line:has(.deleted:not(:empty))": {
    backgroundColor: "rgb(209, 105, 105, .2)",
  },

  ".token-line:has(.inserted:not(:empty))": {
    backgroundColor: "rgb(181, 206, 168, .2)",
  }
});