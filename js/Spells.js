class Spells extends Shields{
    constructor(classGame, x , y, w, h, imgSrc){
    super(classGame, x , y, w, h, imgSrc);
      
    }

    didCollide(otherComponent) {
        if (
          otherComponent.x + otherComponent.width - 30 < this.x ||
          otherComponent.y > this.y + this.height ||
          this.x + this.width  < otherComponent.x ||
          otherComponent.y + otherComponent.height  < this.y
        ) {
        //   if (this.x === -75 || this.x > 775 || this.y < -50 || this.y > 500) {
        //     this.game.score++;
        //   }
          return false;
        } else {
          return true;
        }
      }

}