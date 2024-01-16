var gameState = {
    currentPlayer: "player1",
    playerScore1: 0,
    playerScore2: 0,
    winner: undefined
};

const rollDice = () => {
    if (gameState.winner) {
        console.log(`Game has already ended and the winner is ${gameState.winner}`)
        return
    }
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    if (gameState.currentPlayer == "player1") {
        if (diceRoll == 1) {
            gameState.playerScore1 = 0;
            switchPlayer()
        } else {
            gameState.playerScore1 = gameState.playerScore1 + diceRoll;
        }
    } else if (gameState.currentPlayer == "player2") {
        if (diceRoll == 1) {
            gameState.playerScore2 = 0;
            switchPlayer()
        } else {
            gameState.playerScore2 = gameState.playerScore2 + diceRoll;
        };
    };
    renderGameState()
}

const hold = () => {
    if (gameState.winner) {
        console.log(`Game has already ended and the winner is ${gameState.winner}`)
        return
    }
    switchPlayer()
    renderGameState()
};

const reset = () => {
    gameState = {
        currentPlayer: "player1",
        playerScore1: 0,
        playerScore2: 0,
        winner: undefined
    };
    renderGameState()
};

const switchPlayer = () => {
    if (gameState.currentPlayer == "player1") {
        gameState.currentPlayer = "player2";
    } else {
        gameState.currentPlayer = "player1"
        if ((gameState.playerScore1 > 19 || gameState.playerScore2 > 19) && (gameState.playerScore1 != gameState.playerScore2)) {

            if (gameState.playerScore1 > gameState.playerScore2) {
                gameState.winner = "player1";
                console.log(`Game has already ended and the winner is ${gameState.winner}`)
            } else {
                gameState.winner = "player2";
                console.log(`Game has already ended and the winner is ${gameState.winner}`)
            };
        }
    }
}

const renderGameState = () => {
    player1Score.innerText = gameState.playerScore1
    player2Score.innerText = gameState.playerScore2
    currentPlayer.innerText = gameState.currentPlayer
    winner.innerText = gameState.winner
}

renderGameState()