module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:import/warnings",
    "plugin:import/errors"
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
    "react/prop-types": "off"
  }
};
