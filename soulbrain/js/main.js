var gnb = document.querySelectorAll("#gnb .list>li");
var header =document.querySelector("#header");
var total = gnb.length;
console.log("TCL: total", total)
for(var i=0;i<total;i++){
    var item=gnb.item(i);
    item.addEventListener("mouseenter",function(){
        header.classList.add("on");
    }),
    item.addEventListener("mouseleave",function(){
        header.classList.remove("on");
    })
};
new Swiper("#mainVisual",{
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
});

