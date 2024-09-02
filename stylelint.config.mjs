/** @type {import('stylelint').Config} */
const config = {
  extends: ["stylelint-config-recommended", "stylelint-config-recess-order"],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-declaration-use-variable",
    "stylelint-prettier",
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "plugin/declaration-block-no-ignored-properties": true,
    "prettier/prettier": true,
  },
};

export default config;
