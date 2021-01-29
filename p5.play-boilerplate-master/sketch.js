var fixedRect,movingRect




function setup() {
createCanvas(800,400);
  fixedRect=createSprite(400, 200, 90, 20);
  movingRect= createSprite(200,400,60,80);
  fixedRect.shapeColor="green"
  movingRect.shapeColor="red"
}

function draw() {
  background(0,0,0); 
  movingRect.x=World.mouseX 
  movingRect.y=World.mouseY 


if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2&&
movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2&&fixedRect.y-movingRect.y<fixedRect.width/2){
  movingRect.shapeColor="yellow"
  fixedRect.shapeColor="yellow"
}
else{
  movingRect.shapeColor="red"
  fixedRect.shapeColor="green"
}
  drawSprites();

}