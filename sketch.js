var frect, mrect, erect;
var object1, object2;

function setup() {
  createCanvas(800,400);
  mrect = createSprite(200, 200, 50, 50);
  mrect.shapeColor = "black";

  frect = createSprite(600, 200, 50, 50)
  frect.shapeColor = "black";

  erect = createSprite(300, 200, 50, 50)
  erect.shapeColor = "black";
}

function draw() {
  background(255,255,255); 
  
 mrect.x = mouseX;
  mrect.y = mouseY;
   
  if (isTouching(frect, mrect)){
    mrect.shapeColor = "red";
    frect.shapeColor = "red";
  } else{
    mrect.shapeColor = "black";
    frect.shapeColor = "black";
  }

  if (isTouching(mrect, erect)){
    mrect.shapeColor = "red";
    erect.shapeColor = "red";
  } else{
    mrect.shapeColor = "black";
    erect.shapeColor = "black";
  }
  
  drawSprites();

  
}

function isTouching(object1, object2){

  if (object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object1.width/2 + object2.width/2 &&
   object1.y - object2.y < object1.height/2 + object2.height/2 && object2.y - object1.y < object1.height/2 + object2.height/2 ){
   
   return true;

}  else {
  return false;
}

}

