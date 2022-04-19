var player;
var e1,e2,e3,e4
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26
var edges
var d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,d20,d21,d22,d23,d24,d25,d26,d27,d28,d29,d30,d31,d32,d33,d34,d35,d36,d37,d38,d39,d40,d41,d42,d43,d44,d45,d46,d47,d48,d49

function preload(){

}
function setup() {
  createCanvas(1000,640);
  player = createSprite(200,200,30,30);
  e1 = createSprite(500,500,30,30)
  e1.shapeColor = "yellow"
  e2 = createSprite(600,400,30,30)
  e2.shapeColor = "green"
  e3 = createSprite(900,100,30,30)
  e3.shapeColor = "purple"
  e4 = createSprite(200,300,30,30)
  e4.shapeColor = "red"
  w1 = createSprite(10,320,15,612)
  w2 = createSprite(500,20,990,15)
  w3 = createSprite(990,320,15,612)
  w4 = createSprite(500,620,990,15)
  w5 = createSprite(150,200,15,150)
  w6 = createSprite(200,130,100,15)
  w7 = createSprite(500,130,260,15)
  w8 = createSprite(851,200,15,150)
  w9 = createSprite(806,130,100,15)
  w10 = createSprite(270,300,50,15)
  w11 = createSprite(730,300,50,15)
  w12 = createSprite(400,300,50,15)
  w13 = createSprite(600,300,50,15)
  w14 = createSprite(370,345,15,100) 
  w15 = createSprite(630,345,15,100)
  w16 = createSprite(500,400,270,15)
  w17 = createSprite(270,400,50,15)
  w18 = createSprite(730,400,50,15)
  w19 = createSprite(150,500,15,150)
  w20 = createSprite(851,500,15,150)
  w21 = createSprite(200,570,100,15)
  w22 = createSprite(806,570,100,15)
  w23 = createSprite(700,550,15,150)
  w24 = createSprite(300,550,15,150)
  w25 = createSprite(300,100,15,150)
  w26 = createSprite(700,100,15,150)
  w1.shapeColor = "blue"
  w2.shapeColor = "blue"
  w3.shapeColor = "blue"
  w4.shapeColor = "blue"
  w5.shapeColor = "blue"
  w6.shapeColor = "blue"
  w7.shapeColor = "blue"
  w8.shapeColor = "blue"
  w9.shapeColor = "blue"
  w10.shapeColor = "blue"
  w11.shapeColor = "blue"
  w12.shapeColor = "blue"
  w13.shapeColor = "blue"
  w14.shapeColor = "blue"
  w15.shapeColor = "blue"
  w16.shapeColor = "blue"
  w17.shapeColor = "blue"
  w18.shapeColor = "blue"
  w19.shapeColor = "blue"
  w20.shapeColor = "blue"
  w21.shapeColor = "blue"
  w22.shapeColor = "blue"
  w23.shapeColor = "blue"
  w24.shapeColor = "blue"
  w25.shapeColor = "blue"
  w26.shapeColor = "blue"
  e1.velocityX = -2
  e2.velocityY = 2
  e3.velocityX = -2
  e4.velocityY = -2
  edges = createEdgeSprites()
  d1 = createSprite(50,70,20,20)
  d2 = createSprite(50,150,20,20)
  d3 = createSprite(50,230,20,20)
  d4 = createSprite(50,310,20,20)
  d5 = createSprite(50,390,20,20)
  d6 = createSprite(50,470,20,20)
  d7 = createSprite(50,550,20,20)
  d8 = createSprite(930,70,20,20)
  d9 = createSprite(930,150,20,20)
  d10 = createSprite(930,230,20,20)
  d11= createSprite(930,310,20,20)
  d12= createSprite(930,390,20,20)
  d13= createSprite(930,470,20,20)
  d14= createSprite(930,550,20,20)
  d15 = createSprite(130,70,20,20)
  d16 = createSprite(210,70,20,20)
  d17 = createSprite(290,70,20,20)
  d18 = createSprite(370,70,20,20)
  d19 = createSprite(450,70,20,20)
  d20 = createSprite(530,70,20,20)
  d21 = createSprite(610,70,20,20)
  d22 = createSprite(690,70,20,20)
  d23 = createSprite(770,70,20,20)
  d24 = createSprite(850,70,20,20)
  d25 = createSprite(850,595,20,20)
  d26 = createSprite(770,595,20,20)
  d27 = createSprite(690,595,20,20)
  d28= createSprite(610,595,20,20)
  d29= createSprite(530,595,20,20)
  d30 = createSprite(450,595,20,20)
  d31 = createSprite(370,595,20,20)
  d32 = createSprite(290,595,20,20)
  d33 = createSprite(210,595,20,20)
  d34 = createSprite(130,595,20,20)
  d35 = createSprite(930,595,20,20)
  d36 = createSprite(50,595,20,20)
  d37 = createSprite(330,270,20,20)
  d38 = createSprite(330,350,20,20)
  d39 = createSprite(330,430,20,20)
  d40 = createSprite(670,270,20,20)
  d41 = createSprite(670,350,20,20)
  d42= createSprite(670,430,20,20)
  d43= createSprite(570,270,20,20)
  d44= createSprite(490,270,20,20)
  d45= createSprite(410,270,20,20)
  d46= createSprite(570,430,20,20)
  d47= createSprite(490,430,20,20)
  d48= createSprite(410,430,20,20)
  d49= createSprite(50,430,20,20)
  d46.shapeColor = "orange"
}

function draw() 
{
   background(0);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    player.position.x = player.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    player.position.x= player.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    player.position.y = player.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    player.position.y = player.position.y + 5;
  }
  player.bounceOff(w1)
  player.bounceOff(w2)
  player.bounceOff(w3)
  player.bounceOff(w4)
  player.bounceOff(w5)
  player.bounceOff(w6)
  player.bounceOff(w7)
  player.bounceOff(w8)
  player.bounceOff(w9)
  player.bounceOff(w10)
  player.bounceOff(w11)
  player.bounceOff(w12)
  player.bounceOff(w13)
  player.bounceOff(w14)
  player.bounceOff(w15)
  player.bounceOff(w16)
  player.bounceOff(w17)
  player.bounceOff(w18)
  player.bounceOff(w19)
  player.bounceOff(w20)
  player.bounceOff(w21)
  player.bounceOff(w22)
  player.bounceOff(w23)
  player.bounceOff(w24)
  player.bounceOff(w25)
  player.bounceOff(w26)


 
  e1.bounceOff(edges)
  e2.bounceOff(edges)
  e3.bounceOff(edges)
  e4.bounceOff(edges)

  e1.bounceOff(e2)
  e1.bounceOff(e3)
  e1.bounceOff(e4)
  e2.bounceOff(e3)
  e2.bounceOff(e4)
  e3.bounceOff(e4)

 
  drawSprites();
}




