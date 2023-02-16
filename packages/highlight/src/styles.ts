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

export const HighlightPreContainer = tf(
  "pre",
  `
  w-full
  overflow-y-hidden
  overflow-x-auto
  scrollbar-thin
  scrollbar-h-[4px]

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
  py-2
  gap-0
  min-w-[1.6rem]
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
  text-zinc-500
  font-code
  mx-2
  text-sm
  pt-[2.5px]
  h-[24px]
  select-none
`
);
