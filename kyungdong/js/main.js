new Swiper("#mainVisual",{
    seed:1000,
    effect:"cube",
    loop:true,
    navigation: {
        nextEl: '#mainVisual .btnNext',
        prevEl: '#mainVisual .btnPrev',
    },
    autoplay:{
        delay:10000,
    },
    pagination: {
        el: '#mainVisual .pagination',
        type: 'bullets',
        clickable:true,
    },
});

var gmb=document.querySelectorAll("#gmb .list > li");
var header=document.querySelector("#header");
console.log(gmb);
for(var i=0;i<4;i++){
    var item = gmb.item(i);
    item.addEventListener("mouseenter",function(){
        header.classList.add("open");
    })
    item.addEventListener("mouseleave",function(){
        header.classList.remove("open");
    })
}
