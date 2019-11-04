class Game {
    constructor ($canvas) {
     this.context = $canvas.getContext('2d');
    
    this.player = new Player(this, 500, 400)
    this.obstacles = new Obstacles(this, undefined)
    this.obstaclesTimer = 0;
    this.speed = 1000;
    this.controls = new Controls(this) 
    }

    startGame() {
        this.animation()
        this.controls.presskeys()
        
        }
     
  
   drawEverything() {
    this.context.clearRect(0, 0, 1000, 500,)
      this.player.drawPlayer()
      this.obstacles.draw()  

    }

    animation(timestamp) {
        //   console.log(timestamp)
    
        this.drawEverything()
       /*  this.updateEverything(timestamp) */
    
        // requestAnimationFrame will generate a timestamp that we will use it as a reference
        //  for doing other things, and call the animation() again
        window.requestAnimationFrame((timestamp) => this.animation(timestamp));
      }
   
  
}
  
  