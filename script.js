let getHumanChoice = prompt("Choose between rock, paper, or scissors.");
if (getHumanChoice === "rock") {
    console.log("You have chosen rock");
}
else if (getHumanChoice === "paper") {
    console.log("You have chosen paper");
}
else if (getHumanChoice === "scissors") {
    console.log("You have chosen scissors");
}
else console.log("Invalid input");

let getComputerChoice = ["rock", "paper", "scissors"];
function randomChoice() {
    console.log("Computer has chosen " + getComputerChoice[(Math.floor(Math.random() * getComputerChoice.length))]);
}
randomChoice()