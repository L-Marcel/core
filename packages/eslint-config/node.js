const { ESLint } = require("eslint");
const { rules: defaultRules } = require("./.eslintrc.json");

/** @type {ESLint.ConfigData}*/
module.exports = {
  env: {
    node: true,
    es2021: true
  },
  root: true,
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-prettier"
  ],
  rules: {
    ...defaultRules
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}
