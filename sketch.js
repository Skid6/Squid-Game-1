var bg, bgimg
var SeongGiHun, SeongGiHunimg
var LightGreen, LightGreenimg
var LightRed, LightRedimg


function preload(){
 bgimg = loadImage("Backround.jpg")
 SeongGiHunimg = loadImage("unnamed.png")
 LightRed = loadImage("Red.png")
 LightGreen = loadImage("Green.png")
}

function setup(){
  createCanvas(750,970)
  SeongGiHun = createSprite(375,900,10,10)
  SeongGiHun.addImage("SeongGiHun",SeongGiHunimg)
  SeongGiHun.scale = 0.03
  

 
}

function draw(){
  background(bgimg);
 text(mouseX+","+mouseY,mouseX,mouseY)
  
drawSprites()
}
