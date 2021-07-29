class Game {
    constructor(canvas, context){
    this.canvas = canvas
    this.context = context
    this.score = 0;
    this.randomY = Math.random() * this.canvas.height ;
    this.randomX = Math.random() * this.canvas.width;

    this.gShield = new Shields(this, this.randomX, this.randomY, 120, 70, "../images/Griffindor.png")
    this.sShield = new Shields(this, this.randomX, this.randomY, 155, 110, "../images/slytherin.png")
    this.rShield = new Shields(this, this.randomX, this.randomY, 120, 70, "../images/Revenclaw.png")
    this.hShield = new Shields(this, this.randomX, this.randomY, 100, 70, "../images/hufflepuff.png")

    this.blueSpell = new Spells(this, -50, this.randomY, 90, 60, '../images/Blue.png')
    this.redSpell = new Spells(this, this.randomX, -50, 90, 60, '../images/red.png')
    this.yellowSpell = new Spells(this, 775, this.randomY, 90, 60, '../images/yellow.png')
    this.greenSpell = new Spells(this, this.randomX, 500, 90, 60, '../images/green.png')


    this.harryPotter = new Player(this, 350, 200, 120, 90, "../images/HarryPotterSprite.png")
    canvas.style.border = '1px solid black'  
    
    }

    start(){
       this.drawLoop()
       
       this.harryPotter.move()

    }

    drawBackground(){

    const background = new Image()
    background.src = '../images/background.jpg'
    this.context.drawImage(background, 0, 0, canvas.width, canvas.height)
    // this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.fillStyle = "green";
    this.context.font = "25px Arial";
    this.context.fillText(`Score: ${this.score}`, 400, 50);
    this.context.fillText(`Lives: ${this.harryPotter.lives}`, 400, 80);
    }
    

    drawLoop(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawBackground();
    

    //yellow spell code
    this.yellowSpell.drawShields();
    this.yellowSpell.x -= 1

    if (this.yellowSpell.x < -75) {
      this.score++;
      this.yellowSpell.x = 775;
      this.yellowSpell.y = Math.random() * this.canvas.height ;
      this.yellowSpell.drawShields();
    }
    
    if (this.yellowSpell.didCollide(this.harryPotter)) {
      if (this.harryPotter.immunity === false) {
        this.harryPotter.lives -= 1;
        this.harryPotter.switchImmunity();
      }
    }
    
    //blue Spell code
      this.blueSpell.drawShields();
      this.blueSpell.x += 2

      if (this.blueSpell.x > 800) {
        this.score++;
        this.blueSpell.x = -90;
        this.blueSpell.y = Math.random() * this.canvas.height ;
        this.blueSpell.drawShields();
      }
      
      if (this.blueSpell.didCollide(this.harryPotter)) {
        if (this.harryPotter.immunity === false) {
          this.harryPotter.lives -= 1;
          this.harryPotter.switchImmunity();
        }
      }

      //Red Spell code
  
      this.redSpell.drawShields();
      this.redSpell.y += 3

      if (this.redSpell.y > 500) {
        this.score++;
        this.redSpell.y = -50;
        this.redSpell.x = Math.random() * this.canvas.width ;
        this.redSpell.drawShields();
      }
      
      if (this.redSpell.didCollide(this.harryPotter)) {
        if (this.harryPotter.immunity === false) {
          this.harryPotter.lives -= 1;
          this.harryPotter.switchImmunity();
        }
      }

      //green spell code
      this.greenSpell.drawShields();
      this.greenSpell.y -= 4

      if (this.greenSpell.y < -50) {
        this.score++;
        this.greenSpell.y = 500;
        this.greenSpell.x = Math.random() * this.canvas.width ;
        this.greenSpell.drawShields();
      }
      
      if (this.greenSpell.didCollide(this.harryPotter)) {
        if (this.harryPotter.immunity === false) {
          this.harryPotter.lives -= 1;
          this.harryPotter.switchImmunity();
        }
      }

    // switch(this.score){
    //   case 5:
    //     this.yellowSpell.y -= 2;
    //     this.blueSpell.x += 3;
    //     this.redSpell.x -= 4;
    //     this.greenSpell.y += 5;
    //     this.hShield.drawShields();
    //     break;
    //   case 60:
    //     this.rShield.drawShields();
    //     break;
    //   case 80:
    //     this.rShield.drawShields();
    //     break;
    //   case 100:
    //     this.sShield.drawShields();
    //     break;
    // }
    // if(this.score === 2){
    //   this.yellowSpell.y -= 2;
    //     this.blueSpell.x += 3;
    //     this.redSpell.x -= 4;
    //     this.greenSpell.y += 5;
        
    //     setInterval(() => {
    //       this.hShield.drawShields();
    //     }, 15000);
          
       
    // }

    // this.gShield.drawShields();
    // this.sShield.drawShields();
    // this.rShield.drawShields();
    // 

    
    // this.redSpell.drawShields();
    // this.greenSpell.drawShields();
    // this.yellowSpell.drawShields();

    this.harryPotter.drawShields();



    if (this.harryPotter.lives > 0) {
      requestAnimationFrame(() => {
        this.drawLoop();
      });
    }
    }
}