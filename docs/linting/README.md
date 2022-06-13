---
id: linting
title: linting 你的 Typescript 代码库
sidebar_label: Linting your TypeScript Codebase
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

无论你是在新的 Typescript 代码库中添加 linting、还是在旧的代码库中添加 Typescript，或者从已废弃的 [TSLint](https://www.npmjs.com/package/tslint) 中迁移，步骤上并没有什么不同。
## 安装

第一步先确保你已经安装所需的包：
```bash npm2yarn
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## 配置

下一步，在你的项目的根目录中创建一个 `.eslintrc.cjs` 配置文件,然后填充如下内容：
<!-- prettier-ignore -->
```js title=".eslintrc.cjs"
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
```

这是我们推荐的最小的配置文件。随着你的深入(了解|学习),你可以添加更多的内容，但这些足够让你开始。
:::info

`.cjs`后缀将明确的将文件设置为[CommonJS module](https://nodejs.org/dist/latest-v18.x/docs/api/modules.html),如果你的项目的 package.json中有 `"type": "module"`。

> 注：`"type": "module"` 会使得`.js`结尾的文件将默认采取 `ES Module`来解析，具体可见https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling。

如果你的项目中没有使用 ESM， 那么`.eslintrc.js`这个文件名也是可以的。可以查看 [ESLint's Configuration Files docs](https://eslint.org/docs/user-guide/configuring/configuration-files) 了解更多内容。
:::

### 详情

解释一些重要的部分:

- `parser: '@typescript-eslint/parser'` 告诉 ESLint 使用你安装的解析包 ([`@typescript-eslint/parser`](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser))。
  - 允许 ESLint 理解 TypeScript 语法。
  - 这个是必须的，否则 ESLint 将会抛出错误，当它尝试解析 TypeScript 代码会认为TypeScript代码是常规的 JavaScript代码。
- `plugins: ['@typescript-eslint']` 告诉 ESLint 加载你安装的插件包 ([`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)).
  - 允许你在你的代码库中使用这些规则。
- `extends: [ ... ]` 告诉 ESLint 你的配置拓展了给定的配置。
  - `eslint:recommended` 是 ESLint的内置的“推荐”配置 - 它开启了一套小且合理的规则，它是出名的最佳实践。
  - `plugin:@typescript-eslint/recommended` 是我们(这里我们指 Typescript-eslint )“推荐”配置 - 它就像 `eslint:recommend`, 只不过仅开启的规则来自我们(这里我们指 Typescript-eslint )的 TypeScript-specific 插件。
### 忽略不必要的文件

接下来， 创建一个 `.eslintignore` 文件在你的项目的根目录。
这个文件将告诉 ESLint 哪些文件和文件夹不需要检查。

将以下代码添加在文件中：

```ignore title=".eslintignore"
# 不检查打包生成的输出 (确保它是你当前项目打包后的文件名)
dist
```

### 更多配置文档

- 你可以阅读更多有关 ESLint 配置(configuration)的内容 [配置(configuration)有关的文档](https://eslint.org/docs/user-guide/configuring)。
- 你可以阅读更多有关 ESLint 提供的规则(rules) [规则(rules)有关的文档](https://eslint.org/docs/rules/).
- 你可以阅读更多有关我们(这里我们指 Typescript-eslint )提供的规则 [我们(这里我们指 Typescript-eslint )插件有关的文档](https://typescript-eslint.io/rules/)

## 运行 ESLint

配置完成后，在你的项目根目录打开终端(terminal)，并运行以下命令：
<Tabs groupId="npm2yarn">
<TabItem value="npm">

```bash
npx eslint .
```

</TabItem>
<TabItem value="Yarn">

```bash
yarn eslint .
```

</TabItem>
</Tabs>

ESLint 将检查当前文件下所有的 TypeScript文件，并将结果输出到你的终端(terminal)。

建议你在你的 package.json中添加一个 npm 脚本，这样你就不必每次重复相同的命令来运行 ESLint。

```json title="package.json"
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

这样，你就可以直接调用 `lint` 脚本：

```bash npm2yarn
npm run lint
```

:::note
如果你使用了非标准的文件后缀，你需要显式的告诉 ESLint 检查这些后缀使用这个[`--ext` 标记](https://eslint.org/docs/user-guide/command-line-interface#--ext)
:::

你还可以在绝大多数 IDE 中通过插件来实时获取结果 - 搜索你的 IDE 拓展。

## 下一步

有了这些配置，你现在可以开始深入钻研大量的 ESLint 生态相关的插件和配置。

### Type-Aware Rules

我们有很多很棒的规则，它们利用了 TypeScript 的强大的类型信息。除第一步外，它们还需要一些额外的配置。[访问下一页来看看如何设置它](./TYPED_LINTING.md)

### Prettier

如果你使用了 [`prettier`](https://www.npmjs.com/package/prettier)， 它也有一个有用的配置来帮助修复 ESLint 不会报告的格式化问题，而 `prettier` 会修复这类(格式化)问题[`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)。

将它添加到你的 `extends` 末尾来使用这个配置：

```js title=".eslintrc.js"
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 加到这行
    'prettier',
  ],
};
```

### 一些社区配置

社区配置的存在是为了为你提供全面的基本配置，其目的是你可以添加配置并且他可以给你带来 "opinionated" 设置。
> 注：有关"opinionated"的大致解释可以看这篇[文章](https://github.yanhaixiang.com/linter-tutorial/theory/history.html#prettier)
ESLint生态中有许多社区配置包
一些流行的 "一键" 配置:

- Airbnb的 ESLint 配置: [`eslint-config-airbnb-typescript`](https://www.npmjs.com/package/eslint-config-airbnb-typescript).
- 标准的: [`eslint-config-standard-with-typescript`](https://www.npmjs.com/package/eslint-config-standard-with-typescript).

如果要使用他们中的一个完整的配置包，你应该用包名来替换 `extends`。
例如:

```js title=".eslintrc.js"
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    // 从这行开始删除
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 删到这里结束
    // 添加这行
    'airbnb-typescript',
  ],
};
```

<!-- markdownlint-disable MD044 -->

搜索 ["eslint-config" 在npm中](https://www.npmjs.com/search?q=eslint-config) 了解更多。

### 插件

ESLint 插件在 ESLint之上提供了额外的规则和其他的功能。
下面是几个例子:

- ESLint comment restrictions: [`eslint-plugin-eslint-comments`](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
- Import/export conventions : [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
- Jest testing: [`eslint-plugin-jest`](https://www.npmjs.com/package/eslint-plugin-jest)
- NodeJS best practices: [`eslint-plugin-node`](https://www.npmjs.com/package/eslint-plugin-node)
- React best practices: [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) and [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)

每个插件都包含关于各种配置和规则的文档。
一些典型的插件可能是这样使用的：

```js title=".eslintrc.js"
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    // Add this line
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // Add this line
    'plugin:jest/recommended',
  ],
};
```

<!-- markdownlint-disable MD044 -->

搜索 ["eslint-plugin" 在npm中](https://www.npmjs.com/search?q=eslint-plugin) 了解更多。

## 疑难解答

如果在这方面有问题，请查看我们的[疑难解答和FAQ](./TROUBLESHOOTING.md)。