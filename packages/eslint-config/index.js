module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "tailwindcss",
    "react",
    "@typescript-eslint"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    indent: [
      "error",
      2
    ],
    "linebreak-style": 0,
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "always"
    ]
  }
}
