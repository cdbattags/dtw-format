import type { Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  // no curly stuff by accident!
  'no-smart-quotes/no-smart-quotes': `error`,
}

export default rules
