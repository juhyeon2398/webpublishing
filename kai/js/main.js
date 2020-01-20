var gnb=document.querySelectorAll("#gnb .list li");
var header=document.querySelector("header");

for(var i=0;i<gnb.length;i++){
    var item=gnb.item(i);
    item.addEventListener("mouseenter",function(){
        header.classList.add("on");
    }),
    item.addEventListener("mouseleave",function(){
        header.classList.remove("on");
    })
}
new Swiper("#mainVisual",{
    seed:1000,
    effect:"cube",
    loop:true,
    autoplay:{
        delay:10000,
    },
    pagination: {
        el: '#mainVisual .pagination',
        type: 'bullets',

        clickable:true,
    },
});