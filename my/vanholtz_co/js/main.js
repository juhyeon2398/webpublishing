let numZ=0;
let span01=$(".a span:nth-child(2)");
$(window).on("mousewheel",function(e){ 
    let wheel = e.originalEvent.deltaY;
    console.log("TCL: numZ", numZ);
    if(numZ<=0){
        numZ=0;
    }else if(numZ>=400){
        numZ=400;
        gsap.to(span01,{
            rotate:30, 
        })
    }
    numZ+=wheel; 
})