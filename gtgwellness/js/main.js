$("#gnb .gnbList > li").on("mouseenter",function(){
    $("#gnb").addClass("on");
    $("#header").addClass("on");
    $("#gnb .depth02").stop().slideDown(200);
});
$("#gnb .gnbList > li").on("mouseleave",function(){
    $("#gnb").removeClass("on");
    $("#header").removeClass("on");
    $("#gnb .depth02").stop().slideUp(200);
});


let mainVisual  = new Swiper("#mainVisual",{
    effect:"fade",
    fadeEffect: {
        crossFade: true
    },
    loop:true,
    autoplay:{
        delay:5000,
    },
    pagination: {
        el:"#mainVisual .pagination .bullets",
        clickable:true,
    }
    
});
$("#mainVisual .btnStop").on("click",function(){
    mainVisual.autoplay.stop();
    $(this).hide();
    $(this).parent().find(".btnPlay").show();
})
$("#mainVisual .btnPlay").on("click",function(){
    mainVisual.autoplay.start();
    $(this).hide();
    $(this).parent().find(".btnStop").show();
})

let txtSlider = new Swiper("#media .mainBox .txtSlider",{
    effect:"fade",
    loop:true,
    navigation: {
        prevEl:"#media .btnPrev",
        nextEl:"#media .btnNext",
    }
});
let imgSlider = new Swiper("#media .mainBox .imgSlider",{
    effect:"fade",
    loop:true,
    navigation: {
        prevEl:"#media .btnPrev",
        nextEl:"#media .btnNext",
    }
});
let listSlider = new Swiper("#media .listBox .mask",{
    slidesPerView:"auto",
    spaceBetween:30,
    loop:true,
    navigation: {
        prevEl:"#media .btnPrev",
        nextEl:"#media .btnNext",
    }
});


$(".feqList li").on("click",function(){
    $(this).find("dd").stop().slideToggle();
    $(this).siblings().find("dd").stop().slideUp();
})