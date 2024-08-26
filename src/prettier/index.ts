/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import('@trivago/prettier-plugin-sort-imports').PluginConfig} */
const config = {
  arrowParens: `always`,
  bracketSpacing: true,
  printWidth: 100,
  semi: false,
  singleQuote: true,
  trailingComma: `all`,

  // prettier-plugin-sort-imports
  importOrder: [`^~/(.*)$`, `^@/(.*)$`, `^[./]`],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: [`typescript`, `jsx`, `decorators-legacy`],

  plugins: [`@trivago/prettier-plugin-sort-imports`, `prettier-plugin-tailwindcss`],
}

export default config
