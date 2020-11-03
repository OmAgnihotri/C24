class Log{
    constructor(x,y,h,a){
        var options={
       restitution:0.5,
       friction:0.6
        }
        this.body=Bodies.rectangle(x,y,20,h,options);
        Matter .Body.setAngle(this.body,a);
        World .add(world,this.body);
        this.height=h;
    }
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push ();
    translate (pos.x,pos.y);
    strokeWeight(3);
    stroke("green");
    rotate (angle);
    rectMode(CENTER);
    rect(0,0,20,this.height);
    pop ();
}
}