var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    var computerChoice = ["rock", "paper", "scissor"];
    var index = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[index];
}
function getHumanChoice() {
    var humanChoice = prompt("Enter your choice: Rock/Paper/Scissor").toLowerCase();
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor") {
        console.log("Invalid choice. Please enter Rock, Paper, or Scissor.");
        return getHumanChoice(); // recursively call until valid input is provided
    }
    return humanChoice;
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        var humanSelection = getHumanChoice();
        var computerSelection = getComputerChoice();
        console.log("You chose: " + humanSelection);
        console.log("Computer chose: " + computerSelection);
        playRound(humanSelection, computerSelection);
    }
    console.log(`The final score is:\n Computer: ${computerScore}\n You: ${humanScore}`);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }
}

playGame();
