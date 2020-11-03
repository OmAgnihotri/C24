const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var box1,box2,box3,box4,box5,log1,log2,log3,log4,pig1,pig2,bird,engine,ground,world;
function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(600,590,1200,20);
  
box1=new Box(800,540,70,70);
box2=new Box(1000,540,70,70); 
pig1=new Pig(900,540)
log1=new Log(900,500,280,PI/2);
box3=new Box(800,450,70,70);
box4=new Box(1000,450,70,70);
pig2=new Pig(900,450);
log2=new Log(900,410,280,PI/2);
box5=new Box(900,360,70,70);
log3=new Log(840,360,150,PI/7);
log4=new Log(960,360,150,-PI/7);
bird=new Bird(200,100);


}

function draw() {
  background(0);  
Engine.update(engine);

box1.display();
box2.display();
ground.display();
pig1.display();
log1.display();
log2.display();
pig2.display();
box3.display();
box4.display();
bird.display();
log4.display();
log3.display();
box5.display();

}