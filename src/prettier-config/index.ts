import type { PluginConfig as PrettierPluginSortImportsOptions } from '@trivago/prettier-plugin-sort-imports'
import type { Config } from 'prettier'
import type { PluginOptions as PrettierPluginTailwindOptions } from 'prettier-plugin-tailwindcss'

const config: Config & PrettierPluginTailwindOptions & PrettierPluginSortImportsOptions = {
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
