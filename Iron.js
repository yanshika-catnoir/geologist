class Iron{
    constructor(x,y,width,height){
     var option = {
         'restitution': 0.8,
         'friction': 3,
         'density': 30  
     }
    
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.heigh = height;
    World.add(world,this.body)
}
 display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("brown")
      rect(pos.x,pos.y,this.width,this.height);
 } 
 }








