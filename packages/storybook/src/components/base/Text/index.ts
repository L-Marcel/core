import { tf } from "tailwind-factory";

export const Heading = tf("h1", `
  font-inter
  text-slate-100
`, {
  variants: {
    size: {
      base: `
        text-3xl
      `,
      md: `
        text2xl
      `,
      sm: `
        text-xl
      `
    }
  },
  defaultVariants: {
    size: "base"
  }
});

export const Text = tf("p", `
  font-inter
  text-slate-100
`, {
  variants: {},
  defaultVariants: {}
});