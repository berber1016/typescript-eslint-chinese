# `array-type`

规定数组使用 `T[]` 或者 `Array<T>`。

在你的代码库中，使用相同的数组定义风格能够使得开发人员更容易阅读和理解类型。

## Rule Details

这条规则宗旨是在你的代码库中标准化数组类型。

## Options

```ts
type ArrayOption = "array" | "generic" | "array-simple";
type Options = {
  default: ArrayOption;
  readonly?: ArrayOption;
};

const defaultOptions: Options = {
  default: "array",
};
```

这条规则接受具有以下属性的 options 对象：

- `default` - 设置数组类型预期是可变的。
- `readonly` - 设置数组类型预期是只读数组。如果省略，则将使用`default`。

每个属性都可以设置为这三个中的一个： `'array' | 'generic' | 'array-simple'`。

默认配置将强制所有的可变的和只读的数组使用 `array` 语法。

### `"array"`

对于所有的数组类型，始终使用 `T[]` 或者 `readonly T[]`。

<!--tabs-->

#### ❌ Incorrect

```ts
const x: Array<string> = ["a", "b"];
const y: ReadonlyArray<string> = ["a", "b"];
```

#### ✅ Correct

```ts
const x: string[] = ["a", "b"];
const y: readonly string[] = ["a", "b"];
```

### `"generic"`

对于所有的数组类型，始终使用 `Array<T>` 或者 `ReadonlyArray<T>`。

<!--tabs-->

#### ❌ Incorrect

```ts
const x: string[] = ["a", "b"];
const y: readonly string[] = ["a", "b"];
```

#### ✅ Correct

```ts
const x: Array<string> = ["a", "b"];
const y: ReadonlyArray<string> = ["a", "b"];
```

### `"array-simple"`

对于简单类型(类型仅是原始名称或者类型引用)使用 `T[]` 或者 `readonly T[]`。
对于其他类型(联合类型、交叉类型、对象类型、函数类型)使用 `Array<T>` 或者 `ReadonlyArray<T>`。

<!--tabs-->

#### ❌ Incorrect

```ts
const a: (string | number)[] = ["a", "b"];
const b: { prop: string }[] = [{ prop: "a" }];
const c: (() => void)[] = [() => {}];
const d: Array<MyType> = ["a", "b"];
const e: Array<string> = ["a", "b"];
const f: ReadonlyArray<string> = ["a", "b"];
```

#### ✅ Correct

```ts
const a: Array<string | number> = ["a", "b"];
const b: Array<{ prop: string }> = [{ prop: "a" }];
const c: Array<() => void> = [() => {}];
const d: MyType[] = ["a", "b"];
const e: string[] = ["a", "b"];
const f: readonly string[] = ["a", "b"];
```

## 组合矩阵

这个矩阵列举了所有的可能组合的选项和不同类型数组的预期效果。

| defaultOption  | readonlyOption | Array with simple type | Array with non simple type | Readonly array with simple type | Readonly array with non simple type |
| -------------- | -------------- | ---------------------- | -------------------------- | ------------------------------- | ----------------------------------- |
| `array`        |                | `number[]`             | `(Foo & Bar)[]`            | `readonly number[]`             | `readonly (Foo & Bar)[]`            |
| `array`        | `array`        | `number[]`             | `(Foo & Bar)[]`            | `readonly number[]`             | `readonly (Foo & Bar)[]`            |
| `array`        | `array-simple` | `number[]`             | `(Foo & Bar)[]`            | `readonly number[]`             | `ReadonlyArray<Foo & Bar>`          |
| `array`        | `generic`      | `number[]`             | `(Foo & Bar)[]`            | `ReadonlyArray<number>`         | `ReadonlyArray<Foo & Bar>`          |
| `array-simple` |                | `number[]`             | `Array<Foo & Bar>`         | `readonly number[]`             | `ReadonlyArray<Foo & Bar>`          |
| `array-simple` | `array`        | `number[]`             | `Array<Foo & Bar>`         | `readonly number[]`             | `readonly (Foo & Bar)[]`            |
| `array-simple` | `array-simple` | `number[]`             | `Array<Foo & Bar>`         | `readonly number[]`             | `ReadonlyArray<Foo & Bar>`          |
| `array-simple` | `generic`      | `number[]`             | `Array<Foo & Bar>`         | `ReadonlyArray<number>`         | `ReadonlyArray<Foo & Bar>`          |
| `generic`      |                | `Array<number>`        | `Array<Foo & Bar>`         | `ReadonlyArray<number>`         | `ReadonlyArray<Foo & Bar>`          |
| `generic`      | `array`        | `Array<number>`        | `Array<Foo & Bar>`         | `readonly number[]`             | `readonly (Foo & Bar)[]`            |
| `generic`      | `array-simple` | `Array<number>`        | `Array<Foo & Bar>`         | `readonly number[]`             | `ReadonlyArray<Foo & Bar>`          |
| `generic`      | `generic`      | `Array<number>`        | `Array<Foo & Bar>`         | `ReadonlyArray<number>`         | `ReadonlyArray<Foo & Bar>`          |

## 相关链接

- TSLint: [array-type](https://palantir.github.io/tslint/rules/array-type/)
