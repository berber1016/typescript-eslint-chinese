---
id: configs
sidebar_label: Configurations
title: 配置项
---

## 内置的配置项

`@typescript-eslint/eslint-plugin` 包含内置的配置项，你可以从中拓展来引入其他推荐(recommended)规则。

除了`strict`外，所有的配置项都可以被认为是“稳定(`stable`)”的。

规则的添加和删除被认为是"破坏性的更改(breaking changes)"，只有“major”版本才可能会这么做。

### `eslint-recommended`

这个规则集应该是在 `eslint:recommended`拓展后使用。

它禁用了 TypeScript 编译器已经检查过的 ESLint 中还存在的的核心规则。

```jsonc
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ]
}
```

如果你使用了本页面中提到的任何配置，这个配置被自动包含在了里面。

### `recommended`

Recommended rules for code correctness that you can drop in without additional configuration.这些规则几乎总是针对糟糕的实践和/或像是bug的规则报告。`recommended` 还禁用已知的与此存储库相冲突(就像`eslint-recommended`中说的那样)或者在 TypeScript 代码库中出现问题的规则。

```json
{
  "extends": ["plugin:@typescript-eslint/recommended"]
}
```

:::tip
我们强烈推荐所有的 TypeScript 项目拓展这个配置。
:::

### `recommended-requiring-type-checking`

额外的推荐(recommended)规则需要类型信息。

这个配置中的规则与 `recommended` 中规则类似。

```json
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ]
}
```

:::tip
我们推荐所有的 TypeScript 项目拓展这个配置, 需要注意的是使用了类型信息的规则需要更长的运行时间。

请看 [带类型信息的检测](/docs/linting/type-linting) 的更多细节.
:::

### `strict`

额外的严格(strict)规则也可以捕获bug，但比推荐(recommended)规则更加 "opinionated"。
```json
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict"
  ]
}
```

:::tip
只有相当多的开发人员十分精通 TypeScript时，我们才会推荐一个 TypeScript 项目拓展这个配置。
:::

## 最重要的配置

这些配置是我们推荐的起点, 但 **你不需要按照原样使用他们**。
ESLint 允许你在任何拓展配置上配置自己的规则设置。
请看 [ESLint 配置规则文档](https://eslint.org/docs/user-guide/configuring/rules#using-configuration-files)。

### 建议更改配置

如果你强烈认为一个特定的规则应该(或不应该)在这个配置中，请随意[发起一个issue](https://github.com/typescript-eslint/typescript-eslint/issues/new/choose) 并附上一个**详细的**理由来解释你的理论。