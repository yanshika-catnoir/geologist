const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer ,stone1 , Iron1 ,rubber ;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

  stone1 = new stone(700,500,100,100)
  
  Iron1 = new Iron(300,350)
  rubber = new Rubber(900,450,70)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    Iron1.display();
    rubber.display();
    

    
 
}