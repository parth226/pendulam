var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(350,200,50,50);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
}

function draw() {
  background(0,0,0);
  movingrect.x = mouseX
  movingrect.y = mouseY
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.heigth/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
{
  movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";
}
else{
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
}
  drawSprites();
}
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceoff (movingRect,fixedRect)
 
  drawSprites();
}
