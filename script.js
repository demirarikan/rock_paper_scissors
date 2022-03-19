function computerPlay(){
    let result = Math.floor(Math.random() * 3)
    if(result == 0) return "Rock"
    if(result == 1) return "Paper"
    else return "Scissor"
}

function playRound(playerSelection){
    let computerSelection = computerPlay()
    let player = playerSelection.toLowerCase()
    let cpu = computerSelection.toLowerCase()
    console.log(`Player: ${player}`)
    console.log(`Cpu: ${cpu}`)
    if(player === cpu) return "It's a tie!"
    if(player === "rock" && cpu === "paper") return `CPU wins, ${cpu} beats ${player}`
    if(player === "rock" && cpu === "scissor") return `Player wins, ${player} beats ${cpu}`
    if(player === "paper" && cpu === "rock") return `Player wins, ${player} beats ${cpu}`
    if(player === "paper" && cpu === "scissor") return `CPU wins, ${cpu} beats ${player}`
    if(player === "scissor" && cpu === "rock") return `CPU wins, ${cpu} beats ${player}`
    if(player === "scissor" && cpu === "paper") return `Player wins, ${player} beats ${cpu}`
}

const rockBtn = document.querySelector('#rockbtn')
const paperBtn = document.querySelector('#paperbtn')
const scissorBtn = document.querySelector('#scissorbtn')


rockBtn.addEventListener('click', function(){
    playRound('rock')
})

paperBtn.addEventListener('click', function(){
    playRound('paper')
})

scissorBtn.addEventListener('click', function(){
    playRound('scissor')
})


// function game() {
//     let gameResult = 0

//         let roundResult = playRound(window.prompt("Rock, paper or scissor?"), computerPlay())
//         console.log(roundResult[0])
//         if(roundResult[0]==="P") gameResult++
//         if(roundResult[0]==="C") gameResult--
//         console.log(roundResult)
//         console.log(gameResult)
    
//     if(gameResult<0) return "CPU wins"
//     if(gameResult>0) return "Player wins"
//     else return "It's a tie"
// }

// const playerSelection = "ROck"
// let computerSelection = computerPlay()
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection))

