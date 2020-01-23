Splitting();
var gnb=document.querySelectorAll("#gnb .list li");
var header=document.querySelector("header");
var btnStop=document.querySelector("#mainVisual .btnStop");
var btnPlay=document.querySelector("#mainVisual .btnPlay");
for(var i=0;i<gnb.length;i++){
    var item=gnb.item(i);
    item.addEventListener("mouseenter",function(){
        header.classList.add("on");
    }),
    item.addEventListener("mouseleave",function(){
        header.classList.remove("on");
    })
}
var mainVisual = new Swiper("#mainVisual",{
    seed:1000,
    effect:"fade",
    loop:true,
    autoplay:{
        delay:6000,
        disableOnInteraction:false,
    },
    pagination: {
        el: '#mainVisual .pagination .bullets',
        type: 'bullets',
        clickable:true,
    },
});
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
btnStop.addEventListener("click",function(){
        mainVisual.autoplay.stop();
        btnPlay.style.display="block";
        btnStop.style.display="none";
})
btnPlay.addEventListener("click",function(){
        mainVisual.autoplay.start();
        btnStop.style.display="block";
        btnPlay.style.display="none";
})
var time01 = gsap.timeline({});
time01.from("#mainVisual .mainVisual01 .txtBox .sub",{
    duration:2,
    y:-200,
    opacity:0,  
    ease:Bounce.easeIn,
    //Power1~4, Elastic,Black, Linear.easeNone,Bounce, easeIn,easeOut
})
.from("#mainVisual .mainVisual01 .txtBox .main .char",{
    duration:1,
    y:-200,
    opacity:0,
    stagger:0.1,     //여러개 옵션은 순서대로 실행
    ease:Bounce.easeIn,
},0.5);
var time02 = gsap.timeline({paused:true}); 
time02.from("#mainVisual .mainVisual02 .txtBox .sub",{
    duration:2, 
    y:-200, 
    opacity:0, 
    ease:Bounce.easeIn,
})
.from("#mainVisual .mainVisual02 .txtBox .main .char",{
    duration:1,
    y:-200,
    opacity:0,
    stagger:0.1, 
    ease:Bounce.easeIn,
},0.5);
var time03 = gsap.timeline({paused:true});
time03.from("#mainVisual .mainVisual03 .txtBox .sub",{
    duration:2,
    y:-200,
    opacity:0,
    ease:Bounce.easeIn,
})
.from("#mainVisual .mainVisual03 .txtBox .main .char",{
    duration:1,
    y:-200,
    opacity:0,
    stagger:0.1,
    ease:Bounce.easeIn,
},0.5);
window.addEventListener("scroll",function(){
    var st = window.scrollY;
    console.log("TCL: st", st)
    if(st>0){
        header.classList.add("expanded");
    }
    else{
        header.classList.remove("expanded");      
    }
    if(st>500){
        btnTop.classList.add("show");
    }else{
        btnTop.classList.remove("show");      
    }
});
var btnTop = document.querySelector(".btnTop");
btnTop.addEventListener("click",function(){
    gsap.to("html,body",{scrollTop:0,ease:Power4.easeOut,duration:1});
});
