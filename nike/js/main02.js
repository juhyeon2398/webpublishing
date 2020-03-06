let ty=0;
$(document).ready(function(){
    $("#main li").on("click",function(){
        if(!$(this).hasClass("active")){
            gsap.to($(this).find("a"),{
                duration:0.5,
                rotationY:180,
                ease:"back.inOut",
            });
            $(this).addClass("active");
        }else{
            gsap.to($(this).find("a"),{
                duration:0.5,
                rotationY:0,
                ease:"back.inOut",
            });
            $(this).removeClass("active"); 
        }
        return false;
    })
   
})