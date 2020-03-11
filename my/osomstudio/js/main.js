$(".order").on("click",function(){
    console.log("click")
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
    console.log("click")
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
    console.log("st", st)
    if(st>300 && st<1700){
        gsap.to(".section.blue",{
            duration:1.5,
            backgroundColor:"#1e19cc",
        })
    }else{
        gsap.to(".section.blue",{
            duration:2,
            backgroundColor:"#fff",
        })
    }
    if(st>800){
        $("#header").css({
            backgroundColor:"#000",
            color:"#fff"
        })
        $("#logo .logoBox .black").css({
            opacity:0,
        })
        $("#logo .logoBox .white").css({
            opacity:1,
        })
    }
    else{
        $("#header").css({
            backgroundColor:"",
            color:"#333"
        })
        $("#logo .logoBox .black").css({
            opacity:1,
        })
        $("#logo .logoBox .white").css({
            opacity:0,
        })
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