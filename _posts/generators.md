---
title: generator 妙用
date: 2021-04-27 16:00:00
tags: ['generator']
---

## 什么是生成器 Generators

生成器对象是由一个 [生成器函数 functions\*](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*) 返回的，并且它复合[可迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)和[迭代器协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)

### 什么是可迭代协议

可迭代协议允许 JavaScript 对象定义或者定制自己的迭代行为。
如果一个对象实现了`@@iterator`方法，那么它可以成为可迭代对象。该属性可以通过`[Symbol.iterator]`访问。

内置可迭代对象：`String`、`Array`、`TypedArray`、`Map`、`Set`

### 什么是迭代器协议

迭代器协议定义了产生一系列值的标准方式。
可以通过定义对象`next()`方法实现迭代器。

## 生成器方法

### Generator.prototype.next()

返回一个由 `yield` 表达式生成的值, 值包含`value`和`done`属性

### Generator.prototype.return()

返回给定的值给 `value` 并将 `done` 设置为 `ture` 并结束生成器

### Generator.prototype.throw()

抛出异常

### yield 表达式

yield 类似 `return` ，但是又不完全相同，在生成器内使用`return` 返回值，生成器会在 `return` 后立即结束工作，使用 `yield` 返回值，外部接收到的对象是由 `value` 和 `done` 组成，`done` 表示生成器是否完成迭代工作，如果为 `false` 程序继续在生成器执行进行到下一处 `yield` 或者 `return`。

`yield*` 是 `yield` 高级用法委托迭代，可以将控制权委托到后面可迭代的对象。

## 不那么常见的用法

### 遍历嵌套结构

通过 `yield*` 可以将多个生成器连接在一起，这样很好理解树的遍历

```typescript
type TreeNode<T> = {
  left?: TreeNode<T>
  value: T
  right?: TreeNode<T>
}

function* traverse<T>(root: TreeNode<T>): Generator<T> {
  if (root != null) yield

  yield* traverse(root.left)
  yield root.value
  yield* traverse(root.right)
}
```

### "真"协程

```javascript
const fs = require('fs')
async function* readFiles() {
  const promises = (await fs.promises.readdir(__dirname)).map((f) =>
    fs.promises.readFile(`${__dirname}/${f}`)
  )

  for (const p of promises) {
    yield String(await p)
  }
}
for await (const s of readFiles()) {
  console.log(s.substr(0, 20))
}
```

### Tokenizing

```typescript
type Token = InterToken | OperatorToken

type InterToken = {
  type: 'integer'
  val: number
}

type OperatorToken = {
  type: '+' | '-'
}

type Input = {
  take: (regexp: RegExp, toToken?: (s: string) => Token) => Generator<Token>
  didProgress: () => boolean
}

function* tokenize(input: Input): Generator<Token> {
  do {
    yield* integer(input)
    yield* operator(input)
    space(input)
  } while (input.didProgress())
}

function* integer(input: Input): Generator<Token> {
  yield* input.take(/^[0-9]+/, (s) => ({
    type: 'integer' as const,
    val: Number(s),
  }))
}

function* operator(input: Input) {
  yield* input.take(/^[+-]/, (s) => ({
    type: s as '+' | '-',
  }))
}

function space(input: Input) {
  input.take(/^\s+/)
}

class InputImpl implements Input {
  str: string
  pos = 0
  lastCheckedPos = 0
  constructor(str: string) {
    this.str = str
  }
  *take(regexp: RegExp, toToken: (s: string) => Token) {
    const m = this.str.substr(this.pos).match(regexp)
    if (m) {
      this.pos += m[0].length
      if (toToken) {
        yield toToken(m[0])
      }
    }
  }
  didProgress() {
    const r = this.pos > this.lastCheckedPos
    this.lastCheckedPos = this.pos
    return r
  }
}

console.log([...tokenize(new InputImpl('1+44-2'))])
```

## Reference

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator

https://dev.to/alekseiberezkin/3-use-cases-for-es6-generators-3375
