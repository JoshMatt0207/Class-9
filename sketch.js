var expo
function setup() {
  createCanvas(400,400);
   expo=createSprite(200,200,10,50)
}

function draw() 

{
  background("green");
  if(keyDown(RIGHT_ARROW)){
    expo.velocityX=2
  }
 
 
 
 
 
  drawSprites()


}




