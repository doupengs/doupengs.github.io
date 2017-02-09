
$('#fp-inner').fullpage({
	page: '.page',
    start: 0,
    duration: 500,
    drag: false,
    loop: true,
    dir: 'v',
    change: function () {},
    beforeChange: function (e) {

    },
    afterChange: function (e) {
    	if (e.cur == "0") {	
    		$('.page1 h2').addClass('animated tada');
    		$('.page1 img').addClass('animated fadeInDown');
    		$('.page1 h3').addClass('animated fadeInUp');

	   		$(".page1 audio")[0].play();
            for (var i, i = 0;i < 5;i++) {
                $(".page2 .subtalk").find("audio")[i].pause();
                $(".page2 .subtalk").find("audio")[i].load();
            }
    	}

    	if (e.prev == "0") {	
    		$('.page1 h2').removeClass('animated tada');
    		$('.page1 img').removeClass('animated fadeInDown');
    		$('.page1 h3').removeClass('animated fadeInUp');
    	} 


    	if (e.cur == "1") {
    		$('.page2 .subtalk').css("visibility", "visible");
    		$('.page2 .left').addClass('animated fadeInLeft');
    		$('.page2 .right').addClass('animated fadeInRight');

    		$(".page2 audio")[0].play();
    	}
    	if (e.prev == "1") {
    		$('.page2 .subtalk').css("visibility", "hidden");
    		$('.page2 .left').removeClass('animated fadeInLeft');
    		$('.page2 .right').removeClass('animated fadeInRight');
    	}

    	if (e.cur == "2") {	
    		$(".page3 audio")[0].play();
    		$('.page3 li img').addClass('zoom');
    		for (var i, i = 0;i < 5;i++) {
    			$(".page2 .subtalk").find("audio")[i].load();
    		}
    	}

    	if (e.prev == "2") {	
    		$('.page3 li img').removeClass('zoom');
    		for (var i, i = 0;i < 5;i++) {
    			$(".page2 .subtalk").find("audio")[i].pause();
    		}
    		$(".page3 audio")[0].pause();	
    	}

    	if (e.cur == "3") {	
    		$(".page4 .readme").addClass('animated rubberBand');

    		$(".page4 audio")[0].play();		
    	}
    	if (e.prev == "3") {	
    		$(".page4 .readme").removeClass('animated rubberBand');	
    		$(".page4 audio")[0].pause();	
    	}
    },
    orientationchange: function () {}
});


$('#next').on('click', function (e) {
    e.preventDefault();
    $.fn.fullpage[$(this).data('dir')](true);
});

$(".page2 ul").click(function(e) {
	var a = $(".page2 .subtalk").find("audio");
	for (var i, i = 0;i < a.length;i++) {
		if (!a[i].paused) {
			a[i].pause();
		}
	}	
    
	$(e.target).find("audio")[0].play();
});

