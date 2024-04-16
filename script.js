const rps = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    let computerSelection = rps[rand]
    return computerSelection;
}

function playRound(playerSelection, computerSelection){
    score = 0;
    
    if(playerScore !== 5 && computerScore !== 5){
        computerSelection = getComputerChoice();
        if(playerSelection === computerSelection){
            
            console.log("ROCK, PAPER, SCISSORS!\n DRAW: " + playerSelection + " vs " + computerSelection);

            console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
            draw(playerSelection, computerSelection);
            //User plays Rock    
        }else if( playerSelection === "rock" && computerSelection === "paper"){
            console.log("ROCK, PAPER, SCISSORS!\n YOU LOSE!: " + playerSelection + " vs " + computerSelection);
            computerScore = computerScore + 1;
            console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
            lose(playerSelection, computerSelection);
        }else if( playerSelection === "rock" && computerSelection === "scissors"){
            console.log("ROCK, PAPER, SCISSORS!\n YOU WIN!: " + playerSelection + " vs " + computerSelection);
            playerScore = playerScore + 1;
            console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
            win(playerSelection, computerSelection);
        

            //User plays Paper
        }else if( playerSelection === "paper" && computerSelection === "scissors"){
            console.log("ROCK, PAPER, SCISSORS!\n YOU LOSE!: " + playerSelection + " vs " + computerSelection);
            computerScore = computerScore + 1;
            console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
            lose(playerSelection, computerSelection);
    
        }else if( playerSelection === "paper" && computerSelection === "rock"){
            console.log("ROCK, PAPER, SCISSORS!\n YOU WIN!: " + playerSelection + " vs " + computerSelection);
            playerScore = playerScore + 1;
            console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
            win(playerSelection, computerSelection);
        
            //User plays Scissors
        }else if( playerSelection === "scissors" && computerSelection === "rock"){
            console.log("ROCK, PAPER, SCISSORS!\n YOU LOSE!: " + playerSelection + " vs " + computerSelection);
            computerScore = computerScore + 1;
            console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
            lose(playerSelection, computerSelection)
        
        }else if( playerSelection === "scissors" && computerSelection === "paper"){
            console.log("ROCK, PAPER, SCISSORS!\n YOU WIN!: " + playerSelection + " vs " + computerSelection);
            playerScore = playerScore + 1;
            console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
            win(playerSelection, computerSelection);
        
            
        }else if(!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors' )){
            console.log("ERROR: Please enter 'Rock' 'Paper' or 'Scissors' ")
        }
    }else gameOver(playerScore, computerScore);
        
}

let menu = document.querySelector('.container')

menu.addEventListener('click', (e) =>{
    let target = e.target;

    switch(target.id){
        case 'rock':
            playerSelection = 'rock';
            playRound(playerSelection, computerSelection);
            break;
        case 'paper':
            playerSelection = 'paper';
            playRound(playerSelection, computerSelection);
            break;
        case 'scissors':
            playerSelection = 'scissors';
            playRound(playerSelection, computerSelection);
            break;
    }
})


function win(playerSelection, computerSelection){
    let p = document.createElement('p')
    resultText.textContent = "YOU WIN!: " + playerSelection + " vs " + computerSelection;
    resultText.style.color = 'green';
    
   
    info.appendChild(resultText)
    
    scoreText.textContent = "YOU: " + playerScore + " | " + "Computer: " + computerScore;
    scoreText.style.fontSize = "18px"
    scoreText.style.color = "white"
    info.appendChild(scoreText)
}

function lose(playerSelection, computerSelection){
    let p = document.createElement('p')
    resultText.textContent = "YOU LOSE!: " + playerSelection + " vs " + computerSelection;
    resultText.style.color = 'red';
    
    info.appendChild(resultText)

    scoreText.textContent = "YOU: " + playerScore + " | " + "Computer: " + computerScore;
    scoreText.style.fontSize = "18px"
    scoreText.style.color = "white"
    info.appendChild(scoreText)
}

function draw(playerSelection, computerSelection){
    let p = document.createElement('p')
    resultText.textContent = "DRAW!: " + playerSelection + " vs " + computerSelection;
    resultText.style.color = 'yellow';
    
    info.appendChild(resultText)

    scoreText.textContent = "YOU: " + playerScore + " | " + "Computer: " + computerScore;
    scoreText.style.fontSize = "18px"
    scoreText.style.color = "white"
    info.appendChild(scoreText)
}

function gameOver(playerScore, computerScore){
    if(playerScore > computerScore){
        gameOverText.textContent = "WINNER! You won by " + (playerScore - computerScore) + " points!";
        info.appendChild(gameOverText)
    }else{
        gameOverText.textContent = "LOSER! You lost by " + (computerScore - playerScore) + " points!";
        info.appendChild(gameOverText)
    }
}

let playerSelection = '';
const computerSelection = getComputerChoice();
let resultText = document.createElement('p')
let scoreText = document.createElement('p')
let info = document.querySelector('.game-info');
let gameOverText = document.createElement('p')