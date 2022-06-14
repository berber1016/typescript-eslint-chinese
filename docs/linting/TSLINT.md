---
id: tslint
title: What About TSLint?
sidebar_label: What About TSLint?
---

TSLint 是与 ESLint 等价的一个 linter，它专门用于 TypeScript 代码中。

**TSLint 已经弃用**，你应该用 `typescript-eslint` 来替换。

## 从 TSLint 迁移到 ESLint

如果你正在寻找从 TSLint 迁移到 ESLint 的帮助，请看 [`tslint-to-eslint-config`](https://github.com/typescript-eslint/tslint-to-eslint-config)。

你可以看看 [`这个 Plugin ROADMAP.md`](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/ROADMAP.md) 来获取TSLint的规则与此包中的规则最新的规则比较描述。
<!-- for an up to date overview of how TSLint rules compare to the ones in this package. -->

如果你必须使用 TSLint 和 ESLint，那么在你的转换过程中也有一个终极的回退选项，即在一段时间内同时使用两个litter。 

对于这个选项，请检查 [`@typescript-eslint/eslint-plugin-tslint`](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin-tslint).

## 为什么废弃 TSLint?

TSLint 相对于 ESLint 有一个优势就是它不需要工具来协调 JavaScript 语法和 TypeScript 语法之间的差异。
不幸的是, 这意味着 TSLint 不能重用围绕着 ESLint 在 JavaScript 生态中任何已经完成的工作。
TSLint 必须重新实现在编译器拓展和自动修复规则有关的一切。

TSLint 的支持者在2019年宣布， **他们将弃用 TSLint，转而支持 `typescript-eslint`** 为了使社区受益。
你可以在这里来了解到更多有关的信息：https://medium.com/palantir/tslint-in-2019-1a144c2317a9。

TypeScript 团队自己也宣布他们计划把 TypeScript 代码库从 TSLint 迁移到 `typescript-eslint`，他们一直是这个项目的主要支持者。更多详情来自 https://github.com/microsoft/TypeScript/issues/30553.
