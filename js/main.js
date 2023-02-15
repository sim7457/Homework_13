$(function () {
    var slideDots = $(".slick-dots li");
    var slideItem = $(".main_slide figure");
    var direction = false;

    var mainSlider = $('.main_slide').slick({
        dots: true,
        draggable: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: "cubic-bezier(.47,.46,.22,1)",
        speed: 1600,
        swipe: false,
    });

    slideItem.eq(1).addClass("on");

    mainSlider.on("afterChange", function (event, slick, current) {
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.eq(current + 1).addClass("on").siblings().removeClass("on");
        direction = true;
    });
    mainSlider.on("beforeChange", function (event, slick, current, next) {
        direction ? v = "+" : v = "-";
        slideItem.eq(current + 1).animate({ backgroundPositionX: v - 500 }, 1000).siblings().css({ backgroundPositionX: 0 });
    });

    //content-slider
    var contentSlider01 = $(".content-slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 400,
        //centerMode: true,
        //variableWidth: true,
        //https://cubic-bezier.com/ 베지어 곡선 만들기
        //cssEase:"cubic-bezier(.69,-1.31,.74,1.17)",
        cssEase: "cubic-bezier(0,0,.58,1)",
    });

});