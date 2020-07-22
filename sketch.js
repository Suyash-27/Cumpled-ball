var side1,side2,side3;
var ball,ground,body1,body2,body3; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	side1 = createSprite(width/2.64,height-35,20,200);
	side1.shapeColor = ("red");

	side2 = createSprite(width/1.75,height-35,20,200);
	side2.shapeColor = ("red");

	side3 = createSprite(width/2.12,590,150,20);
	side3.shapeColor = ("red");
	
	engine = Engine.create();
	world = engine.world;
	
	body1 = Bodies.rectangle(width/2.65,height-35,20,100, {isStatic:true})
	World.add(world,body1);
	
	body2 = Bodies.rectangle(width/1.75,height-35,20,100, {isStatic:true})
	World.add(world,body2);

	body3 = Bodies.rectangle(width/2.12,590,150,20,{isStatic: true});
	World.add(world,body3);
	
    ball = new Ball(400,100,40,40);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
  ball.display();
}




