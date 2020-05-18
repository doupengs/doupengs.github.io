var defaultName = {
    title: '❥钰儿 520 快乐❤',
    from: '~爱你的四月哥哥',
    to:   '~我的钰儿',
    wish: '520 快乐！'
};

var hashKey = {
    key:     '?d~',
    from:    'f=',
    to:      't=',
    wish:    'w='
};

var url = {
    parse: function (hash) {
        var hash  = window.location.href || location.hash;

        var newHash = hash; // 关闭hash判断模块 @St. 2016-02-15-10.57

        //console.log('newHash: ' + newHash);
        //var queryIndex = newHash.indexOf(hashKey.symbol.key);
        var key = '?d=';
        var keyLen = key.length;

        // console.log(keyLen);

        var queryIndex = newHash.lastIndexOf(key);

        // console.log(newHash.slice(queryIndex + keyLen));

        var query = {};
        if (queryIndex !== -1) {
            query = newHash
                .slice(queryIndex + keyLen) //'?d~'
                .split('&')
                .reduce(function (result, item) {
                        item = item.split('=');
                        if (item[0]) {

                            // console.log(typeof item[1]);
                            // console.log(_this.decode(item[1]));
                            //
                            // result[item[0]] = decodeURI(item[1]);
                            result[item[0]] = item[1];
                        }

                        //console.log(result);

                        return result;
                    }, query);
            newHash = newHash.slice(0, queryIndex);
        }

        // return {
        //     //path:  newHash.slice(1),
        //     //query: query
        // };

        console.log(query);

        return query;


    }
};

var hash = {
    //query: url.parse(location.hash),
    query: url.parse(),
    judge: function(cons, defaultName){
        //console.log(cons !== defaultName);
        if(cons !== defaultName && cons !== undefined){
            //console.log(cons);
            return decodeURI(cons);
        }
        else {
            return defaultName;
        }
    },
    set: function(key){
        var query = this.query;
        //console.log(key);
        //console.log(query);
        if (key){
            if (key === 'to'){
                return this.judge(query.to, defaultName.to);
            }
            else if (key === 'from') {
                return this.judge(query.from, defaultName.from);
            }
            else if (key === 'wish') {
                return this.judge(query.wish, defaultName.wish);
            }
            else if (key === 'title') {
                return this.judge(query.title, defaultName.title);
            }
        }
    }
};


$(function(){
    var dom = [
        {
            name:   'section5',
            text:   '<div class="sectionIn">'+
                        '<p>献给<span id="hashTo"></span><br>' +
                            '<span id="hashWish"></span><br>' +
                            '来自<a href="https://doupengs.github.io"><span id="hashFrom"></span></a> <br> 2020-05-20' +
                        '</p>' +
                        '<div class="license">' +
                            '<br><br>' +
                            '▼' +
                        '</div>' +
                    '</div>'
        }, {
            name:   'section5',
            text:   '<div class="sectionIn">'+
                        '<h2></h2>' +
                        '<div class="license">' +
                            '<p>车马很慢</p>'+
                            '<p>书信很远</p>' +
                            '<p>一辈子只够做</p>' +
                            '<p>一件事</p>' +
                            '<p>一生只够爱</p>' +
                            '<p>一个人</p>' +
                            ''+
                            ''+
                        '</div>' +
                    '</div>'
       }
    ];

    // section5 & section6 添加dom
    $('#section5')[0].innerHTML = dom[0].text;
    $('#section6')[0].innerHTML = dom[1].text;


    // 给dom添加 hash截取的 3个字符串 to, wish和from（同时包含 decodeURI 转码过程）
    $('#hashTo').text(hash.set('to'));
    $('#hashWish').text(hash.set('wish'));
    $('#hashFrom').text(hash.set('from'));

    // 给封面title添加 hash截取的 title 字符串（同时包含 decodeURI 转码过程）
    $('#title').text(hash.set('title'));


    // 替换title标签文字
    $('title').append($('#hashTo').text() + '--来自' + $('#hashFrom').text());



    // 添加 jplayer 播放控件 dom
    $('body').append('<div id="jquery_jplayer_1" class="jp-jplayer"></div>'+
                     '<div id="jp_container_1" class="jp-audio" role="application" aria-label="media player">' +
                         '<button class="jp-play iconPlay" role="button" tabindex="0">play</button>' +
                     '</div>');
    // 初始化 jPlayer
    $("#jquery_jplayer_1").jPlayer({
        ready: function (event) {
            $(this).jPlayer("setMedia", {
                mp3: 'valentineDay/Shayne-Ward-Until-You.mp3'
            });
            // 设置自动播放，iOS safari 受安全限制无效，wechat可以自动播放
            $(this).jPlayer("play").jPlayer("repeat");
        },
        //swfPath: "js",
        supplied: "mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true,
        volume: 1
    });



});

// 当页面加载完毕时开始动画。
window.onload = function() {
    ani.init();
    updateSliderControl();
    addSmoothScrolling();
};

// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
  updateSliderControl();
  //locator.stop();
}

var ani = {
    init: function (){
        this.logo("#hvd");
        this.logo("#ani1");
        this.logo("#ani2");
        this.logo("#ani3");
        //this.robot();
    },
    logo: function (tag){
        TweenMax.fromTo(tag, 2, {
            // from
            css: {
              y: 0,
            }
            },{
            // to
            css: {
              y: "30px",
            },
            // 永久重复动画的选项
            repeat: -1,
            // 反转、重新运行动画的选项
            yoyo: true,
            // 改变 easing 类型
            ease: Sine.easeInOut
            }
        );
    }//,
//    robot: function () {
//       var tag = "#android-robot";
//       //var tag = document.querySelectorAll("#android-robot");
//       var t = new TimelineMax({yoyo: true, repeat: -1, ease: Sine.easeInOut});
//           t.to(tag, 1, {rotation: '-=10deg'})
//            .to(tag, 1, {rotation: '+=20deg'}); // 可以使用 += / -= 在原有角度上做动画
//    },
      // create a scene
  // var scene1 = new ScrollMagic.Scene({
  //         duration: 100,  // the scene should last for a scroll distance of 100px
  //         offset: 50      // start this scene after scrolling for 50px
  //     })
  //     .setPin("#my-sticky-element") // pins the element for the the scene's duration
  //     .addTo(controller); // assign the scene to the controller
    //scene1: function(){
//
//    }
};


// scene.setTween(TweenMax.to("obj"), 1, {x: 100});
// function windowHeight(){
//   return window.innerHeight;
// }


// build scene
//var scene = new ScrollMagic.Scene({
//                    triggerElement: "#intro-section",
//                    triggerHook: "onLeave" ,
//                    duration: window.innerHeight
//                })
//                .setTween("#mask", {opacity: 1}) // trigger a TweenMax.to tween
//                .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
//                .addTo(controller);


function updateSliderControl() {
    // 获得所有的 slider 链接
    var links = document.querySelectorAll("#slider-control a");
    for(var i = 0; i < links.length; i++) {
        var link = links[i];
        //console.log(link);
        var attr = link.getAttribute('href');
        // 获取被链接指向的部分
        //var section = document.querySelector('#intro-section', '#native', '#touch', '#android');
        var section = document.querySelector(attr);

        //console.log(section);


        var sectionTop    = section.offsetTop;
        var sectionBottom = sectionTop + window.innerHeight;  //  section.offsetHeight
        //var sectionBottom = sectionTop + section.offsetHeight;
        //console.log(section.offsetHeight);
        //console.log(sectionTop + " / " + sectionBottom);
        //console.log(window.scrollY);
        //console.log(window.scrollY);

        // 检查 window.scrollY 是否在这部分中
        if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            //console.log(attr);
            link.className = "active";
            //event.preventDefault();
            //location.hash = attr;
            //console.log(link);
        }
        else {
            link.className = "";
        }
    }
}


// 练习：网页滚动动画
function scrollToElement(element) {
  // create a scene
  // var scene1 = new ScrollMagic.Scene({
  //         duration: 100,  // the scene should last for a scroll distance of 100px
  //         offset: 50      // start this scene after scrolling for 50px
  //     })
  //     .setPin("#my-sticky-element") // pins the element for the the scene's duration
  //     .addTo(controller); // assign the scene to the controller

  //console.log(num);
  //console.log(element);

    //声明变量topOfElement = element.offsetTop
    var topOfElement = element.offsetTop;
    // window 的动画滚动，使用TweenMax plugins
    TweenMax.to(window, 1, {
    scrollTo: {
        y: topOfElement,
    },
        ease: Sine.easeInOut
    });
}

function addSmoothScrolling() {
    var links = document.querySelectorAll("#slider-control a");

    for(var i = 0; i < links.length; i++) {
        var link = links[i];

        //if (typeof window.addEventListener === 'function'){
        // 闭包
        (function (_link) {
            //console.log('_link: ' + _link);
            //console.log(link);
            link.addEventListener('click', function(event){
                /*
                  这里禁用了鼠标的点击事件, 会导致hash无法更新，
                  也就是说hash就没有作用了
                  动画是否可以考虑换一种逻辑方式，
                  利用hash的方式去执行窗体混动的动画呢？？？
                */
                event.preventDefault();
                var attr = _link.getAttribute('href');
                //console.log('href: ' + _link);
                scrollToElement(document.querySelector(attr));
                //location.hash = attr;
            });
        })(link);
    }
}
