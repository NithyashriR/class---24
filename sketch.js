const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var log1;

function setup(){
    var canvas = createCanvas(900,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(450,height,900,20)
    box1 = new Box(800,480,50,50);
   box2 = new Box(600,480,50,50);
   pig1 = new Pig(700,480)
   log1 = new Log(700,450,250,PI/2)
    
   box3 = new Box(800,420,50,50);
   box4 = new Box(600,420,50,50);
   pig2 = new Pig(700,420)
   log2 = new Log(700,400,250,PI/2)

   box5 = new Box(700,390,50,50)

   log3 = new Log(750,290,100,-PI/7)
   log4 = new Log(650,310,100,PI/7)

   bird = new Bird(300,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();

    log3.display();
    log4.display();

    bird.display();
}