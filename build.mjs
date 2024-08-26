#!/usr/bin/env zx

import { $, chalk } from 'zx'
import esbuild from 'esbuild'
import fg from 'fast-glob'

const entryPoints = fg.sync(['src/**/*.[tj]s'])

const buildESM = async () => {
    try {
        await esbuild.build({
            bundle: true,
            entryPoints,
            outdir: 'lib/esm',
            platform: 'node',
            sourcemap: true,
            target: 'esnext',
            format: 'esm',
        })

        await $`echo '{"type": "module"}' > lib/esm/package.json`
        console.log(chalk.green('ESM compilation successful'))
    } catch (error) {
        console.error(chalk.red('ESM compilation failed:'), chalk.red(error.message))
    }
}

const buildCJS = async () => {
    try {
        await esbuild.build({
            bundle: true,
            entryPoints,
            outdir: 'lib/cjs',
            platform: 'node',
            sourcemap: true,
            target: 'esnext',
            format: 'cjs',
        })

        await $`echo '{"type": "commonjs"}' > lib/cjs/package.json`
        console.log(chalk.green('CJS compilation successful'))
    } catch (error) {
        console.error(chalk.red('CJS compilation failed:'), chalk.red(error.message))
    }
}

try {
    await $`rm -rf lib`

    await $`npx tsc --declaration --emitDeclarationOnly --outDir lib/esm`
    await buildESM()

    await $`npx tsc --declaration --emitDeclarationOnly --outDir lib/cjs`
    await buildCJS()

    await $`cp tsconfig.dtw.json lib/.`

    console.log(chalk.green('Overall compilation successful'))
} catch (error) {
    console.error(chalk.red('Overall compilation failed:'), chalk.red(error))
}
