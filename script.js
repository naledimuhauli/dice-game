let player1 = "Player 1";
let player2 = "Player 2";
let player1Wins = 0;
let player1Losses = 0;
let player1Ties = 0;
let player2Wins = 0;
let player2Losses = 0;
let player2Ties = 0;
let roundCount = 0;

function editNames() {
    player1 = prompt("Change Player 1 Name") || player1;
    player2 = prompt("Change Player 2 Name") || player2;

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

function updateScore() {
    document.querySelector(".winOne").innerHTML = `Wins: ${player1Wins}`;
    document.querySelector(".lossOne").innerHTML = `Losses: ${player1Losses}`;
    document.querySelector(".tieOne").innerHTML = `Ties: ${player1Ties}`;
    document.querySelector(".winTwo").innerHTML = `Wins: ${player2Wins}`;
    document.querySelector(".lossTwo").innerHTML = `Losses: ${player2Losses}`;
    document.querySelector(".tieTwo").innerHTML = `Ties: ${player2Ties}`;
}

function rollTheDice() {
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

function showWinner() {
    let winner = '';
    if (player1Wins > player2Wins) {
        winner = `${player1} wins the game!`;
    } else if (player2Wins > player1Wins) {
        winner = `${player2} wins the game!`;
    } else {
        winner = "It's a tie!";
    }
    //Remove game and show results screen
    let endGame = document.querySelector('.endgame-container');
    endGame.innerHTML = `<div class="gameEndBanner">
                           <p><img src="images/dancing.gif" class="dancing-gif"></p>
                           <p>Congratulations! ${winner}</p>
                           <button class="btn new-game" onclick="newGame()">New Game</button>
                        </div>`;
    document.querySelector('.game-container').style.display = 'none';
    endGame.style.display = 'block';
}

function newGame() {
    player1Wins = 0;
    player1Losses = 0;
    player1Ties = 0;
    player2Wins = 0;
    player2Losses = 0;
    player2Ties = 0;
    roundCount = 0;

    updateScore();
    document.querySelector('h1').innerHTML = "Play!";

    // Reset to start a new game
    let gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = `<h1>Play!</h1>
        <div class="game-area">
            <div class="dice">
                <p class="Player1">${player1}</p>
                <img src="images/dice-6.jpg" alt="dice 6" class="img1">
                <div class="score">
                    <p>Score</p>
                    <p>
                        <span class="winOne">Wins: 0</span>
                        <br> <span class="lossOne">Loses: 0</span>
                        <br> <span class="tieOne">Ties: 0</span>
                    </p>
                </div>
            </div>
            <div class="middle">
                <button type="button" class="btn" onclick="newGame()">New Game</button>
                <button type="button" class="btn" onclick="rollTheDice()">Roll The Dice</button>
                <button type="button" class="btn" onclick="editNames()">Edit Names</button>
            </div>
            <div class="dice">
                <p class="Player2">${player2}</p>
                <img src="images/dice-6.jpg" alt="dice 6" class="img2">
                <div class="score">
                    <p>Score</p>
                    <p>
                        <span class="winTwo">Wins: 0</span>
                        <br> <span class="lossTwo">Loses: 0</span>
                        <br> <span class="tieTwo">Ties: 0</span>
                    </p>
                </div>
            </div>
        </div>`;
    
        //remove game results from screen
    document.querySelector('.endgame-container').style.display = 'none';
    gameContainer.style.display = 'block';
}
