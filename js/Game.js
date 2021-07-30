class Game {
    constructor(canvas, context){
    this.canvas = canvas
    this.context = context
    this.score = 0;
    this.reset = false;
    this.randomY = Math.random() * this.canvas.height ;
    this.randomX = Math.random() * this.canvas.width;


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

    this.context.fillStyle = "#c2ffa3";
    this.context.font = "25px Arial";
    this.context.fillText(`Score: ${this.score}`, 10, 30);
    this.context.fillText(`Health: ${this.harryPotter.health}`, 10, 60);
    this.context.fillText(`Shields: ${this.harryPotter.shields}`, 10, 90);

    }
    

    drawLoop(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    
    ////////////////////
    //yellow spell code
    this.yellowSpell.drawShields();
    this.yellowSpell.x -= 0.6
    
    if (this.yellowSpell.didCollide(this.harryPotter)) {
      if (this.harryPotter.immunity === false) {
        this.context.clearRect(this.yellowSpell.x, this.yellowSpell.y, this.yellowSpell.width, this.yellowSpell.height)
        this.score += 2;
        this.harryPotter.switchImmunity();
        this.yellowSpell.x = 775;
        this.yellowSpell.y = Math.random() * this.canvas.height ;
        this.yellowSpell.drawShields();
      }
    }else if (this.yellowSpell.x < -75) {
      this.harryPotter.health -= 2;
      this.yellowSpell.x = 775;
      this.yellowSpell.y = Math.random() * this.canvas.height ;
      this.yellowSpell.drawShields();
    }

    ////////////////
    //blue Spell code
      this.blueSpell.drawShields();
      this.blueSpell.x += 0.8

      
      
      if (this.blueSpell.didCollide(this.harryPotter)) {
        if (this.harryPotter.immunity === false) {
          this.context.clearRect(this.blueSpell.x, this.blueSpell.y, this.blueSpell.width, this.blueSpell.height)
          this.score += 4;
          this.harryPotter.switchImmunity();
          this.blueSpell.x = -90;
          this.blueSpell.y = Math.random() * this.canvas.height ;
          this.blueSpell.drawShields();
        }
      }else if (this.blueSpell.x > 800) {
        this.harryPotter.health -= 4;
        this.blueSpell.x = -90;
        this.blueSpell.y = Math.random() * this.canvas.height ;
        this.blueSpell.drawShields();
      }


      ////////////////
      //Red Spell code
  
      this.redSpell.drawShields();
      this.redSpell.y += 1
      
      if (this.redSpell.didCollide(this.harryPotter)) {
        if (this.harryPotter.immunity === false) {
          this.context.clearRect(this.redSpell.x, this.redSpell.y, this.redSpell.width, this.redSpell.height)
          this.score += 6;
          this.harryPotter.switchImmunity();
          this.redSpell.y = -50;
          this.redSpell.x = Math.random() * this.canvas.width ;
          this.redSpell.drawShields();
        }
      }else if (this.redSpell.y > 500) {
        this.harryPotter.health -= 6;
        this.redSpell.y = -50;
        this.redSpell.x = Math.random() * this.canvas.width ;
        this.redSpell.drawShields();
      }

      //green spell code
      this.greenSpell.drawShields();
      this.greenSpell.y -= 1.2

      
      if (this.greenSpell.didCollide(this.harryPotter)) {
        if (this.harryPotter.immunity === false) {
          this.context.clearRect(this.greenSpell.x, this.greenSpell.y, this.greenSpell.width, this.greenSpell.height)
          this.score += 10;
          this.harryPotter.switchImmunity();
          this.greenSpell.y = 500;
          this.greenSpell.x = Math.random() * this.canvas.width ;
          this.greenSpell.drawShields();
        }
      }else if (this.greenSpell.y < -50) {
        this.harryPotter.health -= 10;
        this.greenSpell.y = 500;
        this.greenSpell.x = Math.random() * this.canvas.width ;
        this.greenSpell.drawShields();
      }

      
  ////////////////////////////////////////////
  //////SHIELDS


      if(this.harryPotter.shields === 0){
        if(this.score >= 30 && this.score < 60){
          this.hShield = new Shields(this, this.randomX, this.randomY, 100, 70, "../images/hufflepuff.png")
          this.yellowSpell.x -= 0.8;
          this.blueSpell.x += 1;
          this.redSpell.y += 1.2;
          this.greenSpell.y -= 1.4;
          this.hShield.drawShields();
      
      if (this.hShield.shieldCollision(this.harryPotter)) {
              this.harryPotter.shields++;
            }
      }
    }else if(this.harryPotter.shields === 1){
      this.context.clearRect(this.hShield.x, this.hShield.y, this.hShield.width, this.hShield.height)
  }
  
  
  if(this.score > 60 && this.harryPotter.shields === 0){
    this.gameOver();
  }else if(this.harryPotter.shields === 1){
    if(this.score >= 60 && this.score < 90){
      this.rShield = new Shields(this, this.randomX, this.randomY, 120, 70, "../images/Revenclaw.png")
      this.yellowSpell.x -= 1;
      this.blueSpell.x += 1.2;
      this.redSpell.y += 1.4;
      this.greenSpell.y -= 1.6;
      this.rShield.drawShields();

    if (this.rShield.shieldCollision(this.harryPotter)) {
        this.harryPotter.shields++;
      }
    }
  }else if(this.harryPotter.shields === 2){
    this.context.clearRect(this.rShield.x, this.rShield.y, this.rShield.width, this.rShield.height) 
    }

      
  if(this.score > 90 && this.harryPotter.shields < 2){
    this.gameOver();
  }else if(this.harryPotter.shields === 2){
    if(this.score >= 90 && this.score < 120){
      this.gShield = new Shields(this, this.randomX, this.randomY, 120, 70, "../images/Griffindor.png")
      this.yellowSpell.x -= 1.2;
      this.blueSpell.x += 1.4;
      this.redSpell.y += 1.6;
      this.greenSpell.y -= 1.8;
      this.gShield.drawShields();
    if (this.gShield.shieldCollision(this.harryPotter)) {
      this.harryPotter.shields++;
     }
    }
  }else if(this.harryPotter.shields === 3){
    this.context.clearRect(this.gShield.x, this.gShield.y, this.gShield.width, this.gShield.height) 
    }

    if(this.score > 120 && this.harryPotter.shields < 3){
      this.gameOver();
    }else if(this.harryPotter.shields === 3){

  if(this.score >= 120){
    this.sShield = new Shields(this, this.randomX, this.randomY, 155, 110, "../images/slytherin.png")
    this.yellowSpell.x -= 1.6;
    this.blueSpell.x += 1.8;
    this.redSpell.y += 2;
    this.greenSpell.y -= 2.2;
    this.sShield.drawShields();
    
  if (this.sShield.shieldCollision(this.harryPotter)) {
    this.harryPotter.shields++;
    }
  }
}else if(this.harryPotter.shields === 4){
  this.youWon() 
  }
   
  this.harryPotter.drawShields();

    if (this.harryPotter.health < 0) {
      this.harryPotter.health = 0;
      this.gameOver();
    }

    if (this.harryPotter.health > 0) {
      requestAnimationFrame(() => {
        this.drawLoop();
      });
    }

    }
  

    gameOver() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawBackground();

      this.context.fillStyle = "red";
      this.context.font = "70px Arial";
      this.context.fillText("GAME OVER!", 175, 300);
      this.harryPotter.health = 0;
    }

    youWon(){
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawBackground();

      this.context.fillStyle = "green";
      this.context.font = "70px Arial";
      this.context.fillText("YOU WON!", 175, 300);
    }
}