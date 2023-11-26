    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;

document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("rock").addEventListener("click", function() {
      makeSelection('rock');
    });

    document.getElementById("paper").addEventListener("click", function() {
      makeSelection('paper');
    });

    document.getElementById("scissors").addEventListener("click", function() {
      makeSelection('scissors');
    });
    
    document.getElementById("reset").addEventListener("click", function() {
        resetGame();
    });
  });

function makeSelection(selection) {
    playerSelection = selection;
    playGame();
}

function computerPlay() {
    const randomIndex = Math.floor(Math.random()*3);
    const computerSelection = ['Rock', 'Paper', 'Scissors'];
    return computerSelection[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let result;

    if (playerSelection === computerSelection) {
        result = `It's a draw! You both chose ${playerSelection}.`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = "You win! Rock beats Scissors!";
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = "You win! Scissors beats Paper!";
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = "You win! Paper beats Rock!";
        playerScore++;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    }

    document.getElementById('result').innerText = `Player chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`;
    document.getElementById('scoreboard').innerText = `Score: Player ${playerScore} - Computer ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }

    console.log(result);
};

function playGame() {
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection)
};

function endGame() {
    let endMessage;
    if (playerScore === 5) {
        endMessage = "Congratulations! You've won the game!";
    } else {
        endMessage = "Game over! Computer wins!";
    }

    document.getElementById('result').innerText = endMessage;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('scoreboard').innerText = 'Score: Player 0 - Computer 0';
    document.getElementById('result').innerText = 'Choose Rock, Paper, or Scissors';
}