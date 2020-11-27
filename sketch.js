var car ,wall;
var speed , weight;

function setup() {
  createCanvas(1700,400);

  // setting random values for speed and weight
  speed = random(55,90);
  weight = random(400,1500);

  // creating a sprite for wall
  wall = createSprite(1600,200,60,height/2);
  wall.shapeColor = color(80,80,80);

  // creating a sprite for car
  car = createSprite(100, 200, 50, 50);
  car.shapeColor = "white";
  car.velocityX = speed;
}

function draw() {
  // setting the background as black
  background(0);  

  // detecting the collision of the wall and the car
if(wall.x - car.x < (car.width+ wall.width)/2){

  // stopping the car after collision
  car.velocityX = 0;

  // introducing a local variable deformation
  var deformation = 0.5 * weight * speed * speed/ 22500;

  // giving shape colour of car red when deformation is more
  if(deformation > 180){
    car.shapeColor = color(225,0,0);
  }

  // giving the shape colour of car as yellow when deformation is average
  if(deformation< 180 && deformation>100){
    car.shapeColor = color(230,230,0);
  }

  // giving the shape colour of car as green when deformation is normal
  if(deformation<100){
    car.shapeColor = color(0,225,0);
  }
}

drawSprites();
}