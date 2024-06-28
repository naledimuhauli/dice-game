let player1 = "Player1";
let player2 = "Player2";
let player1Wins = 0;
let player1Losses = 0;
let player1Ties = 0;
let player2Wins = 0;
let player2Losses = 0;
let player2Ties = 0;
let roundCount = 0;

function editNames(){
    player1 = prompt("Change Player1 Name");
    player2 = prompt("Change Player2 Name");

    if(player1.length < 1 || player2.length < 1){
        alert('Please enter valid names');
        return;
    }

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

function updateScore(){
    console.log("Displaying scores--");
    document.querySelector(".winOne").innerHTML = `Wins: ${player1Wins}`;
    document.querySelector(".lossOne").innerHTML = `Loses: ${player1Losses}`;
    document.querySelector(".tieOne").innerHTML = `Ties: ${player1Ties}`;
    document.querySelector(".winTwo").innerHTML = `Wins: ${player2Wins}`;
    document.querySelector(".lossTwo").innerHTML = `Loses: ${player2Losses}`;
    document.querySelector(".tieTwo").innerHTML = `Ties: ${player2Ties}`;
    console.log("Score set successfull");
}

function rollTheDice(){
   // Set a game to 5 rounds
    if (roundCount >= 5) {
        return; 
    }

    let diceNum1 = document.querySelector('.img1');
    let diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute("src", "images/dice-gif.gif");
    diceNum2.setAttribute("src", "images/dice-gif.gif");

    let result = document.querySelector('h1');
    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        diceNum1.setAttribute('src', 'images/dice-' + randomNumber1 + '.jpg');
        diceNum2.setAttribute('src', 'images/dice-' + randomNumber2 + '.jpg');

        if (randomNumber1 === randomNumber2) {
            result.innerHTML = "Draw!";
            player1Ties++;
            player2Ties++;
        } else if (randomNumber1 < randomNumber2) {
            result.innerHTML = (player2 + " WINS!");
            player2Wins++;
            player1Losses++;
        } else {
            result.innerHTML = (player1 + " WINS!");
            player1Wins++;
            player2Losses++;
        }

        roundCount++;
        updateScore();

        if (roundCount >= 5) {
            showWinner();
        }

    }, 2500);
}

function showWinner(){
    let winner = '';
    if (player1Wins > player2Wins) {
        winner = `${player1} wins the game!`;
    } else if (player2Wins > player1Wins) {
        winner = `${player2} wins the game!`;
    } else {
        winner = "It's a tie!";
    }

    //maybe a prompt instead to handle the end of a game?
    let endGame = document.createElement('div');
    endGame.innerHTML = `<div class="gameEndBanner">
                            <p>Congratulations! ${winner}</p>
                            <button class="btn" onclick="newGame()">New Game</button>
                        </div>`;
    document.body.appendChild(endGame);
}

function newGame(){
    player1Wins = 0;
    player1Losses = 0;
    player1Ties = 0;
    player2Wins = 0;
    player2Losses = 0;
    player2Ties = 0;
    roundCount = 0;

    updateScore();
    document.querySelector('h1').innerHTML = "Play!";
    
    //remove the previous game result from screen
    let endGame = document.querySelector('.gameEndBanner');
    if (endGame) {
        document.body.removeChild(endGame);
    }
}
