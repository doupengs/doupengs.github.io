---
layout:     post
title:      "敬业福，教你用python扫出来"
subtitle:   "你尽管去集，得到一块算我输"
date:       2017-01-24
author:     "Doupeng"
header-img: "img/post-bg-python-jingyefu.jpg"
tags:
    - python
    - AR
    - OCR
---

> 好吧，我承认有那么一点标题党。不过咱先来看看ZFB，最近几天搞得全国人民都不得安心工作的“集五福”

#### 先看一下五福界面

![img](img/AR-zhifubao.jpg)

先来解释一下什么是**AR**，百度百科:

```
增强现实技术（Augmented Reality，简称 AR），
是一种实时地计算摄影机影像的位置及角度并加上相应图像、视频、3D模型的技术，
这种技术的目标是在屏幕上把虚拟世界套在现实世界并进行互动。
```

但是根据我的理解AR不应该是这个样子吗?

![gif](img/AR-girl.gif)
![gif](img/AR-meinv.gif)

```
为什么就变成摄像头识别文字了呢
有人会说，你没看扫到“福”之后有个烟花的效果吗？人家这就是虚实结合
其实说到底就是 OCR 文字识别 + 五毛特效
```

又到了百度百科的时间了，什么是 **OCR** 呢？

```
OCR （Optical Character Recognition，光学字符识别）
是指电子设备（例如扫描仪或数码相机）检查纸上打印的字符，
通过检测暗、亮的模式确定其形状，然后用字符识别方法将形状翻译成计算机文字的过程
```

我们只要识别出“福”字，那么问题就很简单了

#### pytesseract

* 1.安装 PIL 库
 * pip install pillow
* 2.下载安装 ocr 的库，这里我们选择 tesseract-ocr
 * https://github.com/tesseract-ocr/tesseract
* 3.下载安装Python 的 tesseract 驱动模块
 * pip install pytesseract
* 4.下载 tesseract 的简体中文训练数据集（放在 tessdata 目录里）
 * https://github.com/tesseract-ocr/tessdata/raw/master/chi_sim.traineddata


#### 怎么使用

```python
# coding:utf-8

from PIL import Image
import pytesseract

print pytesseract.image_to_string(Image.open('图片路径/XX.jpg'), lang='chi_sim')
```

```
当然，这种通用 ocr 模块并不总那么靠谱,
就像我大表哥马云家里那样，
有时候你扫一扫"逼"都可以扫出来敬业福呢
最后，希望各位勤劳好学的宝宝们，在酒足饭饱之后、
吐槽春晚之余、麻将点炮之前，继续关注我的@猿来如此
```
