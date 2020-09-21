const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var bullet,thickness,wall;
var speed ,weight;


function setup() {

  var canvas =  createCanvas(1600,400);
  engine = Engine.create();
  world = engine.world;

 
  
thickness=random(22,83);
  speed =random(223,321);
  weight=random(30,52);

  bullet = createSprite(50,200,50,50);
bullet.shapeColor="white"; 
  wall=createSprite(1000 ,200,thickness,height/2);
   wall.shapeColor = color(80,80,80);

   bullet.velocityX =speed;
   
}


function draw() {
  background(0,255,0); 
  Engine.update(engine); 
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness)
  
    if(damage>10)
    {
  wall.shapeColor=color(255,0,0)
 }


if(damage<10) 
{
wall.shapeColor=color(0,255,0)

}


  }
wall.display();
bullet.display();

drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
   bulletRightEdge=lbulley.x + bullet.width;
   wallLeftEdge=wall.x;
   if(bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
     return false;
}