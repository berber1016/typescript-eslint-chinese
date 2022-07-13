# `await-thenable`

不允许等待非 `Thenable` 的值。

这条规则不允许等待非 `Thenable`(具有 `then` 方法的对象，例如 Promise )的值。
虽然对于 Javacript 来说等待一个非`Promise`的值(它会立即解析)是有效的，但是这种模式通常是程序员的错误，比如忘记在调用返回 Promise 函数时添加圆括号。

## 规则详情

这条规则的代码示例：

<!--tabs-->

### ❌ Incorrect

```ts
await "value";

const createValue = () => "value";
await createValue();
```

### ✅ Correct

```ts
await Promise.resolve("value");

const createValue = async () => "value";
await createValue();
```

## Options

```jsonc
// .eslintrc.json
{
  "rules": {
    "@typescript-eslint/await-thenable": "error"
  }
}
```

这条规则不是可配置的。

## 什么时候不使用它

如果你想允许代码 `await` 非 Promise 的值。
这通常不是首选，但有时对视觉一致性很有用。

## 相关链接

- TSLint: ['await-promise'](https://palantir.github.io/tslint/rules/await-promise)
