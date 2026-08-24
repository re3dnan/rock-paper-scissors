function getComputerChoice(){
    
    let n = Math.floor(Math.random()*9)+1;

    let choice;
    if(n>=1 && n<=3)
        choice = "rock";
    else if(n>=4 && n<=6)
            choice = "paper";
    else if(n>=7 && n<=9)
            choice = "scissors";
    return choice
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice)
        console.log("DRAW! Great minds think alike!");
    else if(humanChoice === "rock"){
        if(computerChoice === "scissors"){
            console.log("WIN! human rocks the machine!");
            humanScore+=1;
        }
        else if(computerChoice === "paper"){
            console.log("LOSE! the machines are comming!");
            computerScore+=1;
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("WIN! human>>>tincans!");
            humanScore+=1;
        }
        else if(computerChoice === "scissors"){
            console.log("LOSE! clankers are taking over!");
            computerScore+=1;
        }
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "paper"){
            console.log("WIN! clank clank, plap plap!");
            humanScore+=1;
        }
        else if(computerChoice === "rock"){
            console.log("LOSE! welcome your AI overlords!");
            computerScore+=1;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

let scoreBoard = document.querySelector("#score");
scoreBoard.style.whiteSpace = "pre";
scoreBoard.textContent = `Human:     ${humanScore}\nComputer: ${computerScore}`

let choice = document.querySelector("#choices");
choice.addEventListener("click", (e) => {

    playRound(e.target.id, getComputerChoice());
    scoreBoard.textContent = `Human:     ${humanScore}\nComputer: ${computerScore}`
    
    if(humanScore === 5){
        scoreBoard.textContent += "\nTHE HUMAN TAME THE MACHINES!!!"
    }
    else if(computerScore === 5){
        scoreBoard.textContent += "\nTHE MACHINES ENSLAVE THE HUMANS!!!"
    }
});