var posX = 0;
var posY = 0;

var xDir = false;
var yDir = false;

var img;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  posX = random(width);
  posY = random(height);

  img = loadImage('assets/transbackground.png');

}

function draw() {
  // put drawing code here
  clear();
  background(255,0);
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
    image(img,0,0,windowWidth,windowHeight);

  }else{
    posY-=5;
    image(img,0,0,windowWidth,windowHeight);

  }

}
