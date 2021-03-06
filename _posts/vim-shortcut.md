---
title: vim 快捷键速查表
date: 2021-05-13 20:56:10
tags: ['vim']
---

## Vim 介绍

每个腱鞘炎患者的福音

## 基本操作

| 快捷键    | 功能               |
| --------- | ------------------ |
| Esc <C-c> | 切换到普通模式     |
| i, I      | 当前插入，行前插入 |
| :         | 命令行模式         |

## 方向键

| 快捷键   | 功能                                                    |
| -------- | ------------------------------------------------------- |
| h        | 普通模式向左移动一个字符                                |
| j, <C-j> | <普通模式，插入模式>向下移动行                          |
| k, <C-p> | <普通模式，插入模式>向上移动行                          |
| l        | 普通模式向右移动一个字符                                |
| 0        | 移动光标至本行开头                                      |
| $        | 移动光标至本行末尾                                      |
| ^        | 移动光标至本行第一个非空字符处                          |
| w        | 向前移动一个词·光标在词首(上一个子母与数字组成的词之后) |
| W        | 向前移动一个词·光标在词首(以空格分隔的词)               |
| e        | 向前移动一个词·光标在词尾(同 w)                         |
| E        | 向前移动一个词·光标在词尾(同 W)                         |
| b        | 向后移动一个词(同 w)                                    |
| B        | 向后移动一个词(同 W)                                    |
| G        | 移动至文件末尾                                          |
| gg       | 移动文件开头                                            |

## 浏览文档

| 快捷键 | 功能                 |
| ------ | -------------------- |
| (      | 跳转到上一句         |
| )      | 跳转到下一句         |
| {      | 跳转到上一段         |
| }      | 跳转到下一段         |
| [[     | 跳转到上一部分       |
| ]]     | 跳转到下一部分       |
| []     | 跳转到上一部分的末尾 |
| ][     | 跳转到下一部分的开头 |

## 插入文本

| 快捷键        | 功能                             |
| ------------- | -------------------------------- |
| a             | 光标后插入                       |
| A             | 行尾插入                         |
| i             | 光标前插入                       |
| I             | 行首插入                         |
| o             | 向下新开一行                     |
| O             | 向上新开一行                     |
| :r [filename] | 在光标下插入文件内容             |
| :r ![command] | 执行命令，并将输出插入至光标下方 |

## 删除文本

| 快捷键 | 功能           |
| ------ | -------------- |
| x      | 删除光标字符   |
| dw     | 删除一个词     |
| d0     | 删除至行首     |
| d$     | 删除至行尾     |
| d)     | 删除至句末     |
| dgg    | 删除至文件开头 |
| dG     | 删除至文件末尾 |
| dd     | 删除当前行     |
| 3dd    | 删除三行       |

## 简单替换

| 快捷键  | 功能                       |
| ------- | -------------------------- |
| r{text} | 将光标处的字符替换成{text} |
| R       | 输入字符替换原有字符       |

## 复制/粘贴文本

| 快捷键 | 功能                           |
| ------ | ------------------------------ |
| yy     | 复制当前行到存储缓冲区         |
| ["x]yy | 复制当前行到寄存器 x           |
| p      | 当前行之后粘贴存储缓冲区内容   |
| P      | 当前行之前粘贴存储缓冲区的内容 |
| ["x]p  | 当前行之后粘贴寄存器 x 的内容  |
| ["x]P  | 当前行之前粘贴寄存器 x 的内容  |

## 撤销/重做操作

| 快捷键 | 功能           |
| ------ | -------------- |
| u      | 撤销最后的操作 |
| <C-r>  | 重做           |

## 搜索和替换

| 快捷键                      | 功能                                                                        |
| --------------------------- | --------------------------------------------------------------------------- |
| /search_text                | 检索文档，在文档后面的部分搜索 search_text                                  |
| ?search_text                | 检索文档，在文档前面的部分搜索 search_text                                  |
| n                           | 向下移动结果集                                                              |
| N                           | 向上移动结果集                                                              |
| :%s/original/replacement    | 检索第一个 “original” 字符串并将其替换成 “replacement”                      |
| :%s/original/replacement/g  | 检索并将所有的 “original” 替换为 “replacement”                              |
| :%s/original/replacement/gc | 检索出所有的 “original” 字符串，但在替换成 “replacement” 前，先询问是否替换 |

## 书签

| 快捷键        | 功能                                       |
| ------------- | ------------------------------------------ |
| m {a-zA-Z}    | 在当前光标位置设置书签                     |
| :marks        | 列出所有书签                               |
| [`'] {a-zA-Z} | [精准位置, 所在行起始位置]跳转到书签       |
| `.            | 跳转到最后一次执行改变的精确位置（行和列） |
| ‘.            | 跳转到最后一次执行改变的行起始位置         |

## 键盘映射(Map)

| 命令            | 常规模式 | 可视化模式 | 运算符模式 | 插入模式 | 命令行模式 |
| --------------- | -------- | ---------- | ---------- | -------- | ---------- |
| :map :noremap   | y        | y          | y          |          |            |
| :nmap :nnoremap | y        |            |            |          |            |
| :vmap :vnoremap |          | y          |            |          |            |
| :omap :onoremap |          |            | y          |          |            |
| :map! :noremap! |          |            |            | y        | y          |
| :imap :inoremap |          |            |            | y        |            |
| :cmap :cnoremap |          |            |            |          | y          |

## Reference

https://linux.cn/article-8144-1.html
https://zhuanlan.zhihu.com/p/24713018
