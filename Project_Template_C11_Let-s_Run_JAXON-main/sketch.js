var path, pathImg;
var runner, runImg;
var coin, coinImg;
var energyDrink, energyDrinkImg;
var rightInvisible, leftInvisible;
var power, powerImg;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage("pathway",pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  
  runner = createSprite(200,300);
  runner.addAnimation("running",runImg);
  runner.scale = 0.1;
  
  rightInvisible = createSprite(10,200,100,400);
  rightInvisible.visible = false;

  leftInvisible = createSprite(390,200,100,400);
  leftInvisible.visible = false;
}

function draw() {
  background(0);
  
  //runner follows mouse
  runner.x = mouseX; 
  
  //infinite road
  if(path.y > 400) {
    path.y = height/2;
  }
  
  //invisible barriers
  if(runner.isTouching(rightInvisible)) {
    runner.x = 70;
  }
  if(runner.isTouching(leftInvisible)) {
    runner.x = 330;
  }
  
  //draw sprites
  drawSprites();

}

