import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-shadow": "error",
      "no-duplicate-imports": "error",
    },
  },
];
