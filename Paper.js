class Paper {
    constructor(x, y, width, height ) {
        
            var options={
                friction:0.5,
                isStatic:false,
                restitution:0.3,
                density:1.2
             } 
    this.body = Bodies.rectangle(x, y, width, height, options); 
    this.width = width;
    this.height = height; 
    this.image = loadImage("paper.png");
    World.add(world, this.body);
} 
display(){
    
 imageMode(CENTER);
 image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
} 
}