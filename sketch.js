const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine, world;
var ground1;

function preload() {
  
}

function setup(){
    createCanvas(1200,400);
    
    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
   
    Engine.run(engine);
    
}

function draw(){
    rectMode(CENTER);
    background(255);
    Engine.update(engine);
    drawSprites();
    // ground.display();0
}