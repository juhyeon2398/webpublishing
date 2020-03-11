$("#gnb .gnbList > li").on("mouseenter",function(){
    $("#header").addClass("on");
})
$("#gnb .gnbList > li").on("mouseleave",function(){
    $("#header").removeClass("on");
})

Splitting();
let time01 = gsap.timeline({});
let time02 = gsap.timeline({paused:true});
let time03 = gsap.timeline({paused:true});
time01.from("#mainVisual .visual01 .txt .sub .char",{
    duration:1,
    opacity:0,
    x:100,
    ease:"back.out",
    delay:1,
    stagger:{
        each:0.05
    }
})
.from("#mainVisual .visual01 .txt .main .char",{
    duration:1,
    opacity:0,
    x:100,
    ease:"back.out",
    stagger:{
        each:0.05
    }
});
time02.from("#mainVisual .visual02 .txt .sub .char",{
    duration:1,
    opacity:0,
    x:100,
    ease:"back.out",
    delay:1,
    stagger:{
        each:0.05
    }
})
.from("#mainVisual .visual02 .txt .main .char",{
    duration:1,
    opacity:0,
    x:100,
    ease:"back.out",
    stagger:{
        each:0.05
    }
});
time03.from("#mainVisual .visual03 .txt .sub .char",{
    duration:1,
    opacity:0,
    x:100,
    ease:"back.out",
    delay:1,
    stagger:{
        each:0.05
    }
})
.from("#mainVisual .visual03 .txt .main .char",{
    duration:1,
    opacity:0,
    x:100,
    ease:"back.out",
    stagger:{
        each:0.05
    }
});


let mainVisual = new Swiper("#mainVisual .mask",{
    effect:"fade",
    speed:1500,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    navigation:{
        prevEl:"#mainVisual .btnPrev",
        nextEl:"#mainVisual .btnNext",
    },
    on:{
        slideChange:function(){
            if(this.realIndex===0){
                time01.restart();
            } else if(this.realIndex===1) {
                time02.restart();
            } else if(this.realIndex===2) {
                time03.restart();
            }
        }
    }
});

let num=0;
$("#process .icons li").eq(num).addClass("on");
let iconMove = setInterval(function() { 
    num++;
    num = num%8;
    $("#process .icons li").eq(num).addClass("on");
    $("#process .icons li").eq(num).siblings().removeClass("on");
 },2000)


 let productDesc = new Swiper("#product .descBox .mask",{
    loop:true,
    speed:1000,
    effect:"fade",
    allowTouchMove:false,
    fadeEffect:{
        crossFade:true,
    },
    navigation:{
        prevEl:"#product .btnPrev",
        nextEl:"#product .btnNext",
    }
})
let product = new Swiper("#product .productBox .mask",{
    loop:true,
    speed:1000,
    spaceBetween:200,
    centeredSlides:true,
    slidesPerView:"auto",
    thumbs:{
        swiper:productDesc,
    },
    navigation:{
        prevEl:"#product .btnPrev",
        nextEl:"#product .btnNext",
    }
})
