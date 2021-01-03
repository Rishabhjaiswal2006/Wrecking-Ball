const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var MYengine, MYworld;





function setup(){
    createCanvas(1200,600);
    MYengine = Engine.create();
    MYworld = MYengine.world;

    ground= new Ground(600,590,1200,20);
    box1= new Box(600,540);
    box2= new Box(600,475);
    box3= new Box(600,410);
    box4= new Box(600,345);
    box5= new Box(600,280);
    box6= new Box(600,215);
    box7= new Box(600,150);
    box8= new Box(600,85);

    box11= new Box(675,540);
    box21= new Box(675,475);
    box31= new Box(675,410);
    box41= new Box(675,345);
    box51= new Box(675,280);
    box61= new Box(675,215);
    box71= new Box(675,150);
    box81= new Box(675,85);

    box12= new Box(750,540);
    box22= new Box(750,475);
    box32= new Box(750,410);
    box42= new Box(750,345);
    box52= new Box(750,280);
    box62= new Box(750,215);
    box72= new Box(750,150);
    box82= new Box(750,85);

    ball= new Ball(400,300);

    thread= new Sling(ball.body,{x:400,y:50});

}

function draw(){
    background(0);
    Engine.update(MYengine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box11.display();
    box21.display();
    box31.display();
    box41.display();
    box51.display();
    box61.display();
    box71.display();
    box81.display();

    box12.display();
    box22.display();
    box32.display();
    box42.display();
    box52.display();
    box62.display();
    box72.display();
    box82.display();

    ball.display();
    thread.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}