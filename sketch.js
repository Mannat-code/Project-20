var car ,car2, car3 , car4 , wall , wall2 , wall3 ;

var speed , weight;

var breaker1 , breaker2 , breaker3 , breaker4 ;

function setup()
 {
  createCanvas(1300,400);
  speed=random(55 , 90);

  weight=random(200 , 1300);
 

  wall = createSprite(0 , 100 , 5000 ,5);
  wall.shapeColor="80,80,80"; 
  wall2 = createSprite(0 , 200 , 5000 ,5);
  wall2.shapeColor="80,80,80"; 
  wall3 = createSprite(0 , 300 , 5000 ,5);
  wall3.shapeColor="80,80,80"; 
  

  breaker1 = createSprite(1200 , 50 , 20 ,70);
  breaker1.shapeColor="grey";
  breaker2 = createSprite(1200 , 150 , 20 ,70);
  breaker2.shapeColor="grey";
  breaker3 = createSprite(1200 , 250 , 20 ,70);
  breaker3.shapeColor="grey";
  breaker4 = createSprite(1200 , 350 , 20 ,70);
  breaker4.shapeColor="grey";
 

  car = createSprite(50 , 50 , 30 , 10);
  car.shapeColor="white";
  car2 = createSprite(50 , 150 , 30 , 10);
  car2.shapeColor="white";
  car3 = createSprite(50 , 250 , 30 , 10);
  car3.shapeColor="white";
  car4 = createSprite(50 , 350 , 30 , 10);
  car4.shapeColor="white";
  
}

function draw() 
{
  background(0,0,0);  
  car.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;

  if( breaker1.x - car.x < (car.width + breaker1.width)/2)
  {
   car.velocityX=0;
   var deformation = 0.5 * weight * speed * speed/22100;
   if(deformation > 180)
   {
     car.shapeColor=color(255 , 0 , 0);
   }
   if(deformation < 180 && deformation > 100)
   {
    car.shapeColor=color(230 , 230 , 0);
   }
   if(deformation < 100)
   {
    car.shapeColor=color( 0 , 255 , 0);
   }
  }

  if( breaker2.x - car2.x < (car2.width + breaker2.width)/2)
  {
   car2.velocityX=0;
   var deformation = 0.5 * weight * speed * speed/22100;
   if(deformation > 180)
   {
     car2.shapeColor=color(255 , 0 , 0);
   }
   if(deformation < 180 && deformation > 100)
   {
    car2.shapeColor=color(230 , 230 , 0);
   }
   if(deformation < 100)
   {
    car2.shapeColor=color( 0 , 255 , 0);
   }
  }

  if( breaker3.x - car3.x < (car3.width + breaker3.width)/2)
  {
   car3.velocityX=0;
   var deformation = 0.5 * weight * speed * speed/22100;
   if(deformation > 180)
   {
     car3.shapeColor=color(255 , 0 , 0);
   }
   if(deformation < 180 && deformation > 100)
   {
    car3.shapeColor=color(230 , 230 , 0);
   }
   if(deformation < 100)
   {
    car3.shapeColor=color( 0 , 255 , 0);
   }
  }
 


  if( breaker4.x - car4.x < (car4.width + breaker4.width)/2)
  {
   car4.velocityX=0;
   var deformation = 0.5 * weight * speed * speed/22100;
   if(deformation > 180)
   {
     car4.shapeColor=color(255 , 0 , 0);
   }
   if(deformation < 180 && deformation > 100)
   {
    car4.shapeColor=color(230 , 230 , 0);
   }
   if(deformation < 100)
   {
    car4.shapeColor=color( 0 , 255 , 0);
   }
  }
  drawSprites();
}