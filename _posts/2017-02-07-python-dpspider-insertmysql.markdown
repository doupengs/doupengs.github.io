---
layout:     post
title:      "dpspider框架介绍(四)"
subtitle:   "insertmysql模块介绍"
date:       2017-02-07
author:     "Doupeng"
header-img: "img/post-bg-python-dpspider-insertmysql.jpg"
tags:
    - python
    - 爬虫
    - dpspider
---

> 本文是dpspider框架介绍的第四篇，dpspider是我自己写的一个第三方模块，可能存在很多不足的地方，好的地方可以学习，不足之处还请谅解，insertmysql这个模块是将数据插入到mysql数据库的过程

## 下载安装

先点击查看github项目地址[dpspider](https://github.com/doupengs/dpspider/blob/master/README.md)来下载安装所需要的依赖库和数据库,目前需要下载mysql数据库喽！

## 总的介绍

```
先来看一下当我们实例化InsertMysql类的时候需要传入的参数:
  1 host: 数据库的主机地址
  2 user: 用户名
  3 password: 用户密码
  4 db: 数据库名称
  5 charset: 编码默认utf8
  6 logFile: dpspider我没有使用自带的日志模块，使用的是自己写的color模块，
    所以以下三个参数和printText作用相同，默认为None，即打印
  7 color: 输出的信息是否带有颜色，默认为True
  8 debug: 调试的等级，分为5个等级，0，1，2，3，4，默认为4，就是什么都会打印
     0 什么都不打印
     1 只打印以[Error]为开头的信息
     2 打印以[Error],[WARING]开头的信息
     3 打印以[Error],[WARING],[INFO]开头的信息
     4 什么都打印

InsertMysql类下的成员:
   logFile
   color
   debug
   success: 入库成功的数量
   fail: 入库失败的数量
   repeat: 违反主键唯一约束条件，即去重的数量 
   _conn: 链接
   _cursor: 游标
   
InsertMysql类下的方法(1个方法):
   insertMysql(self,table,columns,values,isMysqlFLF=True,isMysqlRLF=False)
   table: 表名
   columns: 字段
   values： 值
   isMysqlFLF: 是否生成插入失败的sql日志，默认为True
   isMysqlRLF: 是否生成去重的sql日志，默认为False
```

## 代码示例


```python
#coding:utf-8

from dpspider.insertmysql import InsertMysql

IM = InsertMysql(host='127.0.0.1',user='root',password='doupeng',db='doupeng',color=False)

for i in range(1,6):
    TITLE = '你好%d'%i
    URL = 'http://doupengs.github.io'
    CTIME = '2017-02-07'
    SUMMERY = '你好，世界！'
    IM.insertMysql(table='dp_test',columns='(TITLE,URL,CTIME,SUMMERY)',values=(TITLE,URL,CTIME,SUMMERY))
    print u'入库成功: %d'%IM.success
    print u'入库失败: %d'%IM.fail
    print u'数据去重: %d'%IM.repeat
    print u'='*35

del IM
# ====================================================================================================

# 下面是运行结果

'''
[INFO]:Insert into mysql succeeded
入库成功: 1
入库失败: 0
数据去重: 0
===================================
[INFO]:Insert into mysql succeeded
入库成功: 2
入库失败: 0
数据去重: 0
===================================
[INFO]:Insert into mysql succeeded
入库成功: 3
入库失败: 0
数据去重: 0
===================================
[INFO]:Insert into mysql succeeded
入库成功: 4
入库失败: 0
数据去重: 0
===================================
[INFO]:Insert into mysql succeeded
入库成功: 5
入库失败: 0
数据去重: 0
===================================
[INFO]:mysql connect close
'''
```

- 当然你需要对数据库有其他操作可以自行添加

- 点击这里查看 [insertmysql.py](https://github.com/doupengs/dpspider/blob/master/dpspider/insertmysql.py) 源码

- insertmysql.py 就介绍到这里了，有什么好的建议可以留言讨论
