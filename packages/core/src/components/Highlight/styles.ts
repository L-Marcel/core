import { styled } from "@stitches/react";
import tw from "twin.macro";
import { Button } from "../Button/index";

export const HighlightContainer = styled("div", {
  ...tw`
    bg-gray-600
    rounded-lg
    flex
    relative
  `,

  "& > pre": {
    ...tw`
      py-2
      z-10
    `,
  },

  "code, kdb, samp, pre": {
    ...tw`
      font-code
    `,
  },

  ".token-line": {
    ...tw`
      pr-10
      pl-2
    `,
  },

  ".token-line:has(.deleted:not(:empty))": {
    backgroundColor: "rgb(209, 105, 105, .2)!important",
    ".deleted:not(:empty)": {
      color: "rgb(209, 154, 102)!important",
    },
  },

  ".token-line:has(.inserted:not(:empty))": {
    backgroundColor: "rgb(181, 206, 168, .2)!important",
    ".inserted:not(:empty)": {
      color: "rgb(152, 195, 121)!important",
    },
  },
});

export const HighlightNumbers = styled("div", {
  ...tw`
    grid
    py-2
    gap-0
    rounded-l-lg
    min-w-[1.6rem]
    border-r-[3px]
    border-solid
    border-primary-500
    bg-gray-700/70
    grid-rows-[repeat(var(--number-of-lines-in-code),_24px)]
  `,
});

export const HighlightNumber = styled("p", {
  ...tw`
    text-zinc-500
    font-code
    px-1.5
    text-sm
    pt-[2.5px]
    h-[24px]
    select-none
  `,
});

export const CopyButton = styled(Button, {
  ...tw`
    absolute
    right-0
    top-[.4rem]
    text-xl
    z-40
    rounded-r-none
    pl-1
    pr-1.5
    py-1
    text-primary-500
    bg-gray-500
    hover:bg-primary-600
    hover:text-gray-500
    hover:cursor-pointer
    focus:outline-none
    focus:ring-0
    hover:bg-primary-600
    hover:text-gray-500
  `,
});
