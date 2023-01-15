/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

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
      screens: {
        xs: {
          max: "340px"
        },
        "2lg": "1170px"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        code: ["Source Code Pro", "monospace"]
      },
      colors: {
        white: {
          50: "#fff",
          100: "#ededf4",
          200: "#dedee8",
          300: "#d2d2db",
          400: "#c7c7cd",
        },
        gray: {
          500: "#3B3937",
          600: "#252322",
          700: "#1B1816"
        },
        primary: {
          50:  "#febdb4",
          100: "#faa195",
          200: "#f58678",
          300: "#ee6d5c",
          400: "#eb513b",
          500: "#EB513B",
          600: "#da3a25",
          700: "#C1412E",
          800: "#ac3a2b",
          900: "#96382c"
        },
        yellow: {
          50: "#ffe3bd",
          100: "#ffd59c",
          200: "#fbc77e",
          300: "#f6b862",
          400: "#f4ac45",
          500: "#eea136",
          600: "#e6982a",
          700: "#db8e21",
          800: "#c58224",
          900: "#af7626"
        },
        purple: {
          50: "#e0e1fa",
          100: "#c6c7f3",
          200: "#adafeb",
          300: "#9698e1",
          400: "#7d80da",
          500: "#7174d1",
          600: "#686bc7",
          700: "#5f62bc",
          800: "#575ab0",
          900: "#5457a0",
          dark: {
            50: "#414689",
            100: "#3a3e6e",
            200: "#333556",
            300: "#292a3f",
            400: "#1d1e2c",
          }
        }
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
  variants: {
    extends: {
      scrollbar: ["dark"]
    }
  }
};
