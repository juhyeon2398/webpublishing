let time01 = gsap.timeline({});
time01.from(".section01 .txt01",{
    x:200,
    opacity:0,
    ease:"back.out",
    duration:1
})
.from(".section01 .txt02",{
    x:-200,
    opacity:0,
    ease:"back.out",
    duration:1
},"-=0.8")
.from(".section01 .txt0301",{
    x:200,
    opacity:0,
    ease:"back.out",
    duration:1
},"-=0.8")
.from(".section01 .txt0302",{
    x:-200,
    opacity:0,
    ease:"back.out",
    duration:1
},"-=0.8")
.from(".section01 .txt0303",{
    x:200,
    opacity:0,
    ease:"back.out",
    duration:1
},"-=0.8")
.from(".section01 .txt04",{
    scale:3,
    opacity:0,
    ease:"back.out",
    duration:1
},"-=0.5")


let time02 = gsap.timeline();
time02.from(".section02 .title",{
    x:200,
    opacity:0,
    duration:1,
    ease:"back.out"
})
.from(".section02 .mainTxt .mainTxt01",{
    x:-200,
    opacity:0,
    duration:1,
    ease:"back.out"
},"-=0.8")
.from(".section02 .mainTxt .mainTxt02",{
    x:200,
    opacity:0,
    duration:1,
    ease:"back.out"
},"-=0.8")
.from(".section02 .mainTxt .mainTxt03",{
    x:-200,
    opacity:0,
    duration:1,
    ease:"back.out"
},"-=0.8")
.from(".section02 ul li",{
    x:200,
    opacity:0,
    duration:1,
    ease:"back.out",
    stagger:{
        each:0.05
    }
},"-=0.8")
.from(".section02 .cduBox",{
    scale:3,
    opacity:0,
    duration:1,
    ease:"back.out"
},"-=0.5");


let time03 = gsap.timeline();
time03.from(".section03 .title",{
    x:200,
    opacity:0,
    duration:1,
    ease:"back.out"
})
.from(".section03 .mainTxt",{
    x:-200,
    opacity:0,
    duration:1,
    ease:"back.out"
},"-=0.8")
.from(".section03 .list li",{
    x:200,
    opacity:0,
    duration:1,
    ease:"back.out",
    stagger:{
        each:0.1
    }
},"-=0.8")
.from(".section03 .airplane",{
    scale:0,
    opacity:0,
    duration:1,
    ease:"elastic.out"
},"-=0.5")



let controller = new ScrollMagic.Controller();
let scene01 = new ScrollMagic.Scene({
    triggerElement:".section01",
    duration:"100%",
    triggerHook:0,
    reverse:false

});
scene01.setTween(time01);
scene01.addTo(controller);
scene01.addIndicators({
    name:"section01",
});
scene01.setPin(".section01",{pushFollowers: true});

let scene02 = new ScrollMagic.Scene({
    triggerElement:".section02",
    duration:"100%",
    triggerHook:0,
    reverse:false,
    
});
scene02.setTween(time02);
scene02.addTo(controller);
scene02.addIndicators({
    name:"section02",
});
scene02.setPin(".section02",{pushFollowers: true});


let scene03 = new ScrollMagic.Scene({
    triggerElement:".section03",
    duration:"100%",
    triggerHook:0,
    reverse:false
});
scene03.setTween(time03);
scene03.addTo(controller);
scene03.addIndicators({
    name:"section03",
});
scene03.setPin(".section03",{pushFollowers: true});

scene01.on("leave",function(){
    console.log("leave");
})

scene01.on("end",function(){
    console.log("end");
})

scene01.on("shift",function(){
    console.log("shift");
})



