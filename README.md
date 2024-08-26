# @dtw/format

Going off of "[Supporting Dual Package for CJS and ESM in TypeScript Library](https://medium.com/ekino-france/supporting-dual-package-for-cjs-and-esm-in-typescript-library-b5feabac1357)".

The purpose of this repository is to have a single source of truth for all JavaScript/TypeScript libraries I use for:

- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## how to configure

.eslintrc.cjs

```ts
const config = require('@dtw/format/cjs/config.js').default

module.exports = config
```

prettier.config.js

```ts
import config from '@dtw/format/esm/prettier/index.js'

export default config
```


