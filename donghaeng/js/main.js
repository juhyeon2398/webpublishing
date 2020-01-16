new Swiper("#mainVisual",{
    seed:1000,
    effect:"slide",
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
console.log(window);
var header=document.querySelector("#header");

var h=window.innerHeight;
console.log(h);
window.addEventListener("resize",function(){
    h=window.innerHeight;
})   //사이즈를 바꿀때 h값 재정의
window.addEventListener("scroll",function(){   //스크롤에 따라 속성변경
    // console.log(scrollY);
    var st=this.scrollY;
    if(st>h){
        header.classList.add("on");
    }
    else{
        header.classList.remove("on");
    }
})