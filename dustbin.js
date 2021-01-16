class Dustbin {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:0,
            density:0
        }
        this.image=("pictures/trash.png")
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body= Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body)
        
    }
    display(){
        push();
        strokeWeight(4);
    stroke("red");
    fill(255);
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    rect(0, 0, this.width, this.height);
    pop()
    }
}