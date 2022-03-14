function computerPlay(){
    let result = Math.floor(Math.random() * 3)
    console.log(result)
    if(result == 0) return "Rock"
    if(result == 1) return "Paper"
    else return "Scissor"
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase()
    let cpu = computerSelection.toLowerCase()
    if(player === cpu) return "It's a tie!"
    if(player === "rock" && cpu === "paper") return `CPU wins, ${cpu} beats ${player}`
    if(player === "rock" && cpu === "scissor") return `Player wins, ${player} beats ${cpu}`
    if(player === "paper" && cpu === "rock") return `Player wins, ${player} beats ${cpu}`
    if(player === "paper" && cpu === "scissor") return `CPU wins, ${cpu} beats ${player}`
    if(player === "scissor" && cpu === "rock") return `CPU wins, ${cpu} beats ${player}`
    if(player === "scissor" && cpu === "paper") return `Player wins, ${player} beats ${cpu}`
}

function game() {
    for(let i=0; i<5; i++){
        console.log(playRound(window.prompt("Rock, paper or scissor?"), computerPlay()))
        
    }
}

const playerSelection = "ROck"
let computerSelection = computerPlay()
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))

