    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;
    let gameInProgress = true;

document.addEventListener("DOMContentLoaded", function() {
    const funFacts = [
        // Facts about rocks
        "Rocks are composed of minerals, and the most common mineral on Earth's surface is quartz.",
        "The process of breaking down rocks into smaller particles through weathering is a crucial step in the formation of soil.",
        "Some rocks, like marble and slate, are often used as building materials due to their durability and unique properties.",
        "The study of rocks is called petrology, and geologists use rocks to understand Earth's history and processes.",
    
        // Facts about paper
        "The invention of paper is traditionally credited to the Chinese scholar Cai Lun, who is said to have developed it around 105 AD.",
        "Paper is made from plant fibers, and the most common source is wood pulp. However, other materials like cotton and hemp can also be used.",
        "The world's first recorded use of paper currency was in China during the Tang Dynasty in the 7th century.",
        "Recycling paper helps to conserve natural resources, reduce pollution, and save energy compared to making paper from raw materials.",
    
        // Facts about scissors
        "The modern form of scissors has existed in various cultures for over 2,000 years, with ancient Egyptian and Roman examples.",
        "The word 'scissors' is derived from the Latin word 'cisoria,' meaning 'cutting instrument.'",
        "Scissors come in various types, such as household scissors, kitchen shears, and surgical scissors, each designed for specific purposes.",
        "The act of cutting with scissors involves shearing or sliding the blades past each other, creating a slicing motion.",
    
        // Facts about "Rock, Paper, Scissors" game
        "'Rock, Paper, Scissors' is a simple hand game often used as a decision-making tool between two people.",
        "The game has three possible outcomes: rock crushes scissors, scissors cuts paper, and paper covers rock.",
        "'Rock, Paper, Scissors' has been used as a tiebreaker in various situations, including sports and decision-making scenarios.",
        "The game is known by different names in various cultures, such as 'jan-ken' in Japan and 'chi-fou-mi' in France."
    ];

    function displayRandomFact() {
        const factIndex = Math.floor(Math.random() * funFacts.length);
        const randomFact = funFacts[factIndex];
        document.getElementById('factStatement').innerText = randomFact;
    }

    function makeSelection(selection) {
        playerSelection = selection;
        playGame();
        displayRandomFact();
    }

    document.getElementById("rock").addEventListener("click", function() {
        if (gameInProgress) {
            makeSelection('rock');
        }
    });

    document.getElementById("paper").addEventListener("click", function() {
        if (gameInProgress) {    
            makeSelection('paper');
        }
    });

    document.getElementById("scissors").addEventListener("click", function() {
        if (gameInProgress) {    
            makeSelection('scissors');
        }
    });
    
    document.getElementById("reset").addEventListener("click", function() {
        resetGame();
    });
  });

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

    document.getElementById('result').innerHTML = `Player chose ${playerSelection}. Computer chose ${computerSelection}. <br>${result}`;
    document.getElementById('scoreboard').innerText = `Score: Player ${playerScore} - Computer ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }

    console.log(result);
};

function playGame() {
    if (gameInProgress) {
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
};

function endGame() {
    gameInProgress = false;
    let endMessage;
    if (playerScore === 5) {
        endMessage = "Congratulations! You've won the game!";
    } else {
        endMessage = "Game over! Computer wins!";
    }

    document.getElementById('result').innerText = endMessage;
}

function resetGame() {
    gameInProgress = true;
    playerScore = 0;
    computerScore = 0;
    document.getElementById('scoreboard').innerText = 'Score: Player 0 - Computer 0';
    document.getElementById('result').innerText = 'Choose Rock, Paper, or Scissors';
}