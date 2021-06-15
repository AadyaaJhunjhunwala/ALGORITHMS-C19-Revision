var fixedRect,movingRect, fixedRect1,fixedRect2

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 80);
  movingRect= createSprite(300, 200, 80, 30);
fixedRect1=createSprite(500, 200, 50, 80);
fixedRect2=createSprite(600, 200, 50, 80);

}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
 }
 else if(isTouching(movingRect,fixedRect1)){
  movingRect.shapeColor="blue";
  fixedRect1.shapeColor="blue";
 }
 else if(isTouching(movingRect,fixedRect2)){
  movingRect.shapeColor="white";
  fixedRect2.shapeColor="white";
 }
 else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  fixedRect1.shapeColor="green";
  fixedRect2.shapeColor="green";
 }

  drawSprites();
}



