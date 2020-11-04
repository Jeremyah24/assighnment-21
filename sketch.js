var bullet,wall
var speed,weight
var thickness



function setup() {
  createCanvas(800,400);
 bullet= createSprite(100, 200, 50, 50);
wall= createSprite(750,200,20,150);
speed=random(5,20)
weight=random(15,40)
thickness=random(20,50)
bullet.velocityX=speed
}

function draw() {
  background("black"); 
  var damage=(0.5*speed*weight*speed)/(thickness*thickness*thickness)
  console.log(damage)
  if(bullet.isTouching(wall))
  {
    bullet.velocityX=0
    if(damage<100)
    wall.shapeColor=("green");
    if(damage>=100)
    wall.shapeColor=("red");
  }
  drawSprites();
}