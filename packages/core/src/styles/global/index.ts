import { globalCss } from "@stitches/react";
import tw, { theme, globalStyles } from "twin.macro";

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
};

export function putGlobalStyles() {
  globalCss(customStyles)();
  /* eslint-disable @typescript-eslint/no-explicit-any */
  globalCss(globalStyles as Record<any, any>)();
  /* eslint-enable @typescript-eslint/no-explicit-any */
}