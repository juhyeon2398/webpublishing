var mainVisual = new Swiper("#mainVisual",{
    seed:1000,
    effect:"slide",
    loop:true,
    navigation: {
        nextEl: '#mainVisual .btnNext',
        prevEl: '#mainVisual .btnPrev',
    },
    autoplay:{
        delay:10000,
        // disableOnInteraction:false,
    },
    pagination: {
        el: '#mainVisual .pagination',
        type: 'bullets',
        clickable:true,
    },
});
console.log(window);
var header=document.querySelector("#header");

var h=window.innerHeight;
console.log(h);
window.addEventListener("resize",function(){
    h=window.innerHeight;
})   //사이즈를 바꿀때 h값 재정의
window.addEventListener("scroll",function(){   //스크롤에 따라 속성변경
    // console.log(scrollY);
    var st=this.scrollY;
    if(st>h){
        header.classList.add("on");
    }
    else{
        header.classList.remove("on");
    }
})


mainVisual.on("slideChange",function(){
    var idx = mainVisual.realIndex;
    if(idx === 0){
        time01.restart();
    }else if(idx === 1){     
        time02.restart();      
    }else if(idx === 2){
        time03.restart();      
    }
});


Splitting();

var time01 = gsap.timeline({});
time01.from("#mainVisual .visual01 .sub",{
    duration:2,
    y:-200,
    opacity:0,
    ease:Bounce.easeOut,
    //Power1~4, Elastic,Black, Linear.easeNone,Bounce, easeOut,easeOut
})
.from("#mainVisual .visual01 .txtBox .main .char",{
    duration:1,
    y:-200,
    opacity:0,
    stagger:0.1,     //여러개 옵션은 순서대로 실행
    ease:Bounce.easeOut,
},0.5);
var time02 = gsap.timeline({paused:true});
time02.from("#mainVisual .visual02 .txtBox .sub",{
    duration:2,
    y:-200,
    opacity:0,
    ease:Bounce.easeOut,
})
.from("#mainVisual .visual02 .txtBox .main .char",{
    duration:1,
    y:-200,
    opacity:0,
    stagger:0.1, 
    ease:Bounce.easeOut,
},0.5);
var time03 = gsap.timeline({paused:true});
time03.from("#mainVisual .visual03.swiper-slide-duplicate-prev .txtBox .sub",{
    duration:2,
    y:-200,
    opacity:0,
    ease:Bounce.easeOut,
})
.from("#mainVisual .visual03.swiper-slide-duplicate-prev .txtBox .main .char",{
    duration:1,
    y:-200,
    opacity:0,
    stagger:0.1,
    ease:Bounce.easeOut,
},0.5);

