

let controller= new ScrollMagic.Controller();
for (let i = 1; i < 5; i++) {
    let scene = new ScrollMagic.Scene({
        triggerElement:"#section0"+i,
        triggerHook:0
    });    
    scene.addTo(controller);
    scene.setPin("#section0"+i,{pushfollowers:false});
    scene.addIndicators({
        name:".section"
    })
}