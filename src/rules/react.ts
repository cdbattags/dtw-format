import type { Linter } from 'eslint'

const rules: Linter.RulesRecord = {
  'react/function-component-definition': [
    `error`,
    {
      namedComponents: `arrow-function`,
      unnamedComponents: `arrow-function`,
    },
  ],

  // make sure .tsx or .jsx if it has the syntax
  'react/jsx-filename-extension': `error`,

  // make sure props are on a new line when they're multiline
  'react/jsx-first-prop-new-line': [`error`, `multiline`],

  // 1 prop per line
  'react/jsx-max-props-per-line': [
    `error`,
    {
      maximum: 1,
      when: `multiline`,
    },
  ],

  // don't spread because you can pass extra than necessary
  'react/jsx-props-no-spreading': `error`,

  // make sure the type exists for each property
  'react/no-unknown-property': `error`,

  // warn if a prop is unused
  'react/no-unused-prop-types': `warn`,

  // make sure prop types are defined
  'react/prop-types': `error`,

  // don't need to import react over and over
  'react/react-in-jsx-scope': `off`,

  // require the default props
  'react/require-default-props': `error`,
}

export default rules
