/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "!./node_modules",
    "!./turbo",
  ],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  corePlugins: {
    preflight: false,
  },
  variants: {
    extends: {
      scrollbar: ["dark"],
    },
  },
};
