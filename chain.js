class Chain{
constructor(bodyA,bodyB){
    var options = {
        'bodyA':bodyA,
        'bodyB':bodyB,
        'length':10,
        'stiffness':0.004
    }
    this.body = Matter.Constraint.create(options) ;
    World.add(world,this.body);
}
display(){
var posA = this.body.bodyA.position;
var posB =this.body.bodyB.position;
line(posA.x, posA.y, posB.x, posB.y);

}
}