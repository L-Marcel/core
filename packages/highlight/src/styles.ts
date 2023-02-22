import { tf } from "tailwind-factory";

export const HighlightContainer = tf(
  "div",
  `
  ring-current
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
  flex
  h-min
  m-0
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
  pb-[0.6rem]
  gap-0
  min-w-min
  border-solid
  border-0
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
  leading-[1.5]
  mx-2
  text-sm
  my-0
  pt-[2.5px]
  h-[24px]
  select-none
`
);

export const Content = tf(
  "div",
  `
  w-max
  min-w-max
  relative
  flex
`,
  {
    variants: {},
    defaultVariants: {},
  }
);

export const Textarea = tf(
  "textarea",
  `
  absolute
  text-base
  text-transparent
  left-0
  whitespace-nowrap
  h-[calc(100%-1rem)]
  min-h-[1.5rem]
  min-w-[calc(100%-2.5rem-0.75rem)]
  overflow-hidden
  bg-transparent
  !outline-none
  !border-none
  m-0
  font-code
  py-2
  z-[11]
  pr-10
  pl-3
`,
  {
    variants: {},
    defaultVariants: {},
  }
);
