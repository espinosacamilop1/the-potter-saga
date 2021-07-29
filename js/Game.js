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
    this.context.fillText(`Health: ${this.harryPotter.health}`, 400, 80);
    this.context.fillText(`Shields: ${this.harryPotter.shields}`, 400, 110);
    }
    

    drawLoop(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawBackground();
    

    //yellow spell code
    this.yellowSpell.drawShields();
    this.yellowSpell.x -= 0.6

    if (this.yellowSpell.x < -75) {
      this.harryPotter.health -= 2;
      this.yellowSpell.x = 775;
      this.yellowSpell.y = Math.random() * this.canvas.height ;
      this.yellowSpell.drawShields();
    }
    
    if (this.yellowSpell.didCollide(this.harryPotter)) {
      if (this.harryPotter.immunity === false) {
        this.score += 2;
        this.harryPotter.switchImmunity();
      }
    }
    
    //blue Spell code
      this.blueSpell.drawShields();
      this.blueSpell.x += 0.8

      if (this.blueSpell.x > 800) {
        this.harryPotter.health -= 4;
        this.blueSpell.x = -90;
        this.blueSpell.y = Math.random() * this.canvas.height ;
        this.blueSpell.drawShields();
      }
      
      if (this.blueSpell.didCollide(this.harryPotter)) {
        
        if (this.harryPotter.immunity === false) {
          this.score += 4;
          this.harryPotter.switchImmunity();
        }
      }

      //Red Spell code
  
      this.redSpell.drawShields();
      this.redSpell.y += 1

      if (this.redSpell.y > 500) {
        this.harryPotter.health -= 6;
        this.redSpell.y = -50;
        this.redSpell.x = Math.random() * this.canvas.width ;
        this.redSpell.drawShields();
      }
      
      if (this.redSpell.didCollide(this.harryPotter)) {
        
        if (this.harryPotter.immunity === false) {
          this.score += 6;
          this.harryPotter.switchImmunity();
        }
      }

      //green spell code
      this.greenSpell.drawShields();
      this.greenSpell.y -= 1.2

      if (this.greenSpell.y < -50) {
        this.harryPotter.health -= 10;
        this.greenSpell.y = 500;
        this.greenSpell.x = Math.random() * this.canvas.width ;
        this.greenSpell.drawShields();
      }
      
      if (this.greenSpell.didCollide(this.harryPotter)) {
        if (this.harryPotter.immunity === false) {
          this.score += 10;
          this.harryPotter.switchImmunity();
        }
      }

   

      /////// PROTOTYPE FOR CHANGING THE SPEED OF THE SPELLS AND DRAWING THE SHIELD BASED OFF SCORE
      if(this.score > 30){
          this.hShield.drawShields();
          this.yellowSpell.x -= 0.8;
          this.blueSpell.x += 1;
          this.redSpell.y += 1.2;
          this.greenSpell.y -= 1.4;

          if(this.score === 30){

            this.harryPotter.health = 100;
          }
      }
      if(this.score > 60){
        this.hShield.drawShields();
        this.yellowSpell.x -= 1;
        this.blueSpell.x += 1.2;
        this.redSpell.y += 1.4;
        this.greenSpell.y -= 1.6;

        if(this.score === 30){

          this.harryPotter.health = 100;
        }
    }
    if(this.score > 90){
      this.hShield.drawShields();
      this.yellowSpell.x -= 1.2;
      this.blueSpell.x += 1.4;
      this.redSpell.y += 1.6;
      this.greenSpell.y -= 1.8;

      if(this.score === 30){

        this.harryPotter.health = 100;
      }
  }
  if(this.score > 120){
    this.hShield.drawShields();
    this.yellowSpell.x -= 0.8;
    this.blueSpell.x += 1;
    this.redSpell.y += 1.2;
    this.greenSpell.y -= 1.4;

    if(this.score === 30){

      this.harryPotter.health = 100;
    }
}


    // this.gShield.drawShields();
    // this.sShield.drawShields();
    // this.rShield.drawShields();
    // 

    

    this.harryPotter.drawShields();



    if (this.harryPotter.health > 0) {
      requestAnimationFrame(() => {
        this.drawLoop();
      });
    }
    }
}