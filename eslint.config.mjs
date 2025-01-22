import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];

module.exports = {
  env: {
      browser: true,
      es2021: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:prettier/recommended', 
  ],
  parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
  },
  rules: {
      'prettier/prettier': 'error', 
  },
};