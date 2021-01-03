class Sling{
    constructor(bodyA,pointB){
        var join={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:350
        }
        this.pointB=pointB;
        this.body=Constraint.create(join);
        World.add(MYworld,this.body);

    }

     display(){
         var posA=this.body.bodyA.position;
         var posB=this.pointB;
         push();
         stroke("yellow");
         strokeWeight(5);
         line(posA.x,posA.y,posB.x,posB.y);
         pop();
     }
}