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

    if(humanChoice === computerChoice){
        console.log("DRAW! Great minds think alike!");
        announcement.textContent = "DRAW! Great minds think alike!"
    }
    else if(humanChoice === "rock"){
        if(computerChoice === "scissors"){
            announcement.textContent = "WIN! human rocks the machine!";
            humanScore+=1;
        }
        else if(computerChoice === "paper"){
            announcement.textContent = "LOSE! the machines are comming!";
            computerScore+=1;
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            announcement.textContent = "WIN! human>>>tincans!";
            humanScore+=1;
        }
        else if(computerChoice === "scissors"){
            announcement.textContent = "LOSE! clankers are taking over!";
            computerScore+=1;
        }
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "paper"){
            announcement.textContent = "WIN! clank clank, plap plap!";
            humanScore+=1;
        }
        else if(computerChoice === "rock"){
            announcement.textContent = "LOSE! welcome your AI overlords!";
            computerScore+=1;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

let scoreBoard = document.querySelector("#score");
scoreBoard.style.whiteSpace = "pre";
scoreBoard.textContent = `Human:     ${humanScore}\nComputer: ${computerScore}`

let announcement = document.querySelector("#announcement");
announcement.textContent = "START!";

let choice = document.querySelector("#choices");
choice.addEventListener("click", (e) => {

    playRound(e.target.id, getComputerChoice());
    scoreBoard.textContent = `Human:     ${humanScore}\nComputer: ${computerScore}`
    
    if(humanScore === 5){
        announcement.textContent = "\nTHE HUMAN TAME THE MACHINES!!!"
    }
    else if(computerScore === 5){
        announcement.textContent = "\nTHE MACHINES ENSLAVE THE HUMANS!!!"
    }
});