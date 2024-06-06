var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    var computerChoice = ["rock", "paper", "scissor"];
    var index = Math.floor(Math.random() * computerChoice.length)
    return computerChoice[index];
}
console.log(getComputerChoice())

function getHumanChoice() {
    var humanChoice = prompt("Enter your choice: Rock/Paper/Scissor").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
}
var humanSelection = getHumanChoice();
var computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
