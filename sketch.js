var rec1,rec2,rec3,rec4,rec5,rec6

function setup() {
  createCanvas(800,400);
  rec1=createSprite(100,150,40,20)
  rec2=createSprite(150,100,40,20)
  rec3=createSprite(200,50,40,20)
  rec4=createSprite(250,0,40,20)
  rec5=createSprite(300,10,40,20)
  rec6=createSprite(400,50,40,20)
  rec3.velocityX=2
  rec6.velocityX=-3
  
}

function draw() {
  background(255,255,255); 
  rec1.x=mouseX
  rec1.y=mouseY 
  isTouching(rec1,rec2)
  bounceOff(rec3,rec6)
  
  drawSprites()
  
}
