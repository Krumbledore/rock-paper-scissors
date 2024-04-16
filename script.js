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
    
    
    computerSelection = getComputerChoice();
    if(playerSelection === computerSelection){
        
        console.log("ROCK, PAPER, SCISSORS!\n DRAW: " + playerSelection + " vs " + computerSelection);

        console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
        //User plays Rock    
    }else if( playerSelection === "rock" && computerSelection === "paper"){
        console.log("ROCK, PAPER, SCISSORS!\n YOU LOSE!: " + playerSelection + " vs " + computerSelection);
        computerScore = computerScore + 1;
        console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
    
    }else if( playerSelection === "rock" && computerSelection === "scissors"){
        console.log("ROCK, PAPER, SCISSORS!\n YOU WIN!: " + playerSelection + " vs " + computerSelection);
        playerScore = playerScore + 1;
        console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
    

        //User plays Paper
    }else if( playerSelection === "paper" && computerSelection === "scissors"){
        console.log("ROCK, PAPER, SCISSORS!\n YOU LOSE!: " + playerSelection + " vs " + computerSelection);
        computerScore = computerScore + 1;
        console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
    
    }else if( playerSelection === "paper" && computerSelection === "rock"){
        console.log("ROCK, PAPER, SCISSORS!\n YOU WIN!: " + playerSelection + " vs " + computerSelection);
        playerScore = playerScore + 1;
        console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
    
    
        //User plays Scissors
    }else if( playerSelection === "scissors" && computerSelection === "rock"){
        console.log("ROCK, PAPER, SCISSORS!\n YOU LOSE!: " + playerSelection + " vs " + computerSelection);
        computerScore = computerScore + 1;
        console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
    
    }else if( playerSelection === "scissors" && computerSelection === "paper"){
        console.log("ROCK, PAPER, SCISSORS!\n YOU WIN!: " + playerSelection + " vs " + computerSelection);
        playerScore = playerScore + 1;
        console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
    
    
        
    }else if(!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors' )){
        console.log("ERROR: Please enter 'Rock' 'Paper' or 'Scissors' ")
    }
    
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



let playerSelection = '';
const computerSelection = getComputerChoice();
