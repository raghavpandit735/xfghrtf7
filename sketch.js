const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var sandy, startupbox, engine, world, hanger;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  sandy = new sprite(400, 200, 20, 20);
  startupbox = new Ground(400, 250, 80, 10);
 hanger = createSprite(500, 150, 30, 30);

}

function draw() {
  Engine.update(engine);
  background("black");  
  sandy.display();
  startupbox.display()
  drawSprites();
}