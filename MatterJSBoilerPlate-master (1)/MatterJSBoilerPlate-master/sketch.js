
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new bob(350,350,20);
	bob2=new bob(370,350,20);
	bob3=new bob(390,350,20);
	bob4=new bob(410,350,20);
	bob5=new bob(430,350,20);

	ground1=new roof(400,200,800,20);
	ground2= new roof(400,650,800,20);

	chain1= new chain(ground1.body,bob1.body);
	chain2= new chain(ground1.body,bob2.body);
	chain3= new chain(ground1.body,bob3.body);
	chain4= new chain(ground1.body,bob4.body);
	chain5= new chain(ground1.body,bob5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  ground2.display();
  chain5.display();
  chain4.display();
  chain3.display();
  chain2.display();
  chain1.display();

  drawSprites();
 
}



