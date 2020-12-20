class Box
{
	constructor(x,y,width,height)
	{

		
    this.leftWallBody=Bodies.rectangle(490,610,20,100,{isStatic:true})
    this.bottomBody=Bodies.rectangle(590,650,200,20,{isStatic:true})
    this.rightWallBody=Bodies.rectangle(690,610,20,100,{isStatic:true})
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody)

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill("red")
			rotate(this.angle)
            rect(0,0,20, 100);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			angleMode(RADIANS)
            fill("red")
            stroke("red")
			rotate(-1*this.angle)
            rect(0,0,20, 100);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			angleMode(RADIANS)
            fill("red")
            stroke("red")
			rect(0,0,200, 20);
			pop()
			
	}

}