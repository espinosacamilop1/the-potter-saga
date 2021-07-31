class Player extends Shields{
    constructor(classGame, x , y, w, h, imgSrc){
    super(classGame, x , y, w, h, imgSrc);
        
        this.immunity = false;
        this.health = 100;
        this.shields = 0;
    }

    move(){ 
        document.addEventListener("keydown", (event) => {
            //   console.log(event.code);
      
            switch (event.code) {
              case "ArrowRight":
              case "KeyD":
                if(this.x < 700)this.x += 50;
                break;
              case "ArrowLeft":
              case "KeyA":
                if (this.x > -20) this.x -= 50;
                break;
              case "ArrowUp":
              case "KeyW":
                if(this.y > 0)this.y -= 50;
                break;
              case "ArrowDown":
              case "KeyS":
                if(this.y < 420)this.y += 50;
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

    resetHealth(){
      this.health = 100;
    }
    
}