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
$("#gnb .list > li").on("mouseenter",function(){
    if(!$("#gnb").hasClass("mobile")){
        $(".depth02",this).stop().slideDown(250);
    }
});
$("#gnb .list > li").on("mouseleave",function(){
    if(!$("#gnb").hasClass("mobile")){
        $(".depth02",this).stop().slideUp(250);
    }
});

$("#gnb .list > li .depth01").on("click",function() {
    $(this).next(".depth02").stop().slideToggle();
    $(this).parent().siblings().find(".depth02").stop().slideUp();
    return false;
})

$(window).on("resize",function(){
    let w = $(window).width() + 17;
    console.log("w", w);
    if(w<=1200){
        if( !$("#gnb").hasClass("mobile") ){
            $("#gnb").addClass("mobile");
        }
    } else {
        if( $("#gnb").hasClass("mobile") ){
            $("#gnb").removeClass("mobile");
        }
        $("body").removeClass("open");
        $(".btnAll").removeClass("open");
    }
});
$(window).trigger("resize");




$("#popup .btnClose").on("click",function(){
    gsap.to("#popup",{
        y:-500,
        ease:"back.in",
        duration:1,
        onComplete:function(){
            $(".popupWrap").remove();
        }
    });
    return false;
});
$("#popup .btnOneday").on("click",function(){
    gsap.to("#popup",{
        y:-500,
        ease:"back.in",
        duration:1,
        onComplete:function(){
            $(".popupWrap").remove();
        }
    });
    Cookies.set("oneday", "one", { expires: 1 });
    return false;
});
//console.log(Cookies.get("oneday"));
let oneday = Cookies.get("oneday");
if(oneday==="one") {
    $(".popupWrap").remove();
} else {
    gsap.from("#popup",{
        y:"-300%",
        ease:"back.out",
        duration:1,
        delay:0.2,
    });
}

$(".btnAll").on("click",function(){
    $(this).toggleClass("open");
    $("body").toggleClass("open");
    return false;
})

//f(x,y) = x+2y;
