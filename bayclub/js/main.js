new fullpage('#main', {
    navigation:true,
    navigationTooltips: ["VIDEO","DAY or NIGHT","MAIN","FACILTY","RESORT MAP"],
    showActiveTooltip: true,
});

let btnMenu = $("#header .btnBox .btnMenu");
let gnb = $("#header #gnb");

$(btnMenu).on("click",function(){
    $(gnb).slideToggle();
    $(gnb).toggleClass("on");
    return false;
})
let btnSun=$("#dayornight .btns .sun");
let btnMoon=$("#dayornight .btns .moon");
let sun=$("#dayornight ul .sunBg");
let moon=$("#dayornight ul .moonBg");
btnSun.on("click",function(){
    sun.css("display","block");
    moon.css("display","none");
})
btnMoon.on("click",function(){
    moon.css("display","block");
    sun.css("display","none");
})
new Swiper("#no_1 .mask",{
    loop:true,
    seed:1000,
    pagination:{
        el: '#no_1 .pagination',
        type: 'bullets',
        clickable:true,
    },
})