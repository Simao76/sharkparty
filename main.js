const $canvas = document.querySelector('canvas');

const width = $canvas.width;
const height = $canvas.height;


    document.getElementById("start-button").onclick = function() {
        const game = new Game ($canvas);
        game.startGame();
        console.log("hello")
    };
