$("#gnb .gnbList > li").on("mouseenter",function(){
    $(this).find(".depth02").stop().slideDown(250);
    $(this).siblings().find(".depth02").stop().slideUp(100);
    
})