class Box{
    constructor(x,y){
        var move={
            restitution:0.1,
            friction:1,
            density:2
        }
        this.body=Bodies.rectangle(x,y,65,65,move);
        this.width=65;
        this.height=65;
        World.add(MYworld,this.body);
        
    }

    display(){
       var pos=this.body.position;
       var angle= this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       fill("white")
       stroke("blue");
       strokeWeight(4);
       rectMode(CENTER)
       rect(0,0,this.width,this.height);
       pop();

    }
}