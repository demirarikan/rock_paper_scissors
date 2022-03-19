let playerScore = 0;
let cpuScore = 0;
let score = '0 - 0'
let result = ''

const rockBtn = document.querySelector('#rockbtn')
const paperBtn = document.querySelector('#paperbtn')
const scissorBtn = document.querySelector('#scissorbtn')
const resultDiv = document.querySelector('.result')
const scoreDiv = document.querySelector('.score')
const buttons = document.querySelectorAll('button')

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

    if(player === cpu){
        result = "It's a tie!"
    } 
   
    if(player === "rock" && cpu === "paper" || 
            player === "paper" && cpu === "scissor" ||
            player === "scissor" && cpu === "rock") {
        cpuScore += 1
        if(cpuScore === 5){
            endGame('cpu')
            return
        }
        result = `CPU wins, ${cpu} beats ${player}`
        score = `${playerScore} - ${cpuScore}`
    }

    if(player === "rock" && cpu === "scissor" ||
            player === "paper" && cpu === "rock" ||
            player === "scissor" && cpu === "paper") {
        playerScore += 1
        if(playerScore === 5){
            endGame('player')
            return
        }
        result = `Player wins, ${player} beats ${cpu}`
        score = `${playerScore} - ${cpuScore}`
    }
    scoreDiv.textContent = score
    resultDiv.textContent = result
}

function endGame(winner){
    if(winner === 'player'){
        resultDiv.textContent = 'YOU WIN!'
    } else {
        resultDiv.textContent = 'YOU LOSE, CPU WINS'
    }
    buttons.forEach((button) =>{
        button.disabled = true
    })
}

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

