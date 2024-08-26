import type { Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  'drizzle/enforce-delete-with-where': [
    `error`,
    {
      drizzleObjectName: [`db`, `ctx.db`],
    },
  ],
  'drizzle/enforce-update-with-where': [
    `error`,
    {
      drizzleObjectName: [`db`, `ctx.db`],
    },
  ],
}

export default rules
