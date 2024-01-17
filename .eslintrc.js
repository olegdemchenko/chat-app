module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:node/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  settings: {
    node: {
      tryExtensions: [".js", ".json", ".node", ".ts"],
    },
  },
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
  },
};