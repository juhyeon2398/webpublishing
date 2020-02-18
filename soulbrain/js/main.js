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

btnStop.on("click",function(){
    mainVisual.autoplay.stop();
    btnPlay.style.display="block";
    btnStop.style.display="none";
})
btnPlay.on("click",function(){
    mainVisual.autoplay.start();
    btnStop.style.display="block";
    btnPlay.style.display="none";
})

btnlanguage.on("click",function(){
    $(this).next().stop().slideToggle();
    return false;
})

$(window).on("scroll",function(){
    var st = window.scrollY;
    console.log("TCL: st", st)
    if(st>831){
        header.addClass("open");
    }
    else{
        header.removeClass("open");      
    }
});
$(window).on("scroll",function(){
    var st =$(window).scrollTop();
    if(st>0){
        header.addClass("scroll");
    }
    else{
        header.removeClass("scroll");      
    }
});

$("#header .btnAll").on("click",function(){
    $("#header #gnbAll").slideToggle();
    $(this).toggleClass("on");
    return false;
})

console.log(window);

var h=window.innerHeight;
console.log(h);
window.addEventListener("resize",function(){
    h=window.innerHeight;
})   //사이즈를 바꿀때 h값 재정의
window.addEventListener("scroll",function(){   //스크롤에 따라 속성변경
    // console.log(scrollY);
    var st=this.scrollY;
    console.log("TCL: st", st);
        console.log("TCL: countPosY", countPosY);
    if(st>countPosY){      
        if(!count01.classList.contains("on")){
            count01.classList.add("on");
            var countIdx =setInterval(function(){
                if(countNum01<14){
                    countNum01= countNum01+1;
                    count01.innerHTML=countNum01+"%";
                    
                }else{
                    clearInterval(countIdx);
                }
            },200);
        };   
    }
    if(st>countPosY){    
        if(!count02.classList.contains("on")){
            count02.classList.add("on");
            var countIdx =setInterval(function(){
                if(countNum02<298){
                    countNum02= countNum02+1;
                    count02.innerHTML=countNum02;
                    
                }else{
                    clearInterval(countIdx);
                }
            },10);
        };
    }
    if(st>countPosY){    
        if(!count03.classList.contains("on")){
            count03.classList.add("on");
            var countIdx =setInterval(function(){
                if(countNum03<4){
                    countNum03= countNum03+1;
                    count03.innerHTML=countNum03;      
                }else{
                    clearInterval(countIdx);
                }
            },200);
        };
    }
})
var lnb=$("#lnb .listBox > a");
lnb.on("click",function(e){
    e.preventDefault();
    $(this).next().stop().slideToggle();
});
AOS.init();

 var countNum01=0;
 var countNum02=0;
 var countNum03=0;
 var count01=document.querySelector(".count01");
 var count02=document.querySelector(".count02");
 var count03=document.querySelector(".count03");
//  var countPosY=window.pageYOffset+count01.getBoundingClientRect().top;
// var countPosY=$("#vision").offset().top;

// var greeting01=$(".greeting ul > li:nth-child(1) a");
// var greeting02=$(".greeting ul > li:nth-child(2) a");
// var greetingtxt01=$(".greeting ul > li .greeting01");
// var greetingtxt02=$(".greeting ul > li .greeting02");
// greeting01.on("click",function(e){
//     e.preventDefault();
    
//     greetingtxt01.show();
//     greetingtxt02.hide();

// });
// greeting02.on("click",function(e){
//     e.preventDefault();
//     greetingtxt01.hide();
//     greetingtxt02.show();
// });
var tab=$(".tabList >li");
tab.on("click",function(e){
    e.preventDefault();
    var targetContents=$(this).parent().data("tab-contents");
    $(targetContents).children("li").eq($(this).index()).addClass("on");
    $(targetContents).children("li").eq($(this).index()).siblings().removeClass("on");
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
})

