class Paper {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("pictures/paper.png");
        this.x=x;
        this.y=y;
        this.r=radius;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
        

    }
  


display(){
    push()
    strokeWeight(4);
    stroke("red");
    fill(255);
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    ellipse(0, 0, this.r, this.r);
    pop()
  }


}



