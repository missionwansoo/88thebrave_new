//2023-12-14 update

$(document).ready(function() {

    //loading
    setTimeout(function() {
        $('#loading').fadeOut(500);
    }, 1000);

    //navigation_top a
    $('.navigation_top .nav_item a').on('click', function(e) {
        e.preventDefault();

        const targetId = $(this).attr('href').substring(1);
        const targetElement = $('#' + targetId);

        $('html, body').animate({
            scrollTop: targetElement.offset().top
        }, 800);
    });
    $('.nav_mbar .mbar_item .item_link a').on('click', function(e) {
        e.preventDefault();

        const targetId = $(this).attr('href').substring(1);
        const targetElement = $('#' + targetId);

        $('html, body').animate({
            scrollTop: targetElement.offset().top
        }, 800);

        if ($(".nav_mbar .mbar_bg").is(":visible") != true){
            $(".nav_mbar .mbar_bg").fadeIn(500);
            $(".nav_mbar .mbar_item").addClass("on");
            $(".nav_mbar .icon_mbar").addClass("on");
        } else{
            $(".nav_mbar .mbar_bg").fadeOut(500);
            $(".nav_mbar .mbar_item").removeClass("on");
            $(".nav_mbar .icon_mbar").removeClass("on");
        }
    });

    //navigation_top a hover
    $('.nav_icon .icon_item.item1 a').hover(
        function() {
            $(".nav_icon .icon_item.item1 .item_box").fadeIn(200);
            $(".nav_icon .icon_item.item1 .triangle").fadeIn(200);
        },
        function() {
            $(".nav_icon .icon_item.item1 .item_box").fadeOut(200);
            $(".nav_icon .icon_item.item1 .triangle").fadeOut(200);
        }
    );
    $('.nav_icon .icon_item.item2 a').hover(
        function() {
            $(".nav_icon .icon_item.item2 .item_box").fadeIn(200);
            $(".nav_icon .icon_item.item2 .triangle").fadeIn(200);
        },
        function() {
            $(".nav_icon .icon_item.item2 .item_box").fadeOut(200);
            $(".nav_icon .icon_item.item2 .triangle").fadeOut(200);
        }
    );

    //navigation_top mbar
    $(".nav_mbar .icon_mbar").click(function() {
        if ($(".nav_mbar .mbar_bg").is(":visible") != true){
            $(this).addClass("on");
            $(".nav_mbar .mbar_bg").fadeIn(500);
            $(".nav_mbar .mbar_item").addClass("on");
        } else{
            $(this).removeClass("on");
            $(".nav_mbar .mbar_bg").fadeOut(500);
            $(".nav_mbar .mbar_item").removeClass("on");
        }
    });

    //section3_item2 slider
    $(".section3_item2 .section_list1 .list_item").eq(0).siblings().removeClass("on");
	$(".section3_item2 .section_list2 .list_item").eq(0).siblings().removeClass("on");

    var slideI=0;
    var inter = setInterval(callslideI,2000);
	
	function callslideI() {
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }
        
        $(".section3_item2 .section_list1 .list_item").eq(slideI).siblings().removeClass("on");
        $(".section3_item2 .section_list1 .list_item").eq(slideI).addClass("on");
        $(".section3_item2 .section_list2 .list_item").eq(slideI).siblings().removeClass("on");
        $(".section3_item2 .section_list2 .list_item").eq(slideI).addClass("on");
	}

	$(".section3_item2 .section_list1 .list_item.item1").click(function() {
        $(".section3_item2 .section_list1 .list_item").removeClass("on");
        $(this).addClass("on");
        $(".section3_item2 .section_list2 .list_item").removeClass("on");
        $(".section3_item2 .section_list2 .list_item.item1").addClass("on");
        clearInterval(inter);
	});
    $(".section3_item2 .section_list1 .list_item.item2").click(function() {
        $(".section3_item2 .section_list1 .list_item").removeClass("on");
        $(this).addClass("on");
        $(".section3_item2 .section_list2 .list_item").removeClass("on");
        $(".section3_item2 .section_list2 .list_item.item2").addClass("on");
        clearInterval(inter);
	});
    $(".section3_item2 .section_list1 .list_item.item3").click(function() {
        $(".section3_item2 .section_list1 .list_item").removeClass("on");
        $(this).addClass("on");
        $(".section3_item2 .section_list2 .list_item").removeClass("on");
        $(".section3_item2 .section_list2 .list_item.item3").addClass("on");
        clearInterval(inter);
	});

    //clients horizontal-scroll
    let scrollWidth = 500;
  
    $('.section5 .container_item').each(function () {
        scrollWidth += $(this).width() * 0.9;
    });
    $('.section5 .section5_scroll').css('height', scrollWidth + 'px');

    const $scrollSection = $('.section5 .section5_scroll');
    const $scrollContent = $('.section5 .container_item');

    let lastScrollPosition = 0;

    $(document).scroll(function() {
        let scrolled = $(window).scrollTop();
        const sectionOffset = Math.abs($scrollSection.offset().top - scrolled);
        const notReachedBottom = parseInt(Math.max(0, $scrollSection[0].getBoundingClientRect().bottom - $(window).height()));

        const adjustedOffset1 = sectionOffset * 1.2;

        if ($scrollSection.offset().top <= scrolled && notReachedBottom) {
            $scrollContent.css('transform', 'translateX(' + (-adjustedOffset1) + 'px)');
        }
        if ($(window).width() < 991) {
            const adjustedOffset2 = sectionOffset * 1.3;

            if ($scrollSection.offset().top <= scrolled && notReachedBottom) {
                $scrollContent.css('transform', 'translateX(' + (-adjustedOffset2) + 'px)');
            }
        }
        if ($(window).width() < 576) {
            const adjustedOffset3 = sectionOffset * 1.5;

            if ($scrollSection.offset().top <= scrolled && notReachedBottom) {
                $scrollContent.css('transform', 'translateX(' + (-adjustedOffset3) + 'px)');
            }
        }
        if ($(window).width() < 410) {
            const adjustedOffset4 = sectionOffset * 1.7;

            if ($scrollSection.offset().top <= scrolled && notReachedBottom) {
                $scrollContent.css('transform', 'translateX(' + (-adjustedOffset4) + 'px)');
            }
        }
    });
	
});

$(window).scroll(function() {

    var windowBottom = $(this).scrollTop() + $(this).height() - 100;
        
    $('.effect').each(function() {
        var sectionTop = $(this).offset().top;

        if (sectionTop <= windowBottom) {
            $(this).addClass('action');
        } else {
            $(this).removeClass('action');
        }
    });

	var scroll = $(window).scrollTop();
	
	if (scroll >= 1) {
		$(".navigation_top").addClass("on");
	} else {
	  	$(".navigation_top").removeClass('on');
	}

    var windowHeight = window.innerHeight / 3;
    var ifMotion1 = $('.motion1');
    var section4_wrap = $('#layout-wrapper .section4 .wrap');
    
    if (ifMotion1.length) {
        var motion1 = ifMotion1.offset().top - windowHeight;

        if ($(window).scrollTop() > motion1 && !ifMotion1.hasClass('on')) {
            ifMotion1.addClass('on');
            section4_wrap.addClass('on');
        } else if ($(window).scrollTop() <= motion1 && ifMotion1.hasClass('on')) {
            ifMotion1.removeClass('on');
            section4_wrap.removeClass('on');
        }
    }

    var sectionBottom = $('#wareHousing .wrap').offset().top + $('#wareHousing .wrap').outerHeight();
    var scrollPosition = $(window).scrollTop() + $(window).height();
    if (scrollPosition >= sectionBottom) {
        $('#wareHousing').addClass('off');
    } else {
        $('#wareHousing').removeClass('off');
    }

    var video1img = $('#video1 .video_img');
    var video1 = $('#video1 #video1_item');

    video1.on('loadeddata', function() {
        video1img.hide();
        video1.show();
    });

    var video2img = $('#video2 .video_img');
    var video2 = $('#video2 #video2_item');

    video2.on('loadeddata', function() {
        video2img.hide();
        video2.show();
    });


});
