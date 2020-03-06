

let controller= new ScrollMagic.Controller();
let time = gsap.timeline();
time.from("#section02",{
    x:"-100%",
    duration:1,
    ease:"power3.out"
})
.from("#section03",{
    x:"100%",
    duration:1,
    ease:"power3.out"
})
.from("#section04",{
    x:"-100%",
    duration:1,
    ease:"power3.out"
})
let scene = new ScrollMagic.Scene({
        triggerElement:"#main",
        duration:"100%",
        triggerHook:0
    });    
    scene.setTween(time);
    scene.addTo(controller);
    scene.setPin("#main");
    scene.addIndicators({
        name:".section"
    })
