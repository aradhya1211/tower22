class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0,
          friction :0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png");
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      var position= this.body.position;
      
      console.log(this.body.speed)
     if(this.body.speed < 3){
       image(this.image,this.body.position.x,this.body.position.y,this.height,this.width)
     }
     else{
       World.remove(world, this.body);
     
     push();
     this.Visiblity = this.Visiblity - 1;
     tint(255,this.Visiblity)
     imageMode(CENTER);
     image(this.image,this.body.position.x,this.body.position.y,this.height,this.width)
            pop();}
       }
    }
