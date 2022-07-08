---
id: type-linting
title: 带类型信息的检测
sidebar_label: Linting with Type Information
---

在幕后， typescript-eslint 解析器使用了 TypeScript 的编译器 API 去解析文件。这意味着我们可以提供检查(lint)规则来访问 TypeScript 所知道你的代码库中所有的类型信息。

充分利用 TypeScript 额外的功能前，你需要对你的配置进行两个小的更改：

```js title=".eslintrc.js"
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  // 从这行开始加
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  // 到这行结束
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // 添加下面这行
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
};
```

详解:

- `parserOptions.tsconfigRootDir` 告诉解析器项目根目录的绝对路径。
- `parserOptions.project` 告诉解析器项目中的`tsconfig.json`的相对路径(相对于`parserOptions.tsconfigRootDir`)。
  - 如果你的项目是多项目包的 monorepo 请看 [我们的文档有关 monorepo 的配置 ](./MONOREPO.md).
- `plugin:@typescript-eslint/recommended-requiring-type-checking` 是我们推荐的另一个配置。它包含明确必要的类型信息规则。

完成后，运行与之前相同的 lint 命令。

<!-- You will see new rules reporting errors based on type information! -->

你将看到报告错误基于类型信息的新规则！

## FAQs

### 性能如何？

_But wait_ - I hear you exclaim - _why would you ever not want type-aware rules?_

这里有一个问题(为了充分公开)。在你的配置中有 `parserOptions.project`，本质上是让 TypeScript 在 ESLint 进行检测（linting）之前构建项目。对于小的项目来说这只需要很少的时间（几秒钟）。对于大型项目，可能需要更长时间（30 秒或更多）。
我们大多数的用户都感到很满意，他们认为强大的静态类型感知分析是值得的。

<!-- 此外, 大多数用户主要是通过 IDE 插件来处理 lint 错误，通过一些缓存魔法(magic) -->

Additionally, most users primarily consume lint errors via IDE plugins which, through some caching magic, do not suffer the same penalties.这意味着他们通常仅是在推送之前运行完整的检测(lint)，或者通过他们的 CI，在那里额外的时间真的不重要。

**我们强烈建议你使用类型感知检测(type-aware linting)**, but the above information is included so that you can make your own, informed decision.

### I get errors telling me "The file must be included in at least one of the projects provided"

This error means that the file that's being linted is not included in any of the tsconfig files you provided us.
A lot of the time this happens when users have test files or similar that are not included in their normal tsconfigs.

Depending on what you want to achieve:

- If you **do not** want to lint the file:
  - Use [one of the options ESLint offers](https://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories) to ignore files, like a `.eslintignore` file, or `ignorePatterns` config.
- If you **do** want to lint the file:
  - If you **do not** want to lint the file with [type-aware linting](./TYPED_LINTING.md):
    - Use [ESLint's `overrides` configuration](https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns) to configure the file to not be parsed with type information.
      - A popular setup is to omit the above additions from top-level configuration and only apply them to TypeScript files via an override.
      - Alternatively, you can add `parserOptions: { project: null }` to an override for the files you wish to exclude. Note that `{ project: undefined }` will not work.
  - If you **do** want to lint the file with [type-aware linting](./TYPED_LINTING.md):
    - Check the `include` option of each of the tsconfigs that you provide to `parserOptions.project` - you must ensure that all files match an `include` glob, or else our tooling will not be able to find it.
    - If your file shouldn't be a part of one of your existing tsconfigs (for example, it is a script/tool local to the repo), then consider creating a new tsconfig (we advise calling it `tsconfig.eslint.json`) in your project root which lists this file in its `include`. For an example of this, you can check out the configuration we use in this repo:
      - [`tsconfig.eslint.json`](https://github.com/typescript-eslint/typescript-eslint/blob/main/tsconfig.eslint.json)
      - [`.eslintrc.js`](https://github.com/typescript-eslint/typescript-eslint/blob/main/.eslintrc.js)

## 疑难解答

如果在这方面有问题，请查看我们的[疑难解答和 FAQ](./TROUBLESHOOTING.md)。
