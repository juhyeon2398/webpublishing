var gnb = document.querySelectorAll("#gnb .list > li");
var header = document.querySelector("#header");
for(var i=0;i<gnb.length;i++){
    var item = gnb.item(i);
    item.addEventListener("mouseenter",function(){
        header.classList.add("open");
    });
    item.addEventListener("mouseleave",function(){
        header.classList.remove("open");
    });
}
Splitting();

let businessPosY = document.querySelector("#business").offsetTop;
console.log("TCL: businessPosY", businessPosY);

window.addEventListener("scroll",function() {
    let st = this.scrollY;
    if(st>businessPosY){
        businessTL.resume();
    }
});




let mainTL = gsap.timeline();
mainTL.from( "#mainVisual .txtBox .sub .char",{
    duration:1.5,
    opacity:0,
    x:function() {
        return Math.random() > 0.5? 30:-30;
    },
    ease:"back.out",
    stagger:{
        amount:1,
        from:"random",
        //repeat:2,
    }
})
.from( "#mainVisual .txtBox .main .char",{
    duration:1.5,
    opacity:0,
    x:function() {
        return Math.random() > 0.5? 30:-30;
    },
    ease:"back.out",
    stagger:{
        amount:1,
        from:"random",
        //repeat:2,
    }
});

let businessTL = gsap.timeline({paused:true});
businessTL.from( "#business .txtBox .sub .char",{
    duration:1.5,
    opacity:0,
    x:function() {
        return 30;
    },
    ease:"back.out",
    stagger:{
        amount:0.5,
        //repeat:2,
    }
})
.from( "#business .txtBox .main .char",{
    duration:1.5,
    opacity:0,
    x:function() {
        return 30
    },
    ease:"back.out",
    stagger:{
        amount:1,
        //repeat:2,
    }
})
.from( "#business .cList li",{
    duration:1,
    opacity:0,
    x:100,
    ease:"back.out",
    stagger:{
        amount:0.2,
    }
})
let portfolioTl = gsap.timeline({});
portfolioTl.from( "#portfolio .txtBox .sub .char",{
    duration:1.5,
    opacity:0,
    x:function() {
        return 30;
    },
    ease:"back.out",
    stagger:{
        amount:0.5,
        //repeat:2,
    }
})
.from( "#portfolio .txtBox .main .char",{
    duration:1.5,
    opacity:0,
    x:function() {
        return 30
    },
    ease:"back.out",
    stagger:{
        amount:1,
        //repeat:2,
    }
})
.from( "#portfolio .cList li",{
    duration:1,
    opacity:0,
    x:100,
    ease:"back.out",
    stagger:{
        amount:0.2,
    }
})

new fullpage('#main', {
    navigation:true,
    navigationTooltips: ["INTRRODCE","BUSINESS","PORTFOLIO","COMMUNITY"],
    showActiveTooltip: true,
    onLeave: function(section, destination, direction){
        let idx=destination.index;
        if (idx==1) {
            businessTL.restart();
        }   
        else if(idx==2){
            portfolioTl.restart();
        }     
    },


});
