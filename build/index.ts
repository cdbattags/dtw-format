import esbuild, { type BuildOptions } from 'esbuild'
import { nodeExternalsPlugin } from 'esbuild-node-externals'
import fg from 'fast-glob'
import { $, chalk } from 'zx'

const srcEntries = fg.sync([`src/**/*.[tj]s`])
const binEntries = fg.sync([`bin/**/*.[tj]s`])

const build = async ({
  format,
  entryPoints,
  outdir,
  outbase,
  plugins,
  external,
}: Pick<
  BuildOptions,
  `format` | `entryPoints` | `outdir` | `outbase` | `plugins` | `external`
>) => {
  await esbuild.build({
    bundle: true,
    entryPoints,
    outdir,
    outbase,
    platform: `node`,
    sourcemap: true,
    target: `esnext`,
    format,
    plugins,
    external,
  })
}

try {
  await $`rm -rf lib`
  console.log(chalk.green(`Deleted all content in lib`))

  // build ESM src entries
  await $`npx tsc --declaration --emitDeclarationOnly --outDir lib/esm`
  await build({
    format: `esm`,
    entryPoints: srcEntries,
    outdir: `lib/esm`,
    outbase: `./`,
  })
    .then(() => {
      console.log(chalk.green(`ESM compilation successful`))
    })
    .catch((e: Error) => {
      console.error(chalk.red(`ESM compilation failed:`), chalk.red(e.message))
    })

  // build CJS src entries
  await $`npx tsc --declaration --emitDeclarationOnly --outDir lib/cjs`
  await build({
    format: `cjs`,
    entryPoints: srcEntries,
    outdir: `lib/cjs`,
    outbase: `./`,
  })
    .then(() => console.log(chalk.green(`CJS compilation successful`)))
    .catch((e: Error) => {
      console.error(chalk.red(`CJS compilation failed:`), chalk.red(e.message))
    })

  // build ESM bin entries
  await build({
    format: `esm`,
    entryPoints: binEntries,
    outdir: `lib/esm/bin`,
    plugins: [nodeExternalsPlugin()],
    external: [`zx`],
  })
    .then(() => console.log(chalk.green(`ESM bin compilation successful`)))
    .catch((e: Error) => {
      console.error(chalk.red(`ESM bin compilation failed:`), chalk.red(e.message))
    })

  await $`echo '{"type": "module"}' > lib/esm/package.json`
  await $`echo '{"type": "commonjs"}' > lib/cjs/package.json`

  await $`cp tsconfig.dtw.json lib/.`
  console.log(chalk.green(`Copied tsconfig to lib`))

  await $`cp -r to-copy lib/.`
  await $`cp -r .vscode lib/to-copy/.`
  await $`cp .editorconfig lib/to-copy/.`
  await $`cp tsconfig.json lib/to-copy/.`

  console.log(chalk.green(`Overall compilation successful`))
} catch (error) {
  console.error(chalk.red(`Overall compilation failed:`), chalk.red(error))
}
