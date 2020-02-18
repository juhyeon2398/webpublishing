new Swiper("#mainVisual",{
    speed:1000,
    effect:"fade",
    loop:true,
    navigation: {
        prevEl:"#mainVisual .btnPrev",
        nextEl:"#mainVisual .btnNext",
    },
    autoplay: {
        delay:3000,
    }
});

$(".btnAll").on("click",function(){
    $("body").toggleClass("open");
    $("#gnb").stop().slideToggle();
    $("#gnb .depth02").stop().delay(450).slideUp();
    return false;
})
$("#gnb .list .depth01").on("click",function(){
    $(this).parent().siblings().find(".depth02").stop().slideUp();
    $(this).next(".depth02").stop().slideToggle();
    $(this).parent().toggleClass("on");
    $(this).parent().siblings().removeClass("on");
    return false;
})
new Swiper("#business .container",{
    speed:600,
    loop:true,
    spaceBetween:10,
    slidesPerView:2,
    centeredSlides:true
});