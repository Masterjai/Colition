var fixRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(600,400,50,80);
  fixRect.shapeColor = "Green";
  fixRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "Green";
  movingRect.debug = true;
}

function draw() {
  background("Orange");
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x -fixRect.x < fixRect.width/2 + movingRect.width/2 &&
     fixRect.x -movingRect.x < fixRect.width/2 + movingRect.width/2 &&
     movingRect.y -fixRect.y < fixRect.height/2 + movingRect.height/2 &&
     fixRect.y -movingRect.y < fixRect.height/2 + movingRect.height/2 ){
  movingRect.shapeColor = "Red";
  fixRect.shapeColor = "Red"; 
  } else
  {
    movingRect.shapeColor = "Green";
    fixRect.shapeColor = "Green";
  }
  drawSprites();
}