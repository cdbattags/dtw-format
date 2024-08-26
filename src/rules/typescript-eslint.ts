import type { Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // Array<T> not T[] always
  '@typescript-eslint/array-type': [`error`, { default: `generic` }],

  // always use interface for object types
  '@typescript-eslint/consistent-type-definitions': [`error`, `interface`],

  // using the `type` keyword for imports
  '@typescript-eslint/consistent-type-imports': [
    `warn`,
    {
      fixStyle: `inline-type-imports`,
      prefer: `type-imports`,
    },
  ],

  // make sure to await
  '@typescript-eslint/no-misused-promises': [
    `error`,
    {
      checksVoidReturn: {
        attributes: false,
      },
    },
  ],

  // warn for unused but ignore `_something`
  '@typescript-eslint/no-unused-vars': [
    `warn`,
    {
      argsIgnorePattern: `^_`,
    },
  ],

  // allow async to return unawaited promise
  '@typescript-eslint/require-await': `off`,
}

export default rules
