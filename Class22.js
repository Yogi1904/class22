const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;

function setup(){
createCanvas(400, 400);

engine = Engine.create();
world = engine.world;

var options = {
    restitution: 1
}

bodies = Bodies.circle(100, 150, 50, options);
World.add(world, bodies);
}

var options = {
    isStatic: true
}
ground = Bodies.rectangle(0, 380, 400, 20, options);
World.add(world, ground);

function draw(){

    background(0);

    Engine.update(engine);

    circle(bodies.position.x, bodies.position.y, 50);
    rect(ground.position.x, ground.position.y, 400, 20);

    drawSprites();

}