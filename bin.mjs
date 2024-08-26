#!/usr/bin/env node

import { $, chalk } from 'zx'

try {
  const currentFolder = (await $`pwd`).stdout.trim()
  const folder = `${currentFolder}/tmp`

  console.log(chalk.yellow(`Configuring ${folder}`))

  await $`rm -rf ${folder}`
  console.log(chalk.yellow(`Deleted contents of ${folder}`))

  await $`mkdir ${folder}`

  await $`curl -o ${folder}/.gitignore --fail --show-error --silent --location https://raw.github.com/github/gitignore/master/Node.gitignore`

  await $`cp -r lib/to-copy/. ${folder}/.`

  console.log(chalk.green('Finished configuring current folder'))
} catch (error) {
  console.error(chalk.red('Configuring repo failed:'), chalk.red(error))
}
