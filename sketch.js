
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground, survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("monkey_moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350,900, 10);
  ground.VelocityX = -3
  ground.x = ground.width/2;
  
  FoodGroup = new Group();
  ObstaclesGroup = new Group();
  
  score = 0;
  
}


function draw() {
  background("255");
  
  if(keyDown("space")){
    monkey.velocityY = -10;
    
  }
  monkey.velocityY = monkey.velocityY+0.8
  
  monkey.collide(ground);
  spawnFood();
  spawnObstacles();

  drawSprites();
  
  if(ObstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    ObstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    ObstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    
    
  }
  
  text("Score: ",score, 200, 50);
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+survivalTime, 100, 50);

  
}
function spawnFood(){
  
  if(frameCount%80===0){
    banana = createSprite(600, 250, 40, 10);
    banana.y = random(120,200);
    banana.velocityX = -5;
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    FoodGroup.add(banana);
    banana.lifetime = 300;
  }

}
function spawnObstacles(){
  
  if(frameCount%80===0){
    obstacles = createSprite(800, 320, 10, 40);
    obstacles.velocityX = -6;
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.15;
    ObstaclesGroup.add(obstacles);
    obstacles.lifetime = 300;
  }

}





