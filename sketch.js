const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var body;
var body1;
var body2;
var body3;
var body4;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true,			
	}

	roof = Bodies.rectangle(395,200,230,20,roof_options);
    World.add(world,roof);
    
	var body_options={
		isStatic:false,
		friction:0,
		restitution:1,	
		density:0.8		
	}

	body = Bodies.circle(300,470,40,body_options);
	World.add(world,body);

	

	body1 = Bodies.circle(355,470,40,body_options);
	World.add(world,body1);

	

    body2 = Bodies.circle(410,470,40,body_options);
	World.add(world,body2);

	
	

    body3 = Bodies.circle(465,470,40,body_options);
	World.add(world,body3);
 
	body4 = Bodies.circle(465,470,40,body_options);
	World.add(world,body4);

rope1= new rope	(body,roof,-80,0)
rope2 = new rope (body1,roof,-40,0)
rope3 = new rope (body2,roof,0,0)
rope4 = new rope (body3,roof,40,0)
rope5 = new rope(body4,roof,80,0)

Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
  //create ellipse shape for multiple bobs here
  ellipse(body.position.x,body.position.y,80,80);
  ellipse(body1.position.x,body1.position.y,80,80);
  ellipse(body2.position.x,body2.position.y,80,80);
  ellipse(body3.position.x,body3.position.y,80,80);
  ellipse(body4.position.x,body4.position.y,80,80);
  

  

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(body, body.position,{x:-50,y:-45})
	}
}
