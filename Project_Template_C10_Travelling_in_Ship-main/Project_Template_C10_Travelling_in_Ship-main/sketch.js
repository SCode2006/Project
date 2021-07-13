var sea,seaImg;
var ship,shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImg);
  sea.velocityX = -4;

  ship = createSprite(150,250,20,50);
  ship.addAnimation("sailing",shipImg1);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
 
  drawSprites();

  if(sea.x > 0) {
    sea.x = sea.width / 2;
  }
}