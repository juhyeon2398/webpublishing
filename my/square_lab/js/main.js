gsap.registerPlugin(DrawSVGPlugin,MorphSVGPlugin);
gsap.to("#rect",{
    duration:0.5,
    morphSVG:"#polygon",
})