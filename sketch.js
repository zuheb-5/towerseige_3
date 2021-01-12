const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var platform1, platform2;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var block17;
var block18;
var block19;
var block20;
var polygon, polygonImg;
var slingshot;
var backgroundImg;
var score = 0;
var monster;

function preload() 
  {
    polygonImg = loadImage("hexagon.png");
    backgroundImg = loadImage("star.jpg");

  }

function setup() {
  createCanvas(900,400);
    
  
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(600,390,1200,20);
    platform1 = new Ground(300,350,300,10);
    platform2 = new Ground(650,275,300,10);

     block1 = new Box(175,325,50,50);
     block2 = new Box(225,325,50,50);
     block3 = new Box(275,325,50,50);
     block4 = new Box(325,325,50,50);
     block5 = new Box(375,325,50,50);
     block6 = new Box(425,325,50,50);
    //ABOVE BLOCKS ARE THE BASE 6 BLOCKS ON PLATFORM 1

     block7 = new Box(225,275,50,50);
     block8 = new Box(275,275,50,50);
     block9 = new Box(325,275,50,50);
     block10 = new Box(375,275,50,50);
    //ABOVE BLOCKS ARE THE FOUR BLOCKS ON PLATFORM 1

     block11 = new Box(275,225,50,50);
     block12 = new Box(325,225,50,50);
    //ABOVE BLOCKS ARE THE TWO BLOCKS ON PLATFORM 1

     block13 = new Box(300,175,50,50);
     //ABOVE BLOCK IS THE SINGLE BLOCK ON PLATFORM 1
     
     block14 = new Box(575,250,50,50);
     block15 = new Box(625,250,50,50);
     block16 = new Box(675,250,50,50);
     block17 = new Box(725,250,50,50);
     //ABOVE BLOCKS ARE THE FOUR BASE BLOCKS ON PLATFORM 2
     
     block18 = new Box(625,200,50,50);
     block19 = new Box(675,200,50,50);
     //ABOVE BLOCKS ARE THE TWO BLOCKS ON PLATFORM 2

     block20 = new Box(650,150,50,50);
     //ABOVE BLOCK IS THE SINGLE BLOCK ON PLATFORM 2

    polygon = new Polygon;

    slingshot = new SlingShot(polygon.body,{x:100, y:100});

    monster = new Monster(640,330,100,100);

    

  // console.log(polygon.position.x);
  // console.warn(polygon.position.y);
    Engine.run(engine);
}

function draw() {
  
    background(backgroundImg);

  Engine.update(engine);
  noStroke();
  fill("red");
  textFont("lucida handwriting");
  textSize(20);
  text("Score "+score,750,50);
  ground.display();
  platform1.display();
  platform2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  polygon.display();
  slingshot.display();
  monster.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  fill("white");
  stroke("black");
  textSize(20)
  textFont("Algerian");
  text("Drag the Hexagon and Release it to destroy the arrangement of blocks",10,20);
  text("Press Space To get another Chance to Play",400,380);
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:100,y:100})
    slingshot.attach(polygon.body);
  }
}


