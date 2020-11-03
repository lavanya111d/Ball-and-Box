class Box
{
    constructor(x,y,width,height)
    {
        var options={
            restitution : 0.8
        }
        
        this.object = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.object);

    }

    display()
    {
        rectMode(CENTER);
        rect(this.object.position.x,this.object.position.y,this.width,this.height);
    }



}