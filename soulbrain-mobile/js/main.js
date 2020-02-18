var mainVisual = new Swiper("#mainVisual",{
    speed:1000,
    effect:"fade",
    loop:true,
    pagination: {
        el:"#mainVisual .pagination .bullets",
        clickable:true,
    },
    autoplay: {
        delay:5500,
        disableOnInteraction:false,
    },
    navigation: {
        prevEl:"#mainVisual .btnPrev",
        nextEl:"#mainVisual .btnNext"
    }
});

var partners = new Swiper("#partners .mask",{
    speed:500,
    loop:true,
    slidesPerView:"auto",
    spaceBetween:0,
    navigation: {
        prevEl:"#partners .btnPrev",
        nextEl:"#partners .btnNext"
    }
});



var gnb = $("#gnb > .list > li");
var header = $("#header");

var btnStop = $("#mainVisual .btnStop");
var btnPlay = $("#mainVisual .btnPlay");

var btnLanguage = $("#header .utilMenu .language > a");
btnLanguage.on("click",function(){
    $(this).next().stop().slideToggle(250);
    return false;
});


btnStop.on("click",function(){
    mainVisual.autoplay.stop();
    btnStop.style.display="none";
    btnPlay.style.display="block";
});
btnPlay.on("click",function(){
    mainVisual.autoplay.start();
    btnStop.style.display="block";
    btnPlay.style.display="none";
});

gnb.on("mouseenter",function(){
    // header.addClass("on");
});
gnb.on("mouseleave",function(){
    //header.removeClass("on");
});



$("#header .btnAll").on("click",function(){
    if( !$("body").hasClass("isMobile") ){
        $("#header #gnbAll").slideToggle();
        $(this).toggleClass("on");
    } else {
        $("body").toggleClass("open");
        $(this).toggleClass("on");
        $("#gnb .list .depth02").stop().delay(500).slideUp();
    }

    return false;
})

var lnb = $("#lnb .listBox > a");
lnb.on("click",function(e) {
    e.preventDefault();
    $(this).next().stop().slideToggle();
});

var tab = $(".tabList > li");
tab.on("click",function(e){
    e.preventDefault();
    var targetContents = $(this).parent().data("tab-contents");
    
    $(targetContents).children("li").eq($(this).index()).addClass("on");
    $(targetContents).children("li").eq($(this).index()).siblings().removeClass("on");

    $(this).siblings().removeClass("on");
    $(this).addClass("on");
    
});

$("#gnb > .list .depth01").on("click",function(){
    $(this).next(".depth02").stop().slideToggle();
    $(this).parent().siblings().find(".depth02").stop().slideUp();
    return false;
});

$(window).on("scroll",function() {
    var st = $(window).scrollTop();
    if(st>0) {
        header.addClass("scroll");
    } else {
        header.removeClass("scroll");
    }
})

//dom (Document Object Model) manipulation