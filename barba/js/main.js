function delay(n) {
    n= n || 2000;
    return new Promise(function(done){
        setTimeout(function(){
            done();
        },n)
    })
}

function pageTransition() {
    $("#changeItem").show();
    gsap.set("#changeItem li",{
        transformOrigin:"50% 100%",
        scaleY:0
    });
    let tl = gsap.timeline({
        onComplete:function() {
            return new Promise(function(done){
                done();
                console.log("transition end");
            })
        }
    });
    tl.to("#changeItem li",{
        duration:1,
        scaleY:1,
        ease:"power4.inOut",
        stagger:{
            each:0.15
        }
    })
}
$("#changeItem").hide();
  // Function to animate the content of each page
function contentAnimation() {
    console.log("aaaa");
    gsap.set("#changeItem li",{
        transformOrigin:"50% 0",
    });
    let tl = gsap.timeline({
        onComplete:function(){
            $("#changeItem").hide();
            
        }
    });
    tl.to("#changeItem li",{
        duration:1,
        scaleY:0,
        ease:"power4.inOut",
        stagger:{
            each:0.15
        }
    })
}
  
$(function() {
barba.init({
    sync: true,
    transitions: [{
    async leave(data) {
        const aa = this.async();
        //pageTransition();
        await pageTransition();
        aa();
    },
    async enter(data) {
        contentAnimation();
        console.log("enter==",data);
    },
    async once(data) {
        contentAnimation();
        console.log("once==",data);
    }
    }]
});
});

// $(function() {
//     barba.init({
//         sync: true,
//         transitions: [{
//           async leave(data) {
//             // do something with `current.container` for your leave transition
//             // then return a promise or use `this.async()`;
//             const nextPage = this.async();
//             await pageTransition();
//             nextPage();
            
//           },
//           async enter(data) {
//             // do something with `next.container` for your enter transition
//             // then return a promise or use `this.async()`
//             contentAnimation();
            
//           },
//           async once(data) {
//                     contentAnimation();
//                     console.log("once==",data);
//                 }
//         }]
//       });
// });
    


