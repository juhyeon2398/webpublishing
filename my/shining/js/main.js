var gnb = $("#gnb .list>li");
var header =$("#header");


gnb.on("mouseenter",function(){
    console.log("hover");
    header.addClass("on");
}),
gnb.on("mouseleave",function(){
    header.removeClass("on");
})
Splitting();
let mainTL01 = gsap.timeline({paused:true});
mainTL01.from("#mainVisual .mainVisual01 h2 .sub .char",{
    duration:0.5,
    y:50,
    opacity:0,
    stagger:{
        amount:2,
    }
})
.from("#mainVisual .mainVisual01 h2 .main .char",{
    duration:0.5,
    y:50,
    opacity:0,
    stagger:{
        amount:2,
    }
},1)
let mainTL02 = gsap.timeline({paused:true});
mainTL02.from("#mainVisual .mainVisual02 h2 .sub .char",{
    duration:0.5,
    y:50,
    opacity:0,
    stagger:{
        amount:2,
    }
})
.from("#mainVisual .mainVisual02 h2 .main .char",{
    duration:0.5,
    y:50,
    opacity:0,
    stagger:{
        amount:2,
    }
},1)
let mainTL03= gsap.timeline({paused:true});
mainTL03.from("#mainVisual .mainVisual03 h2 .sub .char",{
    duration:0.5,
    y:50,
    opacity:0,
    stagger:{
        amount:2,
    }
})
.from("#mainVisual .mainVisual03 h2 .main .char",{
    duration:0.5,
    y:50,
    opacity:0,
    stagger:{
        amount:2,
    }
},1)
let img= gsap.timeline({paused:true});
for (let i = 10; i > 0; i--) {
    img.to("#what ul>li .imgBox .cover",{
        duration:1,
        x:270,
        opacity:0,
        display:"none",
    }) 
}

let moveS= gsap.timeline({paused:true});
moveS.to("#creative .titleBox .moveS",{
    duration:2,
    rotate:20,
    ease:"none",
    repeat:-1,
    yoyo:true,
})
let titleBox= gsap.timeline({paused:true});
titleBox.to("#creative .titleBox",{
    duration:0.75,
    top:100+"%", 
})
let aboutBox = gsap.timeline({paused:true});
aboutBox.to("#creative .about",{
    duration:1,
    y:-230,
})


new fullpage("#main",{
    navigation:true,
    navigationTooltips: ["VIDEO","DAY or NIGHT","MAIN","FACILTY","RESORT MAP"],
    showActiveTooltip: true,
    onLeave: function(section, destination, direction){
        let idx=destination.index;
        console.log("TCL: idx", idx)
        if(idx==0){
            header.css("color","#fff")
        }
        else if (idx==1) {
            img.restart();
            header.css("color","#333")
        }
        else if (idx==2) {
            moveS.restart();
            titleBox.restart();
            aboutBox.restart();
        }    
        else if (idx==3) {
        }    
    },
});
AOS.init();
let mainVisual = new Swiper("#mainVisual .mask",{
    seed:1000,
    effect:"slide",
    scrollbar:false,
    loop:true,
    navigation: {
        nextEl: '#mainVisual .right',
        prevEl: '#mainVisual .left',
    },
    // autoplay:{
    //     delay:5000,
    //     // disableOnInteraction:false,
    // },
})

// if($("#mainVisual ul>li").hasClass("swiper-slide-active")){
//     $("#mainVisual ul>li h2").css("display","block");
// }

mainVisual.on("slideChange",function(){
    let idx = mainVisual.activeIndex;
    console.log("TCL: idx", idx)
    if(idx===0){
        mainTL03.restart();      
    }
    else if(idx===1){
        mainTL01.restart();
    }else if(idx === 2){     
        mainTL02.restart();      
    }else if(idx === 3){
        mainTL03.restart();      
    }else if(idx===4){
        mainTL01.restart();
    }
});

