---
title: 原型链
---

## prototype

每个函数都有**prototype**属性, 指向一个对象，这个对象就是调用构造函数而创建的实例的原型。

## constructor

每个原型都有一个**constructor**指向构造函数，每个实例对象都会从原型继承**constructor**属性。

## **proto**

每个实例对象都有一个**proto**属性，指向该对象的原型。**proto**调用与`Object.getPrototypeOf(obj)`意义相同

## 一句话概括

一切皆对象，每个对象其实是其原型调用构造函数创建而来，Object 原型是 Null。Function 的原型是 Object, Function 的 constructor 指向的是其本身，规范如此。

![](https://user-images.githubusercontent.com/14891797/108361110-09e48c80-722d-11eb-9732-3fdb0615f07c.png)
