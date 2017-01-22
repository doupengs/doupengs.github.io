---
layout:     post
title:      "dpspider框架介绍(二)"
subtitle:   "download模块介绍"
date:       2017-01-19
author:     "Doupeng"
header-img: "img/post-bg-python-dpspider-download.jpg"
tags:
    - python
    - 爬虫
    - dpspider
---

> 本文是dpspider框架介绍的第二篇，dpspider是我自己写的一个第三方模块，可能存在很多不足的地方，好的地方可以学习，不足之处还请谅解，主要是继承了requests.request方法，实现自动加载代理文件，每个代理达到一定使用次数和不能使用的时候，可以自动更换下一个代理的目的

## 下载安装

先点击查看github项目地址[dpspider](https://github.com/doupengs/dpspider/blob/master/README.md)来下载安装所需要的依赖库和数据库,当然现在了解download.py并不需要数据库


## 参数介绍

```
先来看一下当我们实例化下载器的时候需要传入的参数:
  1 max: 一个代理最大的连续使用次数，默认值是10，达到这个值时自动更换下一个代理
  2 proxyFilePath: 代理文件的路径，默认是当前路径的 proxyList.txt
  3 logFile: dpspider我没有使用自带的日志模块，使用的是自己写的color模块，所以以下三个参数和printText作用相同，默认为None，即打印
  4 color: 输出的信息是否带有颜色，默认为True
  5 debug: 调试的等级，分为5个等级，0，1，2，3，4，默认为4，就是什么都会打印
     0 什么都不打印
     1 只打印以[Error]为开头的信息
     2 打印以[Error],[WARING]开头的信息
     3 打印以[Error],[WARING],[INFO]开头的信息
     4 什么都打印

类下的download方法参数:
  其实此方法继承的是 reqests 库下的 request 方法
  method: 方法 'GET','POST','PUT','DELETE','HEAD','OPTIONS'
  url: 链接地址
  proxyEnable: 新加入的参数，是否使用代理下载，默认为False
  params=None
  data=None
  json=None
  headers=None
  cookies=None
  files=None
  auth=None
  timeout=10
  allowRedirects=True
  verify=None
  stream=None
  cert=None
```

## 代码示例1

```python
from dpspider.color import printText
from dpspider.download import Download

DL = Download(max=2,proxyFilePath='proxy.txt',logFile=None,color=True,debug=4)
url = 'http://www.tmtpost.com/new/1'
response = DL.download('GET',url)
printText(response,'cyan')
```

## 输出结果1

<span style="color:red">[Error]download.py Download \_\_init\_\_:[Errno 2] No such file or directory: 'proxy.txt'</span></br>
<span style="color:cyan">\<Response [200]\></span>


## 代码示例2

```python
from dpspider.color import printText
from dpspider.download import Download

DL = Download(max=2,proxyFilePath='proxy.txt',logFile=None,color=True,debug=4)
url = 'http://www.tmtpost.com/new/1'
for i in range(6):
    response = DL.download('GET',url,proxyEnable=True)
    printText(response,'green')
```

## 输出结果2

<span style="color:cyan">[INFO]use proxy:101.231.46.34:8000</span></br>
<span style="color:green">\<Response [200]\></span></br>
<span style="color:cyan">[INFO]use proxy:101.231.46.34:8000</span></br>
<span style="color:green">\<Response [200]\></span></br>
<span style="color:cyan">[INFO]change proxy:124.88.67.52:843</span></br>
<span style="color:green">\<Response [200]\></span></br>
<span style="color:cyan">[INFO]use proxy:124.88.67.52:843</span></br>
<span style="color:green">\<Response [200]\></span></br>
<span style="color:cyan">[INFO]change proxy:122.72.32.73:80</span></br>
<span style="color:cyan">[INFO]change proxy:124.88.67.17:82</span></br>
<span style="color:green">\<Response [200]\></span></br>
<span style="color:cyan">[INFO]use proxy:124.88.67.17:82</span></br>
<span style="color:green">\<Response [200]\></span>

## 代理文件(这里注意必须是这种格式)

```
https,https://101.231.46.34:8000
http,http://124.88.67.52:843
http,http://122.72.32.73:80
http,http://124.88.67.17:82
http,http://124.88.67.18:80
http,http://124.88.67.20:80
http,http://120.92.3.127:80
http,http://61.238.99.156:60
```


- 点击这里查看 [download.py](https://github.com/doupengs/dpspider/blob/master/dpspider/download.py) 源码

- download.py 就介绍到这里了，有什么好的建议可以留言讨论
