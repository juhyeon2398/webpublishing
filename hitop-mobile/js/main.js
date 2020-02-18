new Swiper("#mainVisual",{
    speed:1000,
    effect:"fade",
    loop:true,
    navigation: {
        nextEl: "#mainVisual .btnNext",
        prevEl: "#mainVisual .btnPrev",
    },
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: "#mainVisual .pagination",
        type: "bullets",
        clickable:true,
    },
});
$(".btnAll").on("click",function(){
    $("body").toggleClass("open");
    $("#gnb .list .depth02").stop().delay(500).slideUp();   
});
$("#gnb .list .depth01").on("click",function(){
    $(this).parent().siblings().find(".depth02").stop().slideUp();
    $(this).next(".depth02").stop().slideToggle();
    $(this).parent().toggleClass("on");
    $(this).parent().siblings().removeClass("on");
    return false;
});
$(window).on("scroll",function(){
    var st = $(window).scrollTop();
    if(st>0){
        $("#header").addClass("scroll");
    } else {
        $("#header").removeClass("scroll");
    }
})




document.documentElement.addEventListener('touchstart', function (event) { 
    if (event.touches.length > 1) { 
        event.preventDefault(); 
    }
}, false);

new Swiper("#news .container",{
    speed:600,
    loop:true,
    spaceBetween:30,
});