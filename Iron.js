class Iron{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		var options={
			restituition:0.8,
			friction:3,
			density:30
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the ellipse here to display the rubber ball
			ellipse(0, 0, this.r)

			pop()
	}

}