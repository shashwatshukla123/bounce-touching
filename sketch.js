var rect1,rect2,rect3,rect4,rect5,rect6

function setup() {
  createCanvas(800,400);
  rect1=createSprite(300,250,50,10);
  rect1.shapeColor="red";
  rect2=createSprite(100,200,50,10);
  rect2.shapeColor="red";
  rect2.velocityX=5;
  rect3=createSprite(350,200,10,50);
  rect4=createSprite(400,200,50,10);
  rect5=createSprite(500,300,50,10);
  rect6=createSprite(600,200,50,10);
  rect6.velocityX=-5;
}

function draw() {
  background(255,255,255);  

  rect1.y=mouseY;
  rect1.x=mouseX;
 
 isTouching(rect1,rect4);
  BounceOff(rect2,rect6);

  drawSprites();
}