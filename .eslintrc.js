const packageJson = require('./package.json');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/react",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 8,
    sourceType: "module"
  },
  plugins: ["import", "jsx-a11y", "prettier", "react"],
  rules: {
    "no-undef": 2,
    "no-unused-vars": [
      2,
      {
        args: "none",
        vars: "all",
        varsIgnorePattern: "hJSX"
      }
    ],
    "prettier/prettier": [
      2,
      {
        printWidth: 80
      }
    ],
    "react/display-name": 0,
    "react/prop-types": 0
  },
  settings: {
    react: {
      version: packageJson.dependencies.react
    }
  }
};
