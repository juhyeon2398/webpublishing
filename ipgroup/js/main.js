$('#main').pagepiling({
    onLeave: function(index, nextIndex, direction){
        if(nextIndex==1){
            header.restart();
        }else if(nextIndex==2){
            work.restart();
        }else if(nextIndex==3){
            news.restart();
        }else if(nextIndex==4){
            hyundai.restart();
        }
    },
});

let it=CSSRulePlugin.getRule("#intro .slogan .it::after")
let header = gsap.timeline();
header.from("#header #logo img",{
    y:100,
    duration:0.5,
})
.from("#header ul>li",{
    y:100,
    duration:1,
    stagger:{
        each:0.25,
    }
})
.from("#intro .slogan>span",{
    y:100,
    opacity:0,
    duration:1,
    stagger:{
        each:0.1,
    }
})
.from(it,{
    cssRule:{
        y:-15,
        x:-15,
        opacity:0,
    }
})
.from("#intro ul>li",{
    y:100,
    opacity:0,
    duration:1,
    stagger:{
        each:0.25,
    }
})

let work=gsap.timeline({paused:true});
work.from("#work h2 img",{
    y:100,
    opacity:0,
    duration:1,
})
.from("#work h2 span",{
    y:100,
    opacity:0,
    duration:1,
    stagger:{
        each:0.25,
    }
})

let news=gsap.timeline({paused:true});
news.from("#news h2 img",{
    y:100,
    opacity:0,
    duration:1,
})
.from("#news h2 span",{
    y:100,
    opacity:0,
    duration:1,
    stagger:{
        each:0.25,
    }
})
let hyundai=gsap.timeline({paused:true});
hyundai.from("#hyundai h2 img",{
    y:100,
    opacity:0,
    duration:1,
})
.from("#hyundai h2 span",{
    y:100,
    opacity:0,
    duration:1,
    stagger:{
        each:0.25,
    }
})



