var bullet,wall;
var speed,weight,deformation;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 150, 50, 10);
  bullet.shapeColor=(255,255,255);
  wall=createSprite(1000,100,thickness,height/2);
  speed=random(223,321);
  weight=random(20,52);
  thickness=random(22,83);
}

function draw() {
  background(0,0,0); 
  bullet.velocityX= speed; 

  if(hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    var deformation= 0.5 * speed * weight * speed/(thickness * thickness * thickness);

    if (deformation>10){
      wall.shapeColor=color(255,0,0);
    }

    if (deformation<10){
      wall.shapeColor=color(0,255,0);
    }


   

  }

  


  drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge){
return true;

  } 
  return false;
}
