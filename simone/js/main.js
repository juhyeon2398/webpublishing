let oldSection = "#section01";
let isEnd = true;
let ty = "-100%";
let oldId = 0;
let startY = "100%";
let rX=10;
let wheelId=0;
$("#main section").on("mousewheel",function(e){
    let wheel = e.originalEvent.deltaY;
    if(wheel>0){
        wheelId=$(this).next().index();
        if(wheelId == -1)
        {
            wheelId=0;
        }
    }else{
        wheelId=$(this).prev().index();
        if(wheelId == -1)
        {
            wheelId=3;
        }
    }
    $(".btns li").eq(wheelId).trigger("click")

})
$(".btns li").on("click",function(){
    let curentId=$(this).index();
    let currentSection = "#section0"+ (curentId+1);
    if(curentId - oldId > 0){
        ty="-100%";
        startY="100%";
        rX=10;
    }else{
        ty="100%";
        startY="-100%";
        rX=-10;
    
    }
    if(currentSection != oldSection && isEnd){
        isEnd = false;
        let time = gsap.timeline({
            onComplete:function(){
            isEnd = true;
            }
        });
        time.to(oldSection,{
            duration:1,
            z:-200,
            rotationX:rX,
            ease:"power4.in"
        })
        .to(oldSection,{
            duration:1,
            z:0,
            rotationX:0,
            top:ty,
            ease:"power4.out"
            
        })
        .fromTo(currentSection,{z:-200,rotationX:10,top:startY},{
            duration:1,
            z:0,
            top:0,
            rotationX:0,
            ease:"power4.out"
        },"-=1")
        oldSection = currentSection;
        oldId = curentId;
    }
 
    return false;
});
