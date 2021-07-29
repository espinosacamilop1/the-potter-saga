class Player extends Shields{
    constructor(classGame, x , y, w, h, imgSrc){
    super(classGame, x , y, w, h, imgSrc);

        this.immunity = false;
        this.lives = 3;
    }

    move(){ 
        document.addEventListener("keydown", (event) => {
            //   console.log(event.code);
      
            switch (event.code) {
              case "ArrowRight":
              case "KeyD":
                if(this.x < 700)this.x += 40;
                break;
              case "ArrowLeft":
              case "KeyA":
                if (this.x > -20) this.x -= 40;
                break;
              case "ArrowUp":
              case "KeyW":
                if(this.y > 0)this.y -= 40;
                break;
              case "ArrowDown":
              case "KeyX":
                if(this.y < 420)this.y += 40;
                break;
              default:
                console.log("Are you even moving?!?!");
            }
          });
    }
    switchImmunity = () => {
      this.immunity = true;
      setTimeout(() => {
        this.immunity = false;
      }, 1000);
    };
}