class Spells extends Shields{
    constructor(classGame, x , y, w, h, imgSrc){
    super(classGame, x , y, w, h, imgSrc);
      
      this.collision = false;
    }

    didCollide(otherComponent) {
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