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
}