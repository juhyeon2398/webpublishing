var gnb = $("#gnb .list>li");
var header =$("#header");


gnb.on("mouseenter",function(){
    console.log("hover");
    header.addClass("on");
}),
gnb.on("mouseleave",function(){
    header.removeClass("on");
})

new Swiper("#mainVisual",{
    seed:1000,
    loop:true,
    effect:"fade",
    navigation: {
        nextEl: '#mainVisual .right',
        prevEl: '#mainVisual .left',
    },
    autoplay:{
        delay:5000,
        // disableOnInteraction:false,
    },
})
AOS.init();
Splitting();
