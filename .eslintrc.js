module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
  env: {
    es6: true
  },
  rules: {
    "ecmaFeatures.classes": true,
    "global-require": "off",
    "no-console": "off",
    "react/jsx-filename-extension": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "jsx-a11y/anchor-is-valid": false,
    "react/no-unescaped-entities": "off"
  },
  ecmaFeatures: {
    jsx: true
  }
};
