// let before = CSSRulePlugin.getRule("#abcContents:before");
let contentsMotion = gsap.timeline({ paused: true });
contentsMotion
  .set("#abcContents", {
    autoAlpha: 1
  })
  .from("#abcContents .bg", {
    duration: 0.4,
    autoAlpha: 0
  })
  .to("#abcContents .inner", {
    duration: 0.8,
    top: "50%",
    ease: "back.out"
  });

let contentsArray = [];
axios
  .get("abcContents.json")
  .then(function(res) {
    console.log(res, "===", typeof res.data);
    //문제 지금 받아온 데이터의 type을 확인해보고
    //만약 문자이면 Json 객체로 뱐환해 보세요....
    contentsArray = res.data.contents;
    console.log(contentsArray);
    $("#abc li").on("click", function() {
      contentsMotion.restart();
      let title = contentsArray[$(this).index()].title;
      let img = contentsArray[$(this).index()].img;
      let desc = contentsArray[$(this).index()].desc;
      $("#abcContents h2").text(title);
      $("#abcContents .imgBox img").attr("src", img);
      $("#abcContents .desc").html(desc);
    });
    $("#abcContents .btnClose").on("click", function() {
      contentsMotion.reverse();
    });
  })
  .catch(function(error) {
    console.log(error);
  });

let abc = new Swiper("#about #abc .mask", {
  slidesPerView: "auto",
  spaceBetween: 15,
  observer: true,
  observeParents: true,
  observeSlideChildren: true
});

gsap.from("#abc li", {
  y: "-150%",
  duration: 2,
  ease: "bounce.out",
  delay: 1,
  stagger: {
    each: 0.1
  }
});

$("#about").on("mousewheel", function(e) {
  let deltaY = e.originalEvent.deltaY;
  if (deltaY > 0) {
    abc.slideNext();
  } else {
    abc.slidePrev();
  }
});
let gnbTl = gsap.timeline({ paused: true });
gnbTl
  .to("#gnb", {
    duration: 0.8,
    left: 0,
    ease: "power4.out"
  })
  .from("#gnb li", {
    duration: 1,
    opacity: 0,
    x: 300,
    ease: "back",
    stagger: {
      each: 0.1
    }
  });
$(".btnAll").on("click", function() {
  if (!$(this).hasClass("on")) {
    $(this).addClass("on");
    gnbTl.restart();
    gnbTl.timeScale(1);
  } else {
    $(this).removeClass("on");
    gnbTl.timeScale(1.5);
    gnbTl.reverse();
  }
});
let changeTl = gsap.timeline({ paused: true });
changeTl
  .set(".changeItem", {
    autoAlpha: 1
  })
  .to(".changeItem li", {
    scaleY: 1,
    ease: "power4",
    duration: 1,
    stagger: {
      each: 0.1
    }
  });
  let oldURL="#home";
$("#gnb li").on("click", function() {
  $(".btnAll").removeClass("on");
  let url = $(this).find("a").data("url");
  gnbTl.timeScale(1.5);
  gnbTl.reverse();
  $(oldURL).hide();
  $(url).show();
  oldURL = url;
  return false;
});
