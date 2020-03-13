$(".order").on("click",function(){
    let order = gsap.timeline();
    order.to("#orderPage",{
        duration:1,
        display:"block",
        opacity:1,
        ease:"power4.out",
        rotateY:0,
    })
})
$("#mainVisual #orderPage .close").on("click",function(){
    let close = gsap.timeline();
    close.to("#orderPage",{
        duration:1,
        display:"none",
        opacity:0,
        ease:"power4.out",
        rotateY:30,
    })
})

$(window).on("scroll",function(){
    let st = this.scrollY;
    if(st>300 && st<2000){
        if($(".section").hasClass("blue")){
            $(".section.blue").addClass("on");
            $(".section.blue").css({
                backgroundColor:"#1e19cc",
            })
        }
    }else{
        if($(".section").hasClass("blue")){
            $(".section.blue").removeClass("on");
            $(".section.blue").css({
                backgroundColor:"#fff",
            })
        }
    }
    if(st>800){
        if(!$("#supporter").hasClass("start")){
            $("#supporter").addClass("start");
            supporter.restart();
        }
        if(!$("#header").hasClass("on")){
            $("#header").addClass("on");
            $("#header").css({
                backgroundColor:"#000",
                color:"#fff"
            });
            $("#logo .logoBox .black").css({
                opacity:0,
            })
            $("#logo .logoBox .white").css({
                opacity:1,
            })
        }
    }
    else{
        if($("#supporter").hasClass("start")){
            $("#supporter").removeClass("start");
        }
        if($("#header").hasClass("on")){
            $("#header").removeClass("on");
            $("#header").css({
                backgroundColor:"#fff",
                color:"#000"
            });
            $("#logo .logoBox .black").css({
                opacity:1,
            })
            $("#logo .logoBox .white").css({
                opacity:0,
            })
        }
    }
})


for (let i = 1; i < 16; i++) {
   let logo = `<li><img src="../img/logo${i}.png"></li>`;
   $("#supporter .logos ul").append(logo);
}
$('.project').tilt({
    perspective: 2000,
})


$("#mainVisual #nav ul li").on("mouseenter",function(){
    $(this).addClass("rotate");
})
$("#mainVisual #nav ul li").on("mouseleave",function(){
    $(this).removeClass("rotate");
})
let navBar = $("#navBar");
navBar.on("click",function(){
    if(!navBar.hasClass("on")){
        navBar.addClass("on");
        gsap.to("#mainVisual #nav",{
            duration:1,
            rotateY:0,
            display:"block",
        })
    }
    else{
        navBar.removeClass("on");
        gsap.to("#mainVisual #nav",{
            duration:1,
            rotateY:90,
            display:"none",
        })
    }
    
});



let mainVisual = gsap.timeline();
mainVisual.from("#logo",{
    y:-100,
    duration:1,
    ease:"power4.out",
})
.from("#mainVisual .titleBox",{
    y:200,
    opacity:0,
    duration:1,
    ease:"power4.out",
})
.from("#gnb ul > li",{
    y:-100,
    duration:1,
    stagger:{
        each:0.05,
    },
    ease:"power4.out",
})
.from("#header .order",{
    y:-100,
    duration:1,
    ease:"power4.out",
})
.from("#mainVisual video",{
    y:200,
    opacity:0,
    duration:1.5,
    ease:"power4.out",
})
let supporter = gsap.timeline({paused:true});
supporter.from("#supporter .titleBox strong",{
    y:100,
    opacity:0,
    duration:1,
    ease:"power4.out",
})
.from("#supporter .titleBox span",{
    y:100,
    opacity:0,
    duration:1,
    ease:"power4.out",
})
.from("#supporter .txtBox span",{
    y:100,
    opacity:0,
    duration:1,
    stagger:{
        each:0.1,
    },
    ease:"power4.out",
})
.from("#supporter .logos ul li",{
    y:100,
    opacity:0,
    duration:1,
    stagger:{
        each:0.1,
    },
    ease:"power4.out",
})

