// Global variables
let playerWinCount = 0;
let cpuWinCount = 0;

function getComputerChoice(){
    const choiceArr = ["Rock", "Paper", "Scissor"];
    // Math.floor(Math.random() * (max - min) ) + min;
    let randomNum = Math.floor(Math.random() * (3 - 0) + 0);
    
    return choiceArr[randomNum];
}

function playRound(playersSelection, computerSelection, e){
    const playerChoice = document.querySelector('.player > p');
    const cpuChoice = document.querySelector('.cpu > p');
    const roundResult = document.querySelector('.round-result > p');
    const playerWinC = document.querySelector('.results-box > .player-result');
    const cpuWinC = document.querySelector('.results-box > .cpu-result');


    playerChoice.textContent = "You played " + playersSelection;
    cpuChoice.textContent = "CPU played " + computerSelection;


    if(playersSelection == computerSelection){
        roundResult.textContent = "Draw";
    }
    
    if(computerSelection == "Rock"){
        if(playersSelection == "Paper"){
            roundResult.textContent = "The player won this round!";
            playerWinCount++;
            playerWinC.textContent = Number(playerWinCount);
        }
        if(playersSelection == "Scissor"){
            roundResult.textContent = "The computer won this round!";
            cpuWinCount++;
            cpuWinC.textContent = Number(cpuWinCount);
        }
    }
    
    if(computerSelection == "Paper"){
        if(playersSelection == "Rock"){
            roundResult.textContent = "The computer won this round!";
            cpuWinCount++;
            cpuWinC.textContent = Number(cpuWinCount);
        }
        if(playersSelection == "Scissor"){
            roundResult.textContent = "The player won this round!";
            playerWinCount++;
            playerWinC.textContent = Number(playerWinCount);
        }
    }

    if(computerSelection == "Scissor"){
        if(playersSelection == "Rock"){
            roundResult.textContent = "The player won this round!";
            playerWinCount++;
            playerWinC.textContent = Number(playerWinCount);
        }
        if(playersSelection == "Paper"){
            roundResult.textContent = "The computer won this round!";
            cpuWinCount++;
            cpuWinC.textContent = Number(cpuWinCount);
        }
    }

    const gameResults = document.querySelector('.game-result');
    if(playerWinCount >= 5){
        gameResults.textContent = "The player won the game!!!"
    }
    else if(cpuWinCount >= 5){
        gameResults.textContent = "The CPU won the game!!!"
    }
    else
        null;
}

function game(){
    const button_1 = document.querySelector('.buttons > .button1'); //rock
    const button_2 = document.querySelector('.buttons > .button2'); //paper
    const button_3 = document.querySelector('.buttons > .button3'); //scissors

    button_1.addEventListener('click', (e) => console.log(playRound("Rock", getComputerChoice(), e)));
    button_2.addEventListener('click', (e) => console.log(playRound("Paper", getComputerChoice(), e)));
    button_3.addEventListener('click', (e) => console.log(playRound("Scissor", getComputerChoice(), e)));
}

game();

