
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

                                    
function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	
	engine = Engine.create();
	world = engine.world;


	paper = new Paper(100,600,10);

	ground = new Ground(400,680,800,20);

	leftSide = new Dustbin(550,620,20,100);
	bottom = new Dustbin(610,660,100,20);
	rightSide = new Dustbin(670,620,20,100)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  background("red");
  Engine.update(engine);
  paper.display();
  ground.display();
leftSide.display();
bottom.display()
rightSide.display()

bottom.display();
rightSide.display();

  drawSprites();
 
}




function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 15,y : -15})
	}
	
}

