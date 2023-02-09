function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice(input = prompt("Rock, paper or scissors?")) {
    playerChoice = input.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    }
    else {
        getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return `Tie game, player chose ${playerSelection}, computer chose ${computerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        return `Player wins, player chose ${playerSelection}, computer chose ${computerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        return `Computer wins, player chose ${playerSelection}, computer chose ${computerSelection}`;
    }
}


function game() {
    let roundCount = 0;
    let playerWins = 0;
    let computerWins = 0;
    for (i = 0; i < 5; i++) {
        let round = playRound();
        let result = round.slice(0, 3);
        if (result === "Tie") {
            roundCount++;
        }
        else if (result === "Pla") {
            roundCount++;
            playerWins++;
        }
        else if (result === "Com") {
            roundCount++;
            computerWins++;
        }
        console.log(round);
        console.log(`Rounds Played: ${roundCount}. Player Score: ${playerWins}. Computer Score: ${computerWins}`);
    }
    if (playerWins > computerWins){
        console.log("You beat the computer in a game of 5! Congrats");
    }
    else {
        console.log("You lost to the computer in a game of 5! L bozo")
    }
}
