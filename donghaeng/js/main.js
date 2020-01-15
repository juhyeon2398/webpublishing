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