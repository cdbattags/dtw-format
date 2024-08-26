import type { Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  'jsx-a11y/anchor-is-valid': [
    `error`,
    {
      aspects: [`invalidHref`, `preferButton`],
      components: [`Link`],
      specialLink: [`hrefLeft`, `hrefRight`],
    },
  ],
}

export default rules
