class Ball{
    constructor(x,y){
        var move={
            density:10
        }
        this.body=Bodies.rectangle(x,y,50,50,move);
        this.width=50;
        this.height=50;
        World.add(MYworld,this.body);
    }

    display(){

       var pos= this.body.position;
       fill("red");
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.width,this.height);

    }
}