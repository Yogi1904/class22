var mrect, frect;
var object1, object2;

function setup(){
  createCanvas(800, 800);

  mrect = createSprite(100, 300, 100, 100);
  mrect.shapeColor = "black";
  mrect.velocityX = 5;

  frect = createSprite(600, 300, 100, 100);
  frect.shapeColor = "black";
  frect.velocityX = -5;
} 
function draw(){

 background(255, 255, 255);

  if (bounceOff(mrect, frect)){
    mrect.velocityX = -(mrect.velocityX);
    frect.velocityX = -(frect.velocityX);
  } else {
    mrect.velcoityX = mrect.veloctiyX;
    frect.velocityX = frect.velocityX;
  }

  drawSprites();

}



function bounceOff(object1, object2){

  if (object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 && object2.y - object1.y < object1.height/2 + object2.height/2 ){
    
    return true;
 
 }  else {
   return false;
 }

}