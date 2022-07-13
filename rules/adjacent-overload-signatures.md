# `adjacent-overload-signatures`

规定**成员**重载是连续的。

将重载成员分组在一起可以让代码提高可读性。

## 规则详情

这个规则的目标是使得组织重载成员的方式标准化。

### ❌ 错误的

```ts
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function bar(): void; // ❌
  export function foo(sn: string | number): void;
}

type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void; // ❌
  foo(sn: string | number): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void; // ❌
  foo(sn: string | number): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void {} // ❌
  foo(sn: string | number): void {}
}

export function foo(s: string): void;
export function foo(n: number): void;
export function bar(): void; // ❌
export function foo(sn: string | number): void;
```

### ✅ 正确的

```ts
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function foo(sn: string | number): void;
  export function bar(): void;
}

type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void {}
  bar(): void {}
}

export function bar(): void;
export function foo(s: string): void;
export function foo(n: number): void;
export function foo(sn: string | number): void;
```

## 选项

```jsonc
// .eslintrc.json
{
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error"
  }
}
```

此规则不可配置。

## 什么时候不使用它

如果你不太关心代码的整体性结构，那么你不需要这条规则。

## 相关链接

- TSLint: [adjacent-overload-signatures](https://palantir.github.io/tslint/rules/adjacent-overload-signatures/)
