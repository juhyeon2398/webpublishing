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
$("#gnb .list > li").append('<div class="bg"></div>')
$("#gnb .list > li").on("mouseenter",function(){
    $(".depth02",this).stop().fadeIn(250);
    $(".bg",this).stop().slideDown(250);
});
$("#gnb .list > li").on("mouseleave",function(){
    $(".depth02",this).stop().fadeOut(250);
    $(".bg",this).stop().slideUp(250);
});

$("#popup .btnClose").on("click",function(){
    gsap.to("#popup",{
        y:-500,
        ease:"back.out",
        duration:1,
        onComplete:function(){
            $("#popup").remove();
        }
    })
    return false;
});
$("#popup .btnOneday").on("click",function(){
    gsap.to("#popup",{
        y:-500,
        ease:"back.out",
        duration:1,
        onComplete:function(){
            $("#popup").remove();
        }
    })
    Cookies.set("oneday", "one", { expires: 1 });
    return false;
});
//console.log(Cookies.get("oneday"));
let oneday = Cookies.get("oneday");
if(oneday==="one") {
    $("#popup").remove();
} else {
    gsap.from("#popup",{
        y:-500,
        duration:1,
        ease:"back.out",
        delay:1,
    })
}
Cookies.remove("oneday");
