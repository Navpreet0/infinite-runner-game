var unicorn,obstacle,bg,invisibleground;
var invisiblewall,obstacleG,obstacle,invis;
var stone,coin,coinimg,coinsound;
var heart;
var invisiblestrike;
var life=3;
var coins=0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){

  unicornimg = loadImage("unicorn.png");
  obstacleimg = loadImage("obstacle.png");
  bgimg = loadImage("bg.png");
  stoneimg = loadImage("villen1.png");
  coinimg = loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png");
  coinsound = loadSound("coin.mp3");
 
  heartimg = loadImage("heart.png");
  
  lifeSound = loadSound("health.wav");
  
  jumpingSound = loadSound("jump.mp3")
}

function setup() {
createCanvas(600,300);


  
  bg = createSprite(400,-260,10,10);
 bg.addImage(bgimg);
  bg.scale=1.5;
  bg.velocityX = -2;
  obstacleG= new Group();
  
stoneG = new Group();
  
     unicorn = createSprite(60,250,10,10);
 unicorn.addImage(unicornimg);
  unicorn.scale=0.14;
  
invisibleground = createSprite(300,260,600,10);
  invisibleground.visible=false;
  
 coinGroup = new Group();
 lifeGroup = new Group();
 invisibleG = new Group();
  
}


function draw() {
  
  if(keyDown("space")&&unicorn.y>210){
    unicorn.velocityY=-8;
    jumpingSound.play();
  }
  
  unicorn.velocityY=unicorn.velocityY+0.3;
  unicorn.collide(invisibleground);
  
if(bg.x<150){
  bg.x=bg.width/2;
}
  
 if( obstacleG.isTouching(unicorn)){
   unicorn.y=obstacle.y
 }
  
   
  if(unicorn.isTouching(coinGroup)){
    coinsound.play();
    coinGroup[0].destroy();
    coins=coins+1;
  }
  

  unicorn.debug=true;
  unicorn.setCollider("rectangle",70,0,704,200);

  
    if(unicorn.isTouching(lifeGroup)){
      life = life+1;
      lifeGroup[0].destroy();
      lifeSound.play();
    }
  
  
  if(life===0){
 //text here
      
  }
  if(unicorn.isTouching(invisibleG)){
    unicorn.collide(invisibleG);
    
  }
  
  if(unicorn.isTouching(stoneG)){
    life=life-1;
    stoneG[0].destroy();
  }
  
  drawSprites()

  
  spawnWood();
  spawnStone();
  spawnCoins();
  spawnLife();
  spawnStrike();
  
  text("𝐋𝐈𝐅𝐄 💗 = "+life,500,40);
  text("𝐂𝐎𝐈𝐍𝐒 = "+coins,500,60);

}

function spawnWood(){
  if (frameCount %200 === 0){
  obstacle = createSprite(650,140,10,10);
 obstacle.addImage(obstacleimg);
  obstacle.scale=0.7;
    obstacle.velocityX=-3;
    obstacle.debug=true;
   obstacle.lifetime=700;
obstacleG.add(obstacle);
    unicorn.collide(invisibleground);
    obstacle.setCollider("rectangle",-40,-10,210,20);
    
  }

}

function spawnStone(){
  if (frameCount %700 === 0){
      stone = createSprite(650,240,10,10);
  stone.addImage(stoneimg);
    stone.velocityX=-3;
    stone.scale=0.35;
    stoneG.add(stone);
    stone.debug=true;
    stone.setCollider("circle",-22,0,50)
  }
}

function spawnCoins(){
if (frameCount %60 === 0){ 
     coin = createSprite(650,240,40,10);
  coin.addAnimation("coin",coinimg);
  coin.scale=0.1;
  coin.velocityX=-3;
  
 coinGroup.add(coin);
  
  }
}

function spawnLife(){
if (frameCount %800 === 0){ 
 heart = createSprite(650,130,60,10)
  heart.addImage(heartimg);
heart.scale=0.1;
  heart.velocityX=-3;
  lifeGroup.add(heart);
}
}

function spawnStrike(){
 if (frameCount %200 === 0){
 invisiblestrike = createSprite(630,175,150,10);  
 invisiblestrike.velocityX=-3;
  invisiblestrike.visible=false;
  invisibleG.add(invisiblestrike);
  //invisiblestrike.debug=true;
}
}





