var gnb = $("#gnb .list>li");
var header =$("#header");
console.log(header);
var btnlanguage=$("#header .utilMenu .language > a")

gnb.on("mouseenter",function(){
    console.log("hover");
    header.addClass("on");
}),
gnb.on("mouseleave",function(){
    header.removeClass("on");
})

var mainVisual=new Swiper("#mainVisual",{
    seed:1000,
    effect:"fade",
    loop:true,
    autoplay:{
        delay:6000,
    },
    pagination:{
        el: '#mainVisual .pagination .bullets',
        type: 'bullets',
        clickable:true,
        
    },
    navigation:{
        prevEl:"#mainVisual .btnPrev",
        nextEl:"#mainVisual .btnNext",
    } 
})
var partners=new Swiper("#partners .mask",{
    seed:1000,
    loop:true,
    slidesPerView:"auto",
    spaceBetween: 0,
    navigation:{
        prevEl:"#partners .btnPrev",
        nextEl:"#partners .btnNext",
    } 
})
var btnStop=$("#mainVisual .btnStop");
var btnPlay=$("#mainVisual .btnPlay");
$("#header .btnAll").on("click",function(){
    $("#header #gnbAll").slideToggle();
    $(this).toggleClass("on");
    return false;
})

var lnb=$("#lnb .listBox > a");
lnb.on("click",function(e){
    console.log("click");
    e.preventDefault();
    $(this).next().stop().slideToggle();
});

for(var i=2000; i<=2025; i++) {        
    if(i<2025){
        var html =0;
        html = "<option value="+i+">"+i+"</option>";
    }
    else{
        bread;
    }
}
$("#subContents select option").append(html);
