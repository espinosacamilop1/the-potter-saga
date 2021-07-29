class Shields {
    constructor(classGame, x, y, w, h, imageSrc) {
      this.game = classGame; 
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      this.img = new Image();
      this.img.src = imageSrc;
      this.randomY
    }

     drawShields(){
        this.game.context.drawImage(this.img, this.x, this.y, this.width, this.height)
     }
     shieldCollision(otherComponent){
      if (
        otherComponent.x + otherComponent.width - 30 < this.x ||
        otherComponent.y > this.y + this.height ||
        this.x + this.width  < otherComponent.x ||
        otherComponent.y + otherComponent.height  < this.y
      ) {
        return false;
      } else {
        return true;
      }
     }
     
} 