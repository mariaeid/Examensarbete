module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  plugins: ["react"],
  rules: {
    "max-len": [
      "error",
      {
        code: 100
      }
    ],
    semi: ["off"],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["off"],
    "no-return-assign": ["off"],
    "react/prefer-stateless-function": ["off"]
  }
};
