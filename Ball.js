class Ball
{
    constructor()
    {
        var options = 
        {
            restitution:0.9
        }
        this.object = Bodies.circle (300, 100, 20, options);
        World.add(world,this.object);
    }
    display()
    {
        ellipseMode(RADIUS);
        ellipse(this.object.position.x, this.object.position.y, this.radius, this.radius);
    }
}