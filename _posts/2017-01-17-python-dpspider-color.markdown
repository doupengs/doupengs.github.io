---
layout:     post
title:      "dpspider框架介绍(一)<br>color模块介绍"
subtitle:   ""
date:       2017-01-17 10:00:00
author:     "Doupeng"
header-img: "img/post-bg-python-dpspider-color.jpg"
tags:
    - python
    - 爬虫
    - dpspider
---

> 本文是dpspider框架介绍的第一篇，从最基础和最容易理解的模块慢慢讲解，dpspider是我自己写的一个第三方模块，可能存在很多不足的地方，好的地方可以学习，不足之处还请谅解

## 下载安装

先点击查看github项目地址[dpspider](https://github.com/doupengs/dpspider/blob/master/README.md)来下载安装所需要的依赖库和数据库,当然现在了解color.py并不需要数据库


## 如何使用

* 先来看一下printText下的参数:
 * obj 需要打印的对象，比如是字符串，None对象，等等...
 * textColor 前景色，就是字体的颜色
 * backgroundColor 背景色
 * style 字的样式
 ```
    颜色有:red, yellow, green, blue, cyan, purple, black, white
    样式有:bold, underline
 ```
 * logFile 将打印信息写入的文件名称，默认是打印不写入
 * color 是否带有颜色打印，默认为True,False就和print输出一样
 * debug 调试的等级，分为5个等级，0，1，2，3，4，默认为4，就是什么都会打印
 ```
    0 什么都不打印<br>
    1 只打印以[Error]为开头的信息<br>
    2 打印以[Error],[WARING]开头的信息<br>
    3 打印以[Error],[WARING],[INFO]开头的信息<br>
    4 什么都打印
 ```
 
 ```python
#coding:utf-8

from dpspider.color import printText

printText('我是一条测试信息'，'red','yellow')
printText(None,'blue',style='bold')
printText('哈哈哈哈哈','blue',style='underline')
printText('[INFO]:这是一条信息')
printText('[WARING]:这是一条警告')
printText('[Error]:这是一条错误')
printText('[INFO]:这是一条信息',color=False,logFile='test.log')
printText('[WARING]:这是一条警告',color=False,logFile='test.log')
printText('[Error]:这是一条错误',color=False,logFile='test.log')
```

* 下面是输出结果

<img src="https://github.com/doupengs/doupengs.github.io/blob/master/img/python-dpspider-color.PNG"/><br>
<img src="https://github.com/doupengs/doupengs.github.io/blob/master/img/python-dpspider-color1.PNG"/>

 ```
 这里[INFO]默认为 cyan 青蓝色，[WARING]默认为 yellow 黄色，[Error]默认为 red 红色。背景色均为无，样式为 bold 高量加粗
 当写入文件是会带有时间，当然你也可以根据自己的需求来修改源代码
 打印颜色一般适用于linux的终端，pyCharm,win的终端
 ```
 <br>
 
 点击这里查看 [color.py](https://github.com/doupengs/dpspider/blob/master/dpspider/color.py) 源码
 
 color.py 就介绍到这里了，有什么好的建议可以留言讨论
