import type { Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  camelcase: `error`,
  'no-await-in-loop': `error`,
  'no-param-reassign': [
    `error`,
    {
      ignorePropertyModificationsFor: [`state`],
      props: true,
    },
  ],
  'no-restricted-imports': [
    `error`,
    {
      patterns: [
        {
          group: [`../*`],
          message: `Usage of relative parent imports is not allowed.`,
        },
        {
          group: [`./*`],
          message: `Usage of relative current dir imports is not allowed.`,
        },
      ],
    },
  ],
  'no-restricted-syntax': [`error`, `ForInStatement`, `LabeledStatement`, `WithStatement`],
  'no-shadow': `error`,
  'no-use-before-define': `error`,
  'no-useless-constructor': `warn`,

  // handled by stylistic plugin
  quotes: `off`,
}

export default rules
