---
layout:     post
title:      "神奇方便好用的markdown"
subtitle:   "妈妈再也不用担心微信公众号排版了"
date:       2017-02-06
author:     "Doupeng"
header-img: "img/post-bg-markdown-wechat.jpg"
tags:
    - markdown
---

> 想快速的编写好看的微信公众号文章，也许你值得画上几分钟看看这篇文章

### 一、什么是markdown语言

`Markdown`是一种可以使用普通文本编辑器编写的**标记语言**，通过简单的标记语法，它可以使普通文本内容具有一定的格式。

- 特点: 易读易写、轻量、简单、通用 
- 开发者: John Gruber 
- 文件后缀名: .md; .markdown; .mdown 

`Markdown`的语法简洁明了、学习容易，而且功能比纯文本更强，因此有很多人用它写**博客**。所以我们也可以用它来写自己的**微信公众号文章**，甚至写出漂亮的**邮件**

当然我的文章也是使用的`markdown`编写的

### 二、mardown语法简介

> 在这里我只是简单的介绍一些常用的语法，想要更加深入了解可以自己百度一些资料，markdown很好学习，几分钟就可以写出漂亮的文章格式

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

```
> 这里是引用的一些话，这里是引用的一些话，这里是引用的一些话
```

> 这里是引用的一些话，这里是引用的一些话，这里是引用的一些话

```
**加粗的文字** 正常的文字 *斜体*
```

**加粗的文字** 正常的文字 *斜体*

```
`hello world`，你好，`世界`
```

`hello world`，你好，`世界`

```
---
```

---

```
点击[这里](https://doupengs.github.io)跳转到**@猿来如此**
![img](http://#)
```

点击[这里](https://doupengs.github.io)跳转到**@猿来如此**
![img](http://#)

```
* 姓名
 * pycodeboy 
* 性别
* 年龄
```

* 姓名
 * pycodeboy 
* 性别
* 年龄

```
\```python
#coding:utf-8

import requests

url = 'https://doupengs.github.io'
response = requests.get(url)
response.encoding = 'utf-8'
print response.text
\```
```

```python
#coding:utf-8

import requests

url = 'https://doupengs.github.io'
response = requests.get(url)
response.encoding = 'utf-8'
print response.text
```

### 三、markdown在线编辑器

> 这里也有更加详细的一些事例

* https://www.zybuluo.com/mdeditor
* http://mahua.jser.me/
* http://tool.oschina.net/markdown/

### 四、微信公众号文章排版

> 作为一名开发人员，工作中我一般使用**谷歌**和**火狐浏览器**

* 我们可以根据自己使用的浏览器到[markdown-here](http://markdown-here.com/get.html)官网下载对应的插件
* 打开谷歌浏览器，依次展开—-更多工具—-扩展程序
* 狐火就更方便了，点击`Add to Firefox`

```
之后我们只需要将现在markdown编辑器中拷贝到微信公众号文章编辑器里，
然后使用 ALT + CTRL + M 快捷键，（也有可能是ALT + CTRL + Z）进行渲染就可以
然后把你插入的图片(![img]())替换掉,和平时公众号插入图片无差
当然你也可以配置 Markdown Here Option
在Markdown Here插件的选项中，选择“基本渲染CSS”，进行部分修改。
实际上，不用修改，只用默认格式，也很漂亮。只是没有颜色而已。
```
* 如果你还有什么疑问可以留言给我
* 也可以在**关于**页面找到我的联系方式，或者点击[这里](https://doupengs.github.io/me.html)有我的联系方式，可以加我的微信哦！
