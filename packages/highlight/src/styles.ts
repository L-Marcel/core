import { tf } from "tailwind-factory";

export const HighlightContainer = tf(
  "div",
  `
  bg-gray-600
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
  rounded-l-lg
  min-w-[1.6rem]
  border-r-[3px]
  border-solid
  border-primary-500
  bg-gray-700/70
`
);

export const HighlightNumber = tf(
  "p",
  `
  text-zinc-500
  font-code
  px-2
  text-sm
  pt-[2.5px]
  h-[24px]
  select-none
`
);
