#!/usr/bin/env node
import { $, argv, chalk } from 'zx'

import PKG_ROOT from '~/bin/pkg-root'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const { folder = `` } = argv

console.log(chalk.green(`Bin script located at: ${PKG_ROOT}`))

if (folder === ``) {
  console.error(chalk.red(`No folder specified`))
  process.exit(1)
}

try {
  const currentFolder = (await $`pwd`).stdout.trim()
  const folderToConfigure = `${currentFolder}/${folder}`

  console.log(chalk.yellow(`Configuring ${folderToConfigure}`))

  await $`mkdir -p ${folderToConfigure}`

  await $`curl -o ${folderToConfigure}/.gitignore --fail --show-error --silent --location https://raw.github.com/github/gitignore/master/Node.gitignore`

  await $`cp -r ${PKG_ROOT}/../to-copy/. ${folderToConfigure}/.`
  await $`rm -rf ${folderToConfigure}/tsconfig.json`
  await $`mv ${folderToConfigure}/template.tsconfig.json ${folderToConfigure}/tsconfig.json`

  console.log(chalk.green(`Finished configuring current folder`))
} catch (error) {
  console.error(chalk.red(`Configuring repo failed:`), chalk.red(error))
}
