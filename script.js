var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    var computerChoice = ["rock", "paper", "scissor"];
    var index = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[index];
}

function playGame(humanChoice) {
    if (humanScore < 5 && computerScore < 5) {
        var computerSelection = getComputerChoice();
        updateResult("You chose: " + humanChoice);
        updateResult("Computer chose: " + computerSelection);
        playRound(humanChoice, computerSelection);
        updateResult(`The current score is:\nComputer: ${computerScore}\nYou: ${humanScore}`);
    }

    if (humanScore == 5) {
        updateResult("You won the game! \nPls reload the page");
    } else if (computerScore == 5) {
        updateResult("Computer won! Better luck next time. :P\nPls reload the page");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        updateResult("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        updateResult("You win this round!");
        humanScore++;
    } else {
        updateResult("Computer wins this round!");
        computerScore++;
    }
}

function updateResult(message) {
    const div = document.createElement('div');
    div.textContent = message;
    div.setAttribute("style", "color: #white; background-color: #black; text-align: center; margin: 5px;");
    document.body.appendChild(div);
}

const rockBtn = document.createElement('button');
rockBtn.textContent = "Rock";
const paperBtn = document.createElement('button');
paperBtn.textContent = "Paper";
const scissorBtn = document.createElement('button');
scissorBtn.textContent = "Scissor";

rockBtn.addEventListener('click', () => {
    const humanChoice = 'rock';
    playGame(humanChoice);
});

paperBtn.addEventListener('click', () => {
    const humanChoice = 'paper';
    playGame(humanChoice);
});

scissorBtn.addEventListener('click', () => {
    const humanChoice = 'scissor';
    playGame(humanChoice);
});

const buttonContainer = document.createElement('div');
buttonContainer.appendChild(rockBtn);
buttonContainer.appendChild(paperBtn);
buttonContainer.appendChild(scissorBtn);
buttonContainer.setAttribute("style", "text-align: center; margin-top: 20px;");
document.body.appendChild(buttonContainer);

// Center align body content
document.body.style.textAlign = "center";
document.body.style.background = "#white";
document.body.style.color = "#black";
