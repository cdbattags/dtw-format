import type { Linter } from 'eslint'

import rules from '@/rules'

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
  rules,
  ignorePatterns: [`prettier.config.js`, `.eslintrc.cjs`, `lib/**/*`],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [`.ts`, `.tsx`],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        project: [`**/*/tsconfig.json`, `**/*/tsconfig.*.json`],
      },
    },
  },
}

export default config
