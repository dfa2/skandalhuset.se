import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      }
    }
  },
  {
    // Nuxt 3-specific fixes
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      globals: {
        useAsyncData: "readonly",
        queryContent: "readonly",
        defineNuxtConfig: "readonly",
        useRoute: "readonly",
        useFetch: "readonly",
        useState: "readonly",
        useNuxtApp: "readonly",
        useLazyAsyncData: "readonly",
        definePageMeta: "readonly",
      }
    },
    rules: {
      "no-undef": "off" // Fixes 'useAsyncData' is not defined
    }
  }
];

