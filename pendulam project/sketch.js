const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;
var ball;
var bar;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  bar = Bodies.rectangle(100,10,100,10);
  World.add(world,bar);
  ball = Bodies.circle(150,100,20,100);
  World.add(world,ball);
  string = new String(bar.body,ball.body);
}


function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  ellipseMode(CENTER);
  rect(bar.position.x,bar.position.y,100,10);
  ellipse(ball.position.x,ball.position.y,20,100);
  string.display();
}