let targetArray=[
    {rx:0,ry:0},
    {rx:0,ry:180},
    {rx:0,ry:90},
    {rx:0,ry:-90},
    {rx:-90,ry:0},
    {rx:90,ry:0},
]
$(document).ready(function(){
    $(".btns li").on("click",function(){
        let random=Math.floor(Math.random()*6);
        let tx=targetArray[random].rx;
        let ty=targetArray[random].ry;
        gsap.to($(".cube"),{
            duration:1,
            rotationY:ty,
            rotationX:tx,
            ease:"power3.inOut",
        })  
    })
})