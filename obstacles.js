class Obstacles {
    constructor (game, position) {
        this.game = game;
      this.positionX = Math.floor(Math.random() *850);
      this.vy = 8
      this.positionY = 0;
      this.objectwidth = Math.floor(Math.random() *50);
    }
    
   update() {
       this.positionX = this.positionX + 1;
       this.positionY = this.positionY + 1;
   }

    setRandomSizeObs () {
        obswidth = Math.floor(Math.random() *50);
        obsheight = Math.floor(Math.random() *50);
        
      } 
  
  /*   setRandomPosition () {
      const x = Math.floor(Math.random() * 300);
      const y = Math.floor(Math.random() * 400); 
  
      this.position = [ x, y ]; 
  
    
    } */
  
    draw () {
      /* const context = this.context;
      const position = this.position; */

      
      
      const GRID_SIZE = 100;
  
      this.game.context.fillStyle = 'orange';
  
      this.game.context.fillRect(this.positionX, this.positionY, this.objectwidth, 30)
    }

    update();

  }  
  
  
  /* const obstacle = new Obstacles (0) */
  
  /* createObstacles() */
  