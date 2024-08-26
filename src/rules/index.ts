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

const rules: Linter.RulesRecord = {
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
}

export default rules
