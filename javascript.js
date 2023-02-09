function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

const results = document.querySelector('#results');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie game. Player chose ${playerSelection}, computer chose ${computerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        return `Player wins! Player chose ${playerSelection}, computer chose ${computerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        return `Computer wins! Player chose ${playerSelection}, computer chose ${computerSelection}`;
    }
}

let roundCount = 0;
let playerWins = 0;
let computerWins = 0;

const rockButton = document.querySelector('#rock');
rockButton.onclick = () => {
    playerSelection = "rock";
    let gameResult = (playRound("rock", getComputerChoice()));
    results.textContent = gameResult;
    if (gameResult.slice(0, 3) === "Tie") {
        roundCount++;
        score.textContent = `Rounds played: ${roundCount}. Player Wins: ${playerWins}. Computer Wins: ${computerWins}`;
    }
    else if (gameResult.slice(0, 3) === "Pla") {
        roundCount++;
        playerWins++;
        score.textContent = `Rounds played: ${roundCount}. Player Wins: ${playerWins}. Computer Wins: ${computerWins}`;
    }
    else if (gameResult.slice(0, 3) === "Com") {
        roundCount++;
        computerWins++;
        score.textContent = `Rounds played: ${roundCount}. Player Wins: ${playerWins}. Computer Wins: ${computerWins}`;

    }
    checkScore();
}


const paperButton = document.querySelector('#paper');
paperButton.onclick = () => {
    playerSelection = "paper";
    let gameResult = (playRound("paper", getComputerChoice()));
    results.textContent = gameResult;
    if (gameResult.slice(0, 3) === "Tie") {
        roundCount++;
        score.textContent = `Rounds played: ${roundCount}. Player Wins: ${playerWins}. Computer Wins: ${computerWins}`;
    }
    else if (gameResult.slice(0, 3) === "Pla") {
        roundCount++;
        playerWins++;
        score.textContent = `Rounds played: ${roundCount}. Player Wins: ${playerWins}. Computer Wins: ${computerWins}`;
    }
    else if (gameResult.slice(0, 3) === "Com") {
        roundCount++;
        computerWins++;
        score.textContent = `Rounds played: ${roundCount}. Player Wins: ${playerWins}. Computer Wins: ${computerWins}`;

    }
    checkScore();
}

const resetButton = document.createElement('button');
resetButton.classList.add('resetButton');
resetButton.textContent = 'Press me to restart the game!';
// resetButton = document.querySelector('.resetButton');

function checkScore() {
    if (playerWins === 5 && computerWins < 5) {
        winner.textContent = `The player beat the computer to 5 wins! Final score is ${playerWins} to ${computerWins}`;
        winner.appendChild(resetButton);
    }
    else if (computerWins === 5 && playerWins < 5) {
        winner.textContent = `The computer beat the player to 5 wins! Final score is ${computerWins} to ${playerWins}`;
        winner.appendChild(resetButton);
    }
    resetButton.onclick = () => { resetGame() };

}

const scissorsButton = document.querySelector('#scissors');
scissorsButton.onclick = () => {
    playerSelection = "scissors";
    let gameResult = (playRound("scissors", getComputerChoice()));
    results.textContent = gameResult;
    if (gameResult.slice(0, 3) === "Tie") {
        roundCount++;
        score.textContent = `Rounds played: ${roundCount}. Player Wins: ${playerWins}. Computer Wins: ${computerWins}`;
    }
    else if (gameResult.slice(0, 3) === "Pla") {
        roundCount++;
        playerWins++;
        score.textContent = `Rounds played: ${roundCount}. Player Wins: ${playerWins}. Computer Wins: ${computerWins}`;
    }
    else if (gameResult.slice(0, 3) === "Com") {
        roundCount++;
        computerWins++;
        score.textContent = `Rounds played: ${roundCount}. Player Wins: ${playerWins}. Computer Wins: ${computerWins}`;
    }
    checkScore();
}





function resetGame() {
    if (playerWins === 5 || computerWins === 5) {
        results.textContent = " ";
        score.textContent = " ";
        winner.textContent = " ";
        playerWins = 0;
        computerWins = 0;
        roundCount = 0;
    }
}
