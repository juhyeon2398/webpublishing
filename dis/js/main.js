let app;
let w = window.innerWidth;
let h = window.innerHeight;
app = new PIXI.Application({width:w,height:h,backgroundColor:0xff0000});
document.body.appendChild(app.view);

let img = new PIXI.Sprite.from("../images/a.jpg");
img.width=w;
img.height=h;
let displaceMap = new PIXI.Sprite.from("../images/cover.jpg");
let displacefilter = new PIXI.filters.DisplacementFilter(displaceMap);
displaceMap.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
app.stage.addChild(img);
app.stage.addChild(displaceMap);
app.stage.filters =[displacefilter];
displaceMap.scale.x=4;
displaceMap.scale.y=4;
setInterval(function(){
    displaceMap.x+=10;
    displaceMap.y+=4;
},10)