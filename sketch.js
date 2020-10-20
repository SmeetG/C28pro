const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var paper;


function setup(){
    
    var canvas = createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;
    paper = new Paper(80,200,50,50)
    ground = new Ground(400,380,900,20)
    dustbinObj1 = new Dustbin(595,320,20,140)
    dustbinObj2 = new Dustbin(655,380,100,18)
    dustbinObj3 = new Dustbin(715,320,20,140)
    launcher = new Launcher(paper.body,{x:90,y:150});

   
}

function draw(){
    background(255);
   Engine.update(engine);
    ground.display();
    paper.display();
    dustbinObj1.display();
    dustbinObj2.display();
    dustbinObj3.display();
    launcher.display();
    

}

function keyPressed(){
    if(keyCode === UP_ARROW){
     //console.log(trash)
        Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-180})
    }
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    launcher.fly()
}