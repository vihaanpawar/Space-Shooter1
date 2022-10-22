var shooterImage,shooter;
var backgroundImage;

function preload(){

  backgroundImage=loadImage("background.jpg");
  shooterImage=loadImage("spaceship.png");
}

function setup(){
  createCanvas(1500,1000);
  bg=createSprite(750,450,1500,900);
  bg.addImage("bgImg",backgroundImage);
  bg.scale=1.5;
  bg.velocityY=2;

  shooter=createSprite(700,760,100,100);
  shooter.addImage("shooterImg",shooterImage);
}

function draw(){

  background('black');
  if(bg.y>400){
    bg.y=300;
  }

  if(keyDown(LEFT_ARROW)){
    shooter.x=shooter.x-3;
  }

  if(keyDown(RIGHT_ARROW)){
    shooter.x=shooter.x+3;
  }
  drawSprites();
}