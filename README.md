# @dtw/format

The purpose of this repository is to have a single source of truth for all JavaScript/TypeScript libraries I use.

These configs are very opinionated using the below frameworks:

- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## how to configure

Install using:

`npx @dtw/format --folder=<where-to-install>`

For scaffolding the current folder, use:

`npx @dtw/format --folder=.`

So getting going looks like this for every new project:

1. `mkdir test-package`
2. `cd test-package`
3. `git init`
4. `npx @dtw/format --folder=.`

The only dependency you should need to add yourself is `typescript` in `dependencies` of your `package.json`:

```json
{
  "name": "test-package",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
    "@dtw/format": "^<latest-version>",
    "typescript": "^<latest-version>"
  }
}
```

This is needed in order to get the `.vscode/settings.json` to point to your package's typescript library:

```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
}
```

## updates to this library

Updates to this library should be as simple as updating through `npm`, `pnpm`, `yarn`, `bun`, `etc`.

I'll tackle the new ESLint configuration format in the future.

## how to run your own TypeScript code

I prefer to use `tsx`. An example `package.json` looks like:

```json
{
  "name": "test-package",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "tsx src/index.ts"
  },
  "dependencies": {
    "@dtw/format": "^<latest-version>",
    "tsx": "^<latest-version>",
    "typescript": "^<latest-version>"
  }
}
```

## why did I make this library?

Most of my new projects require this same scaffolding and they fall out of line with the latest updates if I let them sit too long. Other notable configs I care about are the `@/` and `~/` path aliases and the fact that I can separate them apart from my package imports for much better readability.

Please open an issue with a proposed change if you'd like to debate any of these.

😉 Happy TypeScript coding, folks!


