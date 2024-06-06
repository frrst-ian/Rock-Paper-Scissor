let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissor"];

    const index = Math.floor(Math.random() * computerChoice.length)
    return computerChoice[index];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: Rock/Paper/Scissor");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == "Rock") {
        console.log("Tie!");
    } else if (humanChoice == "paper" && computerChoice == "Rock") {
        console.log("Tie!");
    } else if (humanChoice == "scissor" && computerChoice == "Scissor") {
        console.log("Tie!");
    } else if (humanChoice == "rock" && computerChoice == "Paper") {
        console.log("You lose Paper beats Rock");
        computerScore++;
    } else if (humanChoice == "scissor" && computerChoice == "Rock") {
        console.log("You lose Rock beats Scissor");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "Scissor") {
        console.log("You lose Scissor beats Paper");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "Rock") {
        console.log("You win Paper beats Rock");
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "Scissor") {
        console.log("You win Rock beats Scissor");
        humanScore++;
    } else if (humanChoice == "scissor" && computerChoice == "Paper") {
        console.log("You win Scissor beats Paper");
        humanScore++;
    } else {
        console.log("Invalid choice please try again.")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);