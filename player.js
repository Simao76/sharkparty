class Player {
    constructor (game, positionX, positionY) {
      this.positionX = positionX;
      this.positionY = positionY;
      this.context = game.context;
      this.image = new Image();
      this.image.src = "/starter_code/Images/kisspng-shark-eating-fish-royalty-free-sharks-5abb23abd3f737.4840932715222138038682.png"
    }
      drawPlayer() {
        this.context.drawImage(this.image, this.positionX, this.positionY, 50, 85);
        
    }
    moveRight() {
      this.positionX < 940 ? this.positionX +=20 : this.positionX
    }
  
    moveLeft() {
      this.positionX > 0 ? this.positionX -=20 : this.positionX
    }
  }