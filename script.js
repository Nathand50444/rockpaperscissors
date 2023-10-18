function computerPlay() {
    const randomIndex = Math.floor(Math.random()*3);
    const computerSelection = ['Rock', 'Paper', 'Scissors'];
    return computerSelection[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `It's a draw! You both chose ${playerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats Paper!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats Rock!";
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))