$(function() {
	var c = new Coder("style-text");
	c.load("<p><div class='bef_comment writecode'>/*</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;你好,我的名字叫窦朋，是北京一家互联网创业公司的Python工程师</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;我的主要工作是数据采集，爬虫程序的开发</div>",2000);
	c.load("<div class='bef_comment writecode'>&nbsp;让我们来接着往下看吧</div>");
	c.load("<div class='bef_comment writecode'>*/</div></p>");
	c.load("<p><div class='bef_comment writecode'>/*</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;我们开始吧,我们先来让所有的变化都以动画的效果来显示</div>");
	c.load("<div class='bef_comment writecode'>*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>*</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transition</span>: <span class='bef_value'> all 1s</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/*</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;看起来似乎没什么变化，不要着急，接下来你就会看到</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;你是不是厌倦了白底黑字</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;那么让我们来做一些改变</div>");
	c.load("<div class='bef_comment writecode'>*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>html</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(63, 82, 99)</span>;</div>");
	c.setClass("html", [{
		"name": "background",
		"val": "rgb(63, 82, 99)"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/*</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;稍等，我们来改变一下字体的颜色</div>");
	c.load("<div class='bef_comment writecode'>*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre,a</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>color</span>: <span class='bef_value'>white</span>;</div>");
	c.setClass("pre,a", [{
		"name": "color",
		"val": "white"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/*</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;现在看起来好多了</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;在这整个页面里写代码让人有些不舒服</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;我准备创建一个区域来更好的显示我的代码</div>");
	c.load("<div class='bef_comment writecode'>*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre</span><span class='bef_key'>:not(:empty)</span> {</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>overflow</span>: <span class='bef_value'>hidden</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "overflow",
		"val": "hidden"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>background</span>: <span class='bef_value'>rgb(48, 48, 48)</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "background",
		"val": "rgb(48, 48, 48)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>border</span>: <span class='bef_value'>1px solid #ccc</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "border",
		"val": "1px solid #ccc"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>max-height</span>: <span class='bef_value'>44.6%</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "max-height",
		"val": "44.6%"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>width</span>: <span class='bef_value'>49%</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "width",
		"val": "49%"
	}]);
	$('#pre:not(:empty)').addClass("toarea");
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-size</span>: <span class='bef_value'>14<span class='bef_px'>px</span></span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "font-size",
		"val": "14px"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>font-family</span>: <span class='bef_value'>monospace</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "font-family",
		"val": "monospace"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>padding</span>: <span class='bef_value'>10<span class='bef_px'>px</span> 10<span class='bef_px'>px</span> 20<span class='bef_px'>px</span></span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "padding",
		"val": "10px 10px 20px"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>box-shadow</span>: <span class='bef_value'>-4<span class='bef_px'>px</span> 4<span class='bef_px'>px</span> 2<span class='bef_px'>px</span> 0 rgba(0,0,0,0.3)</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "box-shadow",
		"val": "-4px 4px 2px 0 rgba(0,0,0,0.3)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>white-space</span>: <span class='bef_value'>pre-wrap</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "white-space",
		"val": "pre-wrap"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>outline</span>: <span class='bef_value'>0</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "outline",
		"val": "0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/*</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;OK，现在让我们来换一下位置</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;让我们准备来再做一些改变</div>");
	c.load("<div class='bef_comment writecode'>*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>-webkit-transform</span>: <span class='bef_value'>translateX(95%)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(95%)"
	}]);
  	c.load("<div class='code writecode'>&nbsp;<span class='bef_key'>position</span>: <span class='bef_value'>absolute</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "position",
		"val": "absolute"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/*</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;现在看起来好多了，但是所有的文字颜色都是白色的</div>");
	c.load("<div class='bef_comment writecode'>&nbsp;让我们来让他的可读性更好一点吧</div>");
	c.load("<div class='bef_comment writecode'>*/</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>.comment</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#857F6B</span>; <span class='bef_key'>font-style</span>: <span class='bef_value'>italic</span>; }</div>");
	c.addClass(".bef_comment","comment");
	c.load("<div class='code writecode'><span class='bef_selector'>.selector</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#E69F0F</span>; }</div>");
	c.addClass(".bef_selector","selector");
	c.load("<div class='code writecode'><span class='selector'>.selector .key</span>&nbsp;{ <span class='bef_key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.addClass(".bef_key","key");
	c.load("<div class='code writecode'><span class='selector'>.key</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.load("<div class='code writecode'><span class='selector'>.value</span>&nbsp;{ <span class='key'>color</span>: <span class='bef_value'>#BE84F2</span>; }</div>");
	c.addClass(".bef_value","value");
	c.load("<div class='code writecode'><span class='selector'>.value.px</span>&nbsp;{ <span class='key'>color</span>: <span class='value'>#F92772</span>; }</div></p>");
	c.addClass(".value .bef_px","px");
	c.load("<p><div class='comment writecode'>/*</div>");
	c.load("<div class='comment writecode'>&nbsp;现在我们差不多都准备好了</div>");
	c.load("<div class='comment writecode'>&nbsp;让我们最后再来做一些3D旋转</div>");
	c.load("<div class='comment writecode'>*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#content</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-perspective</span>: <span class='value'>1000<span class='px'>px</span></span>;</div>");
  	c.setClass("#content", [{
		"name": "-webkit-perspective",
		"val": "1000px"
	}]);
  	c.load("<div class='code writecode'>}</div></p>");
  	c.load("<p><div class='code writecode'><span class='selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>translateX(98.5%) rotateY(-10deg)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(98.5%) rotateY(-10deg)"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>right</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform-origin",
		"val": "right"
	}]);
	c.load("<div class='code writecode'>&nbsp;<span class='key'>max-height</span>: <span class='value'>94.5%</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "max-height",
		"val": "94.5%"
	}]);
  	c.load("<div class='code writecode'>}</div></p>");
  	c.load("<p><div class='comment writecode'>/*</div>");
	c.load("<div class='comment writecode'>&nbsp;现在我们差不多可以开始写我的简历了</div>");
	c.load("<div class='comment writecode'>&nbsp;我相信你来这不只是为了看这些漂亮的颜色</div>");
	c.load("<div class='comment writecode'>*/</div></p>");
	c.addClass("#work-text","pre_work-text");
	c.load("<p><div class='code writecode'><span class='selector'>pre</span><span class='key'>:not(#style-text)</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(10deg)</span>;</div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform-origin</span>: <span class='value'>left</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	var r = new Coder("work-text");
	r.load("<div id='md'></div>");
	var w = new Coder("md");
	w.load("<div style='margin:0 auto; width:1000px;'><div class='resumeBody'><div class='summary'>");
    w.load('<img width="144" height="256" align="right" class="headerImg" alt="窦朋" src="http://mypics.zhaopin.com/pic/2017/3/2/4CFF8AC9C1334A6CB9FAF2FFFD2D4D32.jpg" />');
    w.load("<small><font color='#FFD39B'>简历更新日期：2017-03-02</font></small>");
    w.load('<hr align="left" color="#FFD39B" width="50%">');
    w.load('<h1>窦朋</h1>');
    w.load('<b>男 | 汉 | 未婚 | 1993年2月 | 2年工作经验</b><br>');
    w.load('<b>2011/09-2015/06 河北大学-本科 英语|俄语-四级</b><br>');
    w.load('<b>户口</b>：辽宁盘锦 | <b>现住</b>：北京昌平<br>');
    w.load('<b>电话</b>：15133212263<br>');
    w.load('<b>邮箱</b>：doupeng93@foxmail.com<br>');
    w.load('<b>微信</b>：peng113783<br>');
    //w.load('<img width="200" height="200" src="https://raw.githubusercontent.com/doupengs/doupengs.github.io/master/img/wechat-me.jpg" />');
    //w.load('<b>QQ</b>：724488033</div>');
    w.load('<h3><font color="#EEAD0E">求职意向</font></h3>');
    w.load('<dd><ul>');
    w.load('<li><strong>工作性质：</strong>全职</li>');
    w.load('<li><strong>期望职业：</strong>python工程师</li>');
    w.load('<li><strong>期望行业：</strong>互联网</li>'); 
    w.load('<li><strong>工作地区：</strong>全国</li>');
    w.load('<li><strong>期望月薪：</strong>10-15k</li>');
    w.load('<li><strong>目前状况：</strong>我目前在职，正考虑换个新环境</li></ul></dd>');
    w.load('<h3><font color="#EEAD0E">我的主页</font></h3>');
    w.load("<dd><ul>");
    w.load("<li><strong>个人博客：</strong><a href='https://doupengs.github.io' style='text-decoration: none;'>https://doupengs.github.io</a></li>");
    w.load("<li><strong>Github首页：</strong><a href='https://github.com/doupengs' style='text-decoration: none;'>https://github.com/doupengs</a></li>");
    w.load('<li><strong>个人微信公众号：</strong>苦短人生遂学python | py_code_boy</li></ul></dd>');
    w.load('<h3><font color="#EEAD0E">自我评价</font></h3>');
    w.load('生活中自己是一个乐观向上的人，工作中喜欢明确的分工，有团队意识和责任心，有一点强迫症，但我认为在写代码上是好事，所以我又良好的代码风格，工作中遇到什么难题，我首先会找在网上查阅相关资料，喜欢自学专研，解决不了的难题会像有经验的前辈请教，因为我觉得自己就是这么一步步走过来的，我觉得不怕有什么你不会的，而是就怕你知道不会而不想去了解，去学习。');
    w.load('<h3><font color="#EEAD0E">工作经历</font></h3>');
    w.load('2016/07 - 至今<br>');
    w.load('<b>北京国诚信征信有限公司 | Python爬虫工程师</b><br>');
    w.load('<strong>工作描述：</strong><br>');
    w.load('1. 爬虫框架的开发，2. 个人和企业正负面信息的归集，3. 舆情信息的抓取');
    w.load('<hr>');
    w.load('2015/06 - 2016/07<br>');
    w.load('<b>北京智慧星光信息技术有限公司 | Python爬虫工程师</b><br>');
    w.load('<strong>工作描述：</strong><br>');
    w.load('1. 负责舆情数据的采集,根据客户需求有针对性的抓取，客户关注的地方论坛贴吧，各类新闻网站，网友评论。[频道，标题，作者，发布时间，抓取时间，评论数，点击数，内容正文等字段]，2. 根据客户需求抓取对应，商店的商品信息 [分类，名称，描述，价格，评论等字段]，音乐网站的歌曲信息 [歌手，歌名，专辑等字段]');                       
    w.load('<h3><font color="#EEAD0E">项目经验</font></h3>');          
    w.load('2016/07 - 2016/10<br>');       
    w.load('<b>爬虫框架的开发</b><br>'); 
    w.load('<strong>项目简介：</strong><br>'); 
    w.load('主要开发适合公司使用的舆情新闻抓取的爬虫框架<br>'); 
    w.load("项目Github地址：<a href='https://github.com/doupengs/dpspider' style='text-decoration: none;'>https://github.com/doupengs/dpspider</a><br>"); 
    w.load("个人博客的文档介绍：<a href='https://doupengs.github.io/tags/#dpspider' style='text-decoration: none;'>https://doupengs.github.io/tags/#dpspider</a>");    
    w.load('<hr>'); 
    w.load('2016/11 - 2017/01<br>'); 
    w.load('<b>微信聊天机器人(个人)<b><br>'); 
    w.load('<strong>项目简介：</strong><br>'); 
    w.load('使用爬虫和网页解析等相关知识，利用微信web接口，使用Python模拟微信登陆过程，使用网上免费的聊天机器人的API，可布置在服务器上的微信聊天机器人'); 
    w.load('<hr>'); 
    w.load('2016/10 - 2016/11<br>'); 
    w.load('<b>各网站爬虫程序开发</b><br>'); 
    w.load(' <strong>项目简介：</strong><br>'); 
    w.load('1. 个人和企业社会负面信息收集；(1)中国裁判文书网-裁判文书的抓取。(2)各地政府发布的负面清单-对于各企业的行政处罚信息。(3)中国住建部-建筑行业的招投标相关信息。'); 
    w.load('2. 舆情新闻：根据各大新闻门户网站新闻的更新频率，即时抓取新闻入库，主要包括以下新闻门户:腾讯网，新浪网，凤凰网，人民网，网易，中国新闻网等等...'); 
    w.load('3. 天涯论坛帖子的抓取:包括: 标题，链接，发布时间，作者，正文，评论，楼层，阅读数，评论数 等字段,数据入库，定时抓取。'); 
    w.load('<h3><font color="#EEAD0E">职业技能</font></h3>'); 
    w.load('01. 掌握使用urllib,urllib2以及第三方库requests。<br>'); 
    w.load('02. 页面解析方面使用re,json,xpath, beautifulsoup,pyquery。<br>'); 
    w.load('03. 了解scrapy,pyspider等python流行爬虫框架。<br>');
    w.load('04. selenium和phantomjs结合使用得到渲染后的网页源代码。<br>'); 
    w.load('05. 利用python对TXT,pdf.csv等类型文件的操作。<br>'); 
    w.load('06. 利用api接口抓取网页数据。<br>'); 
    w.load('07. 多线程与多进程的使用。<br>'); 

	c.load("<p><div class='comment writecode'>/*</div>");
	c.load("<div class='comment writecode'>&nbsp;最后让我们先给他来点动态渲染</div>");
	c.load("<div class='comment writecode'>*/</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#work-text</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateX(0deg) rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#work-text #md</span> { </div>");
	c.load("<div class='code writecode'>&nbsp;<span class='key'>-webkit-transform</span>: <span class='value'>rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='comment writecode'>/*</div>");
	c.load("<div class='comment writecode'>&nbsp;好了，让我们准备</div>");
	c.load("<div class='comment writecode'>&nbsp;</div>");
	c.load("<div class='comment writecode'>&nbsp;3....</div>");
	c.load("<div class='comment writecode'>&nbsp;2....</div>");
	c.load("<div class='comment writecode'>&nbsp;1....</div>");
	c.load("<div class='comment writecode'>&nbsp;差不多了，让简历动起来！</div>");
	c.load("<div class='comment writecode'>*/</div></p>");
	c.setClass("#work-text", [{
		"name": "-webkit-transform",
		"val": "rotateX(0deg) rotateY(190deg) rotateZ(180deg)"
	}]);
	c.setClass("#work-text #md", [{
		"name": "-webkit-transform",
		"val": "rotateY(190deg) rotateZ(180deg)"
	}]);
	//c.load("<p><div class='comment writecode'>/**</div>");
	//c.load("<div class='comment writecode'>&nbsp;*对于文本，我们可以再做一点微调</div>");
	//c.load("<div class='comment writecode'>&nbsp;*/</div></p>");
	//c.load("<p><div class='code writecode'><span class='selector'>#md</span> { </div>");
	//c.load("<div class='code writecode'>&nbsp;<span class='key'>font-family</span>: <span class='value'>'Helvetica Neue', Helvetica, sans-serif</span>;</div>");
	//c.setClass("#md", [{
		//"name": "font-family",
		//"val": "'Helvetica Neue', Helvetica, sans-serif"
	//}]);
	//c.load("<div class='code writecode'>}</div></p>");
	//c.load("<p><div class='code writecode'><span class='selector'>#md h1</span> { </div>");
	//c.load("<div class='code writecode'>&nbsp;<span class='key'>border-bottom</span>: <span class='value'>1px solid #ccc</span>;</div>");
	//c.setClass("#md h1", [{
		//"name": "border-bottom",
		//"val": "1px solid #ccc"
	//}]);
	//c.load("<div class='code writecode'>&nbsp;<span class='key'>padding-bottom</span>: <span class='value'>5px</span>;</div>");
	//c.setClass("#md h1", [{
		//"name": "padding-bottom",
		//"val": "5px"
	//}]);
	//c.load("<div class='code writecode'>}</div></p>");
	//c.load("<p><div class='code writecode'><span class='selector'>#md li</span> { </div>");
	//c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>5<span class='px'>px</span> 0</span>;</div>");
	//c.setClass("#md li", [{
		//"name": "margin",
		//"val": "5px 0"
	//}]);
	//c.load("<div class='code writecode'>}</div></p>");
	//c.load("<p><div class='code writecode'><span class='selector'>#md h1,#md ul</span> { </div>");
	//c.load("<div class='code writecode'>&nbsp;<span class='key'>margin</span>: <span class='value'>0</span>;</div>");
	//c.setClass("#md h1,#md ul", [{
		//"name": "margin",
		//"val": "0"
	//}]);
	//c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='comment writecode'>/*</div>");
	c.load("<div class='comment writecode'>&nbsp;这样基本上就差不多了</div>");
	c.load("<div class='comment writecode'>&nbsp;最后非常感谢您愿意花3分钟看完我的简历！</div>");
	c.load("<div class='comment writecode'>*/</div></p>");

});

var m = 0;

var Coder = function(dom) {
	this._dom = dom;
};

Coder.prototype = {
	constructor: Coder,
	load: function(code, second) {
		var dom = this._dom;
		var o = this;
		var _second = second ? second : 1000;
		_second = m + _second;
		setTimeout(function() {
			$('#' + dom).scrollTop( $('#' + dom)[0].scrollHeight );
			$("#" + dom).append(code);
		}, _second);
		m = _second;
	},
	setClass: function(dom, styles,second) {
		var _second = second ? second : 0;
		_second = m + _second;
		for (var i in styles) {
			setTimeout(function() {
				$(dom).css(styles[i].name, styles[i].val);
			}, _second);
		}
		m = _second;
	},
	addClass:function(dom,className){
		var second = m;
		setTimeout(function() {
			$(dom).addClass(className);
		}, second);
	}
}