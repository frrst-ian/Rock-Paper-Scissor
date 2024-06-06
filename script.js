function getComputerChoice () {
    let computerChoice = ["Rock" , "Paper" , "Scissor"];

    const index = Math.floor(Math.random() * computerChoice.length )
    return computerChoice[index];
}
console.log(getComputerChoice());
