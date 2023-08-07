function getComputerChoice(){
    const choiceArr = ["Rock", "Paper", "Scissor"];
    // Math.floor(Math.random() * (max - min) ) + min;
    let randomNum = Math.floor(Math.random() * (3 - 0) + 0);
    
    return choiceArr[randomNum];
}

function playRound(playersSelection, computerSelection){
    if(playersSelection == computerSelection){
        return "Draw";
    }
    
    if(computerSelection == "Rock"){
        if(playersSelection == "Paper")
            return "The player wins!";
        if(playersSelection == "Scissor")
            return "The computer wins!";
    }
    
    if(computerSelection == "Paper"){
        if(playersSelection == "Rock")
            return "The computer wins!";
        if(playersSelection == "Scissor")
            return "The player wins!";
    }

    if(computerSelection == "Scissor"){
        if(playersSelection == "Rock")
            return "The player wins!";
        if(playersSelection == "Paper")
            return "The computer wins!";
    }
}

function game(){
    let playerWinCount = 0;
    let computWinCount = 0;
    for(let i = 0; i < 6; i++){
        let playersSelection = prompt("It's your turn! Rock, Paper or Scissor? (Caps matters!)");
        const computerSelection = getComputerChoice()
        console.log("The player chose " + playersSelection + "\nThe computer chose " + computerSelection);
        let results = playRound(playersSelection, computerSelection)
        console.log(results);
        if(results == "The computer wins!")
            computWinCount++;
        if(results == "The player wins!")
            playerWinCount++;
    }
    if(computWinCount == playerWinCount)
        console.log("It was a draw!");
    else if(computWinCount > playerWinCount)
        console.log("The computer won the game!");
    else
        console.log("The player won the game!");
}

game();

