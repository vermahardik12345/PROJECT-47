var bimg,bg;
var gamestate="wait";
var start,startimg;
var working,workingimg;
var gnameimg,gname;
var controlimg,control;
var play;
var ground,img;
var invig,player,playerimg;
var codenum;
var code,codeimg;
var story,storyimg;
var code1,code1img;
var forest,forestimg;
var codebg,codebgimg;
var startsound;
function preload(){
bimg=loadImage("imgs/b.png")
startimg=loadImage("imgs/START.png");
gnameimg=loadImage("imgs/GAME NAME.png");
storyimg=loadImage("imgs/STROY.png");
workingimg=loadImage("imgs/WORKING.png");
controlimg=loadImage("imgs/controls.png");
playimg=loadImage("imgs/play.png");
img=loadImage("imgs/back.jpg");
playerimg=loadAnimation("imgs/m1.png","imgs/m2.png","imgs/m3.png","imgs/m4.png","imgs/m5.png","imgs/m6.png",)
codeimg=loadImage("imgs/CODE.png");
code1img=loadImage("imgs/CODE1.png");
forestimg=loadImage("imgs/back.jpg");
startsound=loadSound("sounds/start.mp3");

};
function setup(){
 createCanvas(windowWidth,windowHeight);
 
 

 bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
 bg.addImage(bimg);
 bg.scale=0.5;
 start=createSprite(windowWidth/2,500);
 start.addImage(startimg);
 start.scale=0.1;
gname=createSprite(windowWidth/2,windowHeight/2+50);
gname.addImage(gnameimg);
gname.scale=0.2;


story=createSprite(windowWidth/2,windowHeight/2+50,windowWidth,windowHeight);
story.addImage(storyimg);
story.scale=0.67;

control=createSprite(windowWidth/2,windowHeight/2+50,windowWidth,windowHeight);
control.addImage(controlimg);
control.scale=0.67;

code=createSprite(1000,540,30,10);
code.addImage(codeimg);
code.scale=0.05;


working=createSprite(800,500);
working.addImage(workingimg);
working.scale=0.3;


play=createSprite(1100,500);
play.addImage(playimg);
play.scale=0.2;
ground=createSprite(width/2,height*2,width,height);
ground.addImage(img);
ground.x=ground.width/2;







codenum=Math.floor((Math.random()*10000)+1);



forest=createSprite(600,300);
forest.addImage(forestimg);
forest.scale=2;
player=createSprite(100,500,10,10);
player.addAnimation("running",playerimg);
player.scale=0.1;

invig=createSprite(400,560,1000,15);


 console.log(windowWidth,windowHeight);
}
function draw(){

  
 
  if(gamestate==="wait"){
    background("white");
  
    forest.visible=false;
    control.visible=false;
    
    story.visible=false;
    player.visible=false;
    bg.visible=true;
    working.visible=false;
    code.visible=false;
    play.visible=false;
    ground.visible=false;
    invig.visible=false;
    if(mousePressedOver(start)){
    gamestate="story";
     } 
    
   
    

  } 
  if(gamestate==="story"){
    story.visible=true;
    gname.visible=false;
    start.visible=false;
    working.visible=true;
    bg.visible=false;
    if(mousePressedOver(working)){
     gamestate="controls";
      } 
  }
  if(gamestate==="controls"){
    story.visible=false;
control.visible=true;
working.visible=false;
code.visible=true;

if(mousePressedOver(code)){
  gamestate="code";
   } 
  }
  if(gamestate==="code"){
   background("black");
   fill("green");
   textSize(100);
   

   
  
   control.visible=false;
    code.visible=false;
    play.visible=true;
    text("CODE:"+codenum,400,130); 
    if(mousePressedOver(play)){
      gamestate="gamestart";
    }

    
  }
if(gamestate==="gamestart"){
  play.visible=false;

  forest.visible=true;
  player.visible=true;
  player.collide(invig);
  invig.velocityX=-3;
     if(invig.x<0){
 invig.x=400
  }
  forest.velocityX=-5;
  if(forest.x<300){
    forest.x=600
     }
}
  
  drawSprites();
}