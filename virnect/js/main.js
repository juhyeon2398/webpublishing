// var h=window.innerHeight;
// var child_01 = document.querySelector("#solution .list li:nth-child(1)");
// var child_02 = document.querySelector("#solution .list li:nth-child(2)");
// var child_03 = document.querySelector("#solution .list li:nth-child(3)");
// var child_04 = document.querySelector("#solution .list li:nth-child(4)");
// window.addEventListener("resize",function(){
//     h=window.innerHeight;
// })   //사이즈를 바꿀때 h값 재정의
// window.addEventListener("scroll",function(){   //스크롤에 따라 속성변경
//     // console.log(scrollY);
//     var st=this.scrollY;
//         if(st>1563){
//             child_01.classList.add("right");
//         }else{
//             child_01.classList.remove("right");
//         }
//         if(st>2519){
//             child_02.classList.add("left");
//         }else{
//             child_02.classList.remove("left");
//         }
//         if(st>3361){
//             child_03.classList.add("right");
//         }else{
//             child_03.classList.remove("right");
//         }
//         if(st>4258){
//             child_04.classList.add("left");
//         }else{
//             child_04.classList.remove("left");
//         }
// })

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
AOS.init();