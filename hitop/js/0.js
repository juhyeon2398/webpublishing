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
var lnb=$("#lnb .listBox > a");
lnb.on("click",function(e){
    e.preventDefault();
    $(this).next().stop().slideToggle();
});