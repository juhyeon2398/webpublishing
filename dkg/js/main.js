var gnb = document.querySelectorAll("#gnb .list > li");
var header = document.querySelector("#header");
console.log(gnb);
for(var i=0;i<gnb.length;i++){
    var item = gnb.item(i);
    item.addEventListener("mouseenter",function(){
        header.classList.add("open");
    });
    item.addEventListener("mouseleave",function(){
        header.classList.remove("open");
    });
}
objectFitImages();

