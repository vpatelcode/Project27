
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roofObject;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;

  roofObject = new Roof(700,100,800,20);
  
  bobObject1=new Bob(500,700,90);
  bobObject2=new Bob(600,700,90);
  bobObject3=new Bob(700,700,90);
  bobObject4=new Bob(800,700,90);
  bobObject5=new Bob(900,700,90);

  rope1= new Rope(bobObject1.body,roofObject.body,90*2,0);
  rope2= new Rope(bobObject2.body,roofObject.body,90*2,0);
  rope3= new Rope(bobObject3.body,roofObject.body,90*2,0);
  rope4= new Rope(bobObject4.body,roofObject.body,90*2,0);
  rope5= new Rope(bobObject5.body,roofObject.body,90*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);


  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
  }
}

function drawline(constraint)
{

bobBodyPosition=constraint.bodyA.position
roofBodyPosition=constraint.bodyB.position

roofBodyOffset=constraint.pointB;

roofBodyX=roofBodyPosition.x+roofBodyOffset.x
roofBodyY=roofBodyPosition.y+roofBodyOffset.y
line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);

}
