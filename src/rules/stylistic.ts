import type { Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // prefer backticks
  '@stylistic/ts/quotes': [
    `error`,
    `backtick`,
    {
      avoidEscape: true,
    },
  ],
}

export default rules
