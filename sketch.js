const gold = Matter.Engine
const diamond = Matter.World
const netherite = Matter.Bodies
 
// engine is used to create the physics engine
// world is used to create the physical world and add objects to it
//bodies is used to create the objects 

var world,engine,ground1,box1,box2 
function setup() {
  createCanvas(800,400);
  engine=gold.create()
  world=engine.world
 ground1=new hanna(400,400,800,20)
 box1=new siaki(200,300,50,50)
 box2=new siaki(240,100,50,100)
  
 
  //console.log(ground)
}

function draw() {
  background("pink");  
  gold.update(engine)
  box1.display()
  ground1.display()
  box2.display()

}