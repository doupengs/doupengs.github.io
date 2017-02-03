---
layout:     post
title:      "dpspider框架介绍(三)"
subtitle:   "parser模块介绍"
date:       2017-02-01
author:     "Doupeng"
header-img: "img/post-bg-python-dpspider-parser.jpg"
tags:
    - python
    - 爬虫
    - dpspider
---

> 本文是dpspider框架介绍的第三篇，dpspider是我自己写的一个第三方模块，可能存在很多不足的地方，好的地方可以学习，不足之处还请谅解，parser这个模块主要是将xpath和re相结合来使用，使用起来很方便

## 下载安装

先点击查看github项目地址[dpspider](https://github.com/doupengs/dpspider/blob/master/README.md)来下载安装所需要的依赖库和数据库,当然现在了解parser.py并不需要数据库

## 总的介绍

```
先来看一下当我们实例化下载器的时候需要传入的参数:
  1 data: 是Unicode的网页html源代码，初始化的时候一般就是response.text
  2 response: 代理文件的路径，默认是当前路径的 proxyList.txt
  3 url: 请求的url
     * data是必须传入的，因为解析的就是data，response和url默认为None
  4 logFile: dpspider我没有使用自带的日志模块，使用的是自己写的color模块，所以以下三个参数和printText作用相同，默认为None，即打印
  5 color: 输出的信息是否带有颜色，默认为True
  6 debug: 调试的等级，分为5个等级，0，1，2，3，4，默认为4，就是什么都会打印
     0 什么都不打印
     1 只打印以[Error]为开头的信息
     2 打印以[Error],[WARING]开头的信息
     3 打印以[Error],[WARING],[INFO]开头的信息
     4 什么都打印

Parser类下的成员:
   data
   response
   url
   logFile
   color
   debug
Parser类下的方法(10个方法):
   ----解析方法----
   xpathOne(xpath)
   xpathAll(xpath)
     * 需要填写xpath，One则返回一个，All则是所有，返回的是列表
   reOne(pattern)
   reAll(pattern)
     * 需要填写正则表达式，One则返回一个，All则是所有，返回的是列表
   reSub(pattern,goalStr,count=0)
     * 需要填写正则表达式，替换的字符串，以及次数，默认为0
   # 这里的五个方法返回的仍然是Parser类，All是列表中是Parser类，所以他们是可以接着精确的连着使用
   # 所以想要输出你想要的的数据类型使用线面的输出方法
   ----输出方法----
   str()
     * 将Parser类转换成unicode字符串
   bytes(encoding='utf8')
     * 将Parser类转换成 默认为utf8 编码的字符串
   int()
     * 将Parser类转换成整型
   float()
     * 将Parser类转换成浮点型
   datetime(timeStrFormat="%Y-%m-%d %H:%M:%S",returnStrType=True)
     * 将Parser类转换成时间形式，可以是字符串 或者 datetime格式，后面有详细的介绍
```

## 代码示例


```python
#coding:utf-8

from dpspider.parser import Parser

html = u'''
    <!--html网页源代码-->
        <div>
           <p class='content'>大家好!</p>
           <p class='content'>这里是猿来如此。。。</p>
           <p class='content'>很高兴在这里认识你。</p>
           <p class='content'>我叫窦朋。</p>
           <p class='content'>是python爱好者。</p>
        </div>
        <span>电话: 1234567</span>
        <span>金额: 100.12元</span>
'''

data = Parser(data=html)
p_all1 = data.xpathAll("//p[@class='content']")
p_all2 = data.reAll("<p.*?/p>")
print p_all1
print p_all2

# [<dpspider.parser.Parser object at 0x00000000033E8780>, <dpspider.parser.Parser object at 0x00000000033E87B8>, <dpspider.parser.Parser object at 0x00000000033E86D8>, <dpspider.parser.Parser object at 0x00000000033E8710>, <dpspider.parser.Parser object at 0x00000000033E87F0>]
# [<dpspider.parser.Parser object at 0x00000000033E8860>, <dpspider.parser.Parser object at 0x00000000033E8898>, <dpspider.parser.Parser object at 0x00000000033E88D0>, <dpspider.parser.Parser object at 0x00000000033E8908>, <dpspider.parser.Parser object at 0x00000000033E8940>]

for p in p_all1:
    print p.bytes().strip()
for p in p_all2:
    print p.bytes().strip()

# 大家好!
# 这里是猿来如此。。。
# 很高兴在这里认识你。
# 我叫窦朋。
# 是python爱好者。
# 大家好!
# 这里是猿来如此。。。
# 很高兴在这里认识你。
# 我叫窦朋。
# 是python爱好者。

p2 = data.xpathOne('//p[2]').reSub(u'。',u'!').bytes().strip()
p5 = data.xpathOne('//p[5]').reOne(u'是(\w+)').bytes().strip()
print p2
print p5

# 这里是猿来如此！！！
# python

phone = data.xpathOne('//span[1]').reOne('(\d+)').int()
money = data.xpathOne('//span[2]').reOne('(\d+\.\d+)').float()
print phone
print money

# 1234567
# 100.12

# ----这里详细介绍datetime()----

html = u'''
    <!--html网页源代码-->
        <div>
           <p class='content'>发布于：59秒前 作者:窦朋</p>
           <p class='content'>发布于：23分钟前 作者:窦朋</p>
           <p class='content'>发布于：13小时前 作者:窦朋</p>
           <p class='content'>发布于：5天前 作者:窦朋</p>
           <p class='content'>发布于：2周前 作者:窦朋</p>
           <p class='content'>发布于：今天10:12 作者:窦朋</p>
           <p class='content'>作者:窦朋 发布于：昨天 02:21:45</p>
           <p class='content'>作者:窦朋 发布于：前天12:21</p>
           <p class='content'>作者:窦朋 发布于：2015年6月23日 12:45</p>
           <p class='content'>作者:窦朋 发布于：2015-07-24 16:05:21</p>
           <p class='content'>作者:窦朋 发布于：2017/01/14 13:04</p>
        </div>
'''

data = Parser(data=html)
p_all = data.xpathAll("//p")
for p in p_all:
    print p.datetime()
    
# 2017-02-03 10:54:50
# 2017-02-03 10:32:49
# 2017-02-02 21:55:49
# 2017-01-29 10:55:49
# 2017-01-20 10:55:49
# 2017-02-03 10:12:00
# 2017-02-02 02:21:45
# 2017-02-01 12:21:00
# 2015-06-23 12:45:00
# 2015-07-24 16:05:21
# 2017-01-14 13:04:00

# datetime(timeStrFormat="%Y-%m-%d %H:%M:%S",returnStrType=True)
# 默认的时间格式为 %Y-%m-%d %H:%M:%S
# 默认返回的时间类型是 string
# 如果将 returnStrType 设置为 False,则返回 datetime.datetime 的时间格式

time1 = data.xpathOne('//p[1]').datetime("%B,%d,%Y")
time2 = data.xpathOne('//p[2]').datetime()
time3 = data.xpathOne('//p[2]').datetime(returnStrType=False)
print time1
print time2,type(time2)
print time3,type(time3)

# February,03,2017
# 2017-02-03 10:44:57 <type 'str'>
# 2017-02-03 10:44:57 <type 'datetime.datetime'>
```



## 错误信息提示

```python
#coding:utf-8

from dpspider.parser import Parser

html = u'''
    <!--html网页源代码-->
        <div>
           <p class='content'>发布于：59秒前 作者:窦朋</p>
        </div>
'''

data = Parser(data=html)

time1 = data.xpathOne('//p[100]').datetime("%B,%d,%Y")
time2 = data.xpathOne('。//p').datetime()
```

<div style="background-color:rgb(39,40,34)">
    <span style="color:yellow">[WARING]parser.py Parser xpathOne parse None://p[100] None</span>
    <p style="color:red">[Error]parser.py Parser datetime:search time format failed, return current time</p>
    <span style="color:red">[Error]parser.py Parser xpathOne:All strings must be XML compatible: Unicode or ASCII, no NULL bytes or control characters 。//p None</span>
    <p style="color:red">[Error]parser.py Parser datetime:search time format failed, return current time</p>
</div>

- 点击这里查看 [parser.py](https://github.com/doupengs/dpspider/blob/master/dpspider/parser.py) 源码

- parser.py 就介绍到这里了，有什么好的建议可以留言讨论
