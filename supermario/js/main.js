function mario(mc){
    gsap.to(mc,{
        duration:Math.random()*1+1,
        x:(Math.random()*80-50)+"%",
        y:(Math.random()*10-60)+"%",
        ease:"none",
        onComplete:function(){
            mario(mc);
        }
    });
}
mario("#main li:nth-child(1) .mario");
mario("#main li:nth-child(2) .mario");
mario("#main li:nth-child(3) .mario");
mario("#main li:nth-child(4) .mario");
mario("#main li:nth-child(5) .mario");

let numZ=0;
let sell=0;
$(window).on("mousewheel",function(e){ 
    let wheel = e.originalEvent.deltaY;
    console.log("TCL: numZ", numZ);
    if(numZ<=0){
        numZ=0;
    }else if(numZ>=20000){
        numZ=20000;
    }
    numZ+=wheel; 
    $("#main li").each(function(idx){
        gsap.to($(this),{
            z:-5000*idx+numZ,
            ease:"power4.out",
            duration:0.5,
        });
    });
    sell=Math.floor(numZ/5000);
    $("#gnb li").eq(sell).addClass("on");
    $("#gnb li").eq(sell).siblings().removeClass("on");
})
$("#gnb li").on("click",function(){
    numZ=$(this).index()*5000;
    $("#main li").each(function(idx){
        gsap.to($(this),{
            z:-5000*idx+numZ,
            ease:"power4.out",
            duration:0.5,   
        });
    });
    sell=Math.floor(numZ/5000);
    $("#gnb li").eq(sell).addClass("on");
    $("#gnb li").eq(sell).siblings().removeClass("on");
    return false;
})