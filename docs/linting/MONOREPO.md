---
id: monorepo
title: Monorepo 配置
sidebar_label: Monorepo Configuration
---
如果你使用 monorepo，这篇文章将帮助你理解如何设置类型化的检测。
如果你不想使用类型化检测，那么你可以停止阅读 - 你不需要做任何特殊的事情。

首先要回答的问题是你的 `tsconfig.json` 如何设置？你应该从下面两个中选一个设置：

1. `tsconfig.json` 在每一个项目中 (在根目录还有一个可选的)
2. 根目录的 `tsconfig.json`

## 在 `tsconfig.json` 每一个子项目中 (在根目录还有一个可选的)

在我们之前的 [带类型信息的检测](./TYPED_LINTING.md)文章中, 我们给你展示了如何使用  `parserOptions.project`选项(参数) 来设置类型化的检测在配置中。这个选项接收一个相对路径的数组，允许你指定每一个`tsconfig.json`在你的 monorepo 中使用。 对于拥有太多项目包的人, 你还可以提供一个[glob path](https://github.com/isaacs/node-glob/blob/f5a57d3d6e19b324522a3fa5bdd5075fd1aa79d1/README.md#glob-primer).

例如, this is how we specify all of our `tsconfig.json` within this repo.

```js title=".eslintrc.js"
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    // Remove this line
    project: ['./tsconfig.json'],
    // Add this line
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
};
```

If you're looking for an example of what the `.eslintrc.js`, and referenced `tsconfig.json` might look like in a real example, look no further than this very repo. We're a multi-package monorepo that uses one `tsconfig.json` per package, that also uses typed linting.

### Important note regarding large (> 10) multi-package monorepos

We've had reports that for sufficiently large and/or interdependent projects, you may run into OOMs using this approach. Our advice is to set it up and test first, as there are very few cases that trigger this OOM. We are in the process of investigating solutions with the help of the TypeScript team.

See [#1192](https://github.com/typescript-eslint/typescript-eslint/issues/1192) for more information and discussion.

If you do run into an OOM, please comment on the above issue and let us know about your repo - the more information we have, the better. As an interim workaround, consider one of the following:

- Switching to one root `tsconfig.eslint.json` (see below)
- Using a shell script to only lint one package at a time, using your existing config above.

## One root `tsconfig.json`

If you've only got one, you should inspect the `include` paths. If it doesn't include all of your files, then we won't be able to lint them. In this instance, you have two options: add them in to the `include`, or create a new config.

The former doesn't always work for everyone if they've got a complex build, as adding more paths (like test paths) to `include` could break the build.
In those cases we suggest creating a new config called `tsconfig.eslint.json`, that looks something like this:

```jsonc title="tsconfig.eslint.json"
{
  // extend your base config to share compilerOptions, etc
  "extends": "./tsconfig.json",
  "compilerOptions": {
    // ensure that nobody can accidentally use this config for a build
    "noEmit": true
  },
  "include": [
    // whatever paths you intend to lint
    "src",
    "test",
    "tools"
  ]
}
```

Ensure you update your `.eslintrc.js` to point at this new config file.

## Troubleshooting

If you're having problems getting this working, please have a look at our [Troubleshooting FAQ](./TROUBLESHOOTING.md).
