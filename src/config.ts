import type { Linter } from 'eslint'

import drizzleRules from '@/rules/drizzle'
import eslintRules from '@/rules/eslint'
import importRules from '@/rules/import'
import jsxA11yRules from '@/rules/jsx-a11y'
import noSmartQuotesRules from '@/rules/no-smart-quotes'
import reactRules from '@/rules/react'
import stylisticRules from '@/rules/stylistic'
import typescriptEslintRules from '@/rules/typescript-eslint'
import unicornRules from '@/rules/unicorn'
import unusedImportsRules from '@/rules/unused-imports'

const config: Linter.Config = {
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: `latest`,
    sourceType: `module`,
    project: true,
  },
  globals: {
    Atomics: `readonly`,
    ArrayBuffer: `readonly`,
    JSON: `readonly`,
    SharedArrayBuffer: `readonly`,
  },
  plugins: [
    `@stylistic/ts`,
    `@typescript-eslint/eslint-plugin`,
    `drizzle`,
    `editorconfig`,
    `import`,
    `jsx-a11y`,
    `no-smart-quotes`,
    `react-hooks`,
    `react`,
    `unicorn`,
    `unused-imports`,
  ],
  extends: [
    `next/core-web-vitals`,
    `plugin:@typescript-eslint/recommended-type-checked`,
    `plugin:@typescript-eslint/stylistic-type-checked`,
    `plugin:editorconfig/noconflict`,
    `plugin:prettier/recommended`,
  ],
  rules: {
    ...drizzleRules,
    ...eslintRules,
    ...importRules,
    ...jsxA11yRules,
    ...noSmartQuotesRules,
    ...reactRules,
    ...stylisticRules,
    ...typescriptEslintRules,
    ...unicornRules,
    ...unusedImportsRules,
  },
  ignorePatterns: [`prettier.config.js`, `.eslintrc.cjs`, `build.mjs`],
}

export default config
