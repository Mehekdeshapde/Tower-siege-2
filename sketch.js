const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var block;
var stand;
var rock;

function setup(){
    var canvas = createCanvas(1200,400);
   



    stand = new Ground(600,height,1200,20);

    block = new Block(310,195,30,40)
    block2 = new Block(310,195,30,40)
    block3 = new Block(360,190,30,40)
    block4 = new Block(330,195,30,40)
    block5 = new Block(320,195,30,40)
    block6 = new Block(310,195,30,40)
    block7 = new Block(290,195,30,40)
    
    block8= new Block(330,325,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(360,195,30,40);
    
    block16 = new Block(360,155,30,40);

    polygon = Bodies.circle(50,200,0);
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x:100,y:200});

    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);



}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);

Matter.Body.setPosition(polygon.body, {x:200, y:50});
}
}

