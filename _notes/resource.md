---
title: 底层
---

## typeof null

typeof null 是 object 是第一个版本的残余。该版本的值是用 32 位为单位存储，由一个标签（1-3 位）和实际数据。类型标签存储在单元的低位。

- 000: 对象
- 1: int 31 位有符号整数
- 010: double 双浮点数的引用
- 100: string 对字符串的引用
- 110: 布尔 数据是布尔值
