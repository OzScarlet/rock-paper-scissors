const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log("Computer has chosen " + computerChoice);
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a tie.";
        console.log(result);
    }
    else{
        switch(playerChoice){
            case 'Rock':
                result = (computerChoice === "Scissors") ? "You win." : "You lose.";
                console.log(result);
                break;
            case 'Paper':
                result = (computerChoice === "Rock") ? "You win." : "You lose.";
                console.log(result);
                break;
            case 'Scissors':
                result = (computerChoice === "Paper") ? "You win." : "You lose.";
                console.log(result);
                break;
        }
    }

    switch(result){
        case "You win.":
            playerScore++;
            break;
            
        case "You lose.":
            computerScore++;
            break;
            
    }
    console.log("Player currently has " + playerScore + " points.");
    console.log("Computer currently has " + computerScore + " points.");

    if (playerScore === 5){
        alert("Game over. You win the match.");
        location.reload();
    }
    else if (computerScore === 5){
        alert("Game over. You lose the match.");
        location.reload();
    }
   
}