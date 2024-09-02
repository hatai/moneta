import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import qwikPlugin from "eslint-plugin-qwik";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import perfectionist from "eslint-plugin-perfectionist";

const config = tseslint.config(
  {
    files: ["**/*.@{js,mjs,cjs}"],
    extends: [
      eslint.configs.recommended,
      eslintPluginUnicorn.configs["flat/recommended"],
      perfectionist.configs["recommended-natural"],
    ],
    rules: {
      "prefer-spread": "off",
      "no-case-declarations": "off",
      "no-console": "off",
    },
  },
  {
    files: ["**/*.@{ts,mts,cts}"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginUnicorn.configs["flat/recommended"],
      perfectionist.configs["recommended-natural"],
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "prefer-spread": "off",
      "no-case-declarations": "off",
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-unnecessary-condition": "warn",
    },
  },
  {
    plugins: {
      qwik: qwikPlugin.configs.recommended,
    },
  },
  {
    ignores: [
      "**/*.log",
      "**/.DS_Store",
      "*.",
      ".vscode/settings.json",
      ".history",
      ".yarn",
      "bazel-*",
      "bazel-bin",
      "bazel-out",
      "bazel-qwik",
      "bazel-testlogs",
      "dist",
      "dist-dev",
      "lib",
      "lib-types",
      "etc",
      "external",
      "node_modules",
      "temp",
      "tsc-out",
      "tsdoc-metadata.json",
      "target",
      "output",
      "rollup.config.js",
      "build",
      ".cache",
      ".vscode",
      ".rollup.cache",
      "dist",
      "tsconfig.tsbuildinfo",
      "vite.config.ts",
      "*.spec.tsx",
      "*.spec.ts",
      ".netlify",
      "pnpm-lock.yaml",
      "package-lock.json",
      "yarn.lock",
      "server",
      "src-tauri/",
    ],
  },
  eslintConfigPrettier,
);

export default config;
