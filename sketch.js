
var trex ,trex_running;
var edges;
var ground, groundImage;
function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running", trex_running);
  trex.scale = 0.5;


  ground = createSprite(200,180,400,10)
  ground.addImage("ground",groundImage)
  ground.x = ground.width/2;
  ground.velocityX = -2
 edges = createEdgeSprites();
}

function draw(){
  background("white")
  
  if(keyDown("space")){
    trex.velocityY = -10
  }

  //gravity
  trex.velocityY = trex.velocityY + 0.5;

  if(ground.x < 0){
    ground.x = ground.width/2
  }
  trex.collide(ground)
  drawSprites()

}
