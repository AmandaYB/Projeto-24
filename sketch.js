const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var rock;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    rubber = new Rubber(600, 300, 50);
    rock = new Rock(400, 300, 70);
    iron = new Iron(800, 300, 60);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    rock.display();
    iron.display();

    
 
}