const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;

var ball;


function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(500,490,1000,20);
  left = new Ground(600,490,20,250);
  right = new Ground(800,490,20,250);

  var options={
  isStatic:false,
  restitution:0.3,
  friction:0,
  density:1.2
  }
  ball = Bodies.circle(200,200, 20,options);
  World.add(world,ball);

  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  ground.show();
  left.show();
  right.show();
 // ball.show

  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);

  keyPressed();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		move();
	}}

function move() {
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-0.3});
  Matter.Body.applyForce(ball, {x:0, y:0}, {x: 0.5, y:0});

}

