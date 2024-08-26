import type { Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  'import/extensions': [
    `error`,
    `ignorePackages`,
    {
      js: `never`,
      jsx: `never`,
      ts: `never`,
      tsx: `never`,
    },
  ],
  'import/no-cycle': [
    `error`,
    {
      ignoreExternal: false,
    },
  ],
  'import/no-relative-packages': `error`,
  'import/prefer-default-export': `warn`,

  // handled by prettier plugin
  'import/order': `off`,
}

export default rules
