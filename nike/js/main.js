// $(document).ready(function(){
//     $("#main li").on("mouseenter",function(){
//         $(this).find("a").addClass("on");
//         return false;
//     })
//     $("#main li").on("mouseleave",function(){
//         $(this).find("a").removeClass("on");
//     })
// })

$(document).ready(function(){
    $("#main li").on("click",function(){
        $(this).find("a").toggleClass("on");
        $(this).siblings().find("a").removeClass("on");
        return false;
    })
   
})