new Swiper("#mainVisual",{
    seed:1000,
    effect:"cube",
    loop:true,
    navigation: {
        nextEl: '#mainVisual .btnNext',
        prevEl: '#mainVisual .btnPrev',
    },
    autoplay:{
        delay:3000,
    },
    pagination: {
        el: '#mainVisual .pagination',
        type: 'bullets',
        clickable:true,
    },
});

// var gmb= 
