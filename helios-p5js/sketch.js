var posX = 0;
var posY = 0;

var xDir = false;
var yDir = false;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  posX = random(width);
  posY = random(height);

}

function draw() {
  // put drawing code here
  background(255,255);

  fill(255,0,0);
  ellipse(posX,posY,100,100);

  if(posX > width){
    xDir = true;
  }

  if(posX < 0){
    xDir = false;
  }

  if(posY > height){
    yDir = true;
  }

  if(posY < 0){
    yDir = false;
  }

  if(xDir == false){
    posX+=5;
  }else{
    posX-=5;
  }

  if(yDir == false){
    posY+=5;
  }else{
    posY-=5;
  }
  background(255,0);

}
