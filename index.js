document.addEventListener("DOMContentLoaded" ,() => {
    const gameArena = document.getElementById("game-arena");
    const arenaSize = 600;
    const cellSize = 20;
    let score = 0;
    let gameStarted = false;
    let food = 0;
    let snake = [{X:160, y:200},{X:140,y:200},{x:120, y:200}];
    let dx = cellSize; // Displacement of x axies
    let dy = 0; //Displacement of y axies
        



    function startGame(){
        const scoreBoard = document.createElement('div');
        scoreBoard.id = 'score-board';
        scoreBoard.textContent = '10';
        document.body.insertBefore(scoreBoard, gameArena); 
         

        const StartButton = document.createElement('button');
        StartButton.textContent = 'Start Game';
        StartButton.classList.add('Start-Button');
        document.body.appendChild(StartButton);



    }
   startGame();  
});