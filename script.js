//get input from user to choose between rock, paper, or scissors and return invalid if anything else
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

//create an array for the computer to randomly choose from to make a choice
let getComputerChoice = ["rock", "paper", "scissors"];
let computerChoice = (getComputerChoice[(Math.floor(Math.random() * getComputerChoice.length))]);
console.log("Computer has chosen " + computerChoice);
// console.log(computerChoice);

//compare the user input to the random computer choice
let computerPoint = 0;
let userPoint = 0;
if (getHumanChoice === "rock" && computerChoice === "rock") {
    console.log("It's a draw.");
}
else if (getHumanChoice === "rock" && computerChoice === "paper") {
    console.log("Computer gets one point.");
    computerPoint++
} 
else if (getHumanChoice === "rock" && computerChoice === "scissors") {
    console.log("User gets one point.")
    userPoint++
}
else if (getHumanChoice === "paper" && computerChoice === "rock") {
    console.log("User gets one point.")
    userPoint++
}
else if (getHumanChoice === "paper" && computerChoice === "paper") {
    console.log("It's a draw.")  
}
else if (getHumanChoice === "paper" && computerChoice === "scissors") {
    console.log("Computer gets one point.")
    userPoint++
}
else if (getHumanChoice === "scissors" && computerChoice === "rock") {
    console.log("Computer gets one point.")
    userPoint++
}
else if (getHumanChoice === "scissors" && computerChoice === "paper") {
    console.log("User gets one point.")
    userPoint++
}
else if (getHumanChoice === "scissors" && computerChoice === "scissors") {
    console.log("It's a draw.")
}
console.log("User has " + userPoint + " points");
console.log("Computer has " + computerPoint + " points");