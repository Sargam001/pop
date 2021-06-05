class siaki{
    constructor(x,y,width,height){
      var grass
       grass={restitution:0.3}
        this.box=netherite.rectangle(x,y,width,height,grass)
        this.width=width
        this.height=height
     
        diamond.add(world,this.box)
   }
    display(){
      var ayanna=this.box.position
      var electric=this.box.angle 
      push()
      translate(ayanna.x,ayanna.y)
      rotate(electric)
      rectMode(CENTER) 
        fill("cyan")
        rect(0,0,this.width,this.height);
        pop()
    }
    
    
    }
    
    
    
    
    
    
    
    
    
    








