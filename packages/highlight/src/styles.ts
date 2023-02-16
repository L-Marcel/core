import { tf } from "tailwind-factory";

export const HighlightContainer = tf(
  "div",
  `
  rounded-lg
  flex
  relative
  overflow-hidden
`,
  {
    variants: {
      full: {
        true: `
          w-full
        `,
        false: `
          w-min
        `,
      },
    },
    defaultVariants: {
      full: false,
    },
  }
);

export const HighlightContent = tf(
  "div",
  `
  flex
  relative
  w-full
  overflow-y-hidden
  overflow-x-auto
  scrollbar-thin
  scrollbar-h-[4px]
`
);

export const HighlightPreContainer = tf(
  "pre",
  `
  w-full

  py-2
  z-10
  
  code, kdb, samp, pre {
    font-code
  }

  .token-line {
    pr-10
    pl-3
  }

  highlight-tokens
`,
  {
    variants: {},
    defaultVariants: {},
  }
);

export const HighlightNumbers = tf(
  "div",
  `
  grid
  pt-2
  pb-3
  gap-0
  min-w-min
  border-solid
`,
  {
    variants: {
      showBorder: {
        true: `
        border-r-[3px]
      `,
        false: "",
      },
    },
    defaultVariants: {
      showBorder: true,
    },
  }
);

export const HighlightNumber = tf(
  "p",
  `
  font-code
  mx-2
  text-sm
  pt-[2.5px]
  h-[24px]
  select-none
`
);
