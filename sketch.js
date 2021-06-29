
function preload(){
seaImg = loadImage("sea.png");

shipImg = loadAnimation("ship-3.png","ship-4.png")

sea = createSprite(500,200,200,200);
sea.addImage(seaImg);
sea.scale = 0.3;
sea.velocityX = -2;

ship = createSprite(100,300,15,15)
ship.addAnimation("moving",shipImg);
ship.scale = 0.2;
}

function setup(){
  createCanvas(400,400);
}

function draw() {
  background("white");

  if(sea.x < 0) {
    sea.x = sea.width/2;
  }

 drawSprites();
}