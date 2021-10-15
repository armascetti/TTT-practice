/*-----------------------Constants-------------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

/*------------------------Variables-------------------------------------*/
// 1) Define the required variables used to track the state of the game:
// None of these variables will need to hold a value when they are defined

let isWinner, currentPlayer, gameBoard 


gameBoard = [null, null, null, null, null, null, null, null, null]
/*------------------------ Cached Element References ------------------------*/

const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#resetButton")
const boxes = document.querySelectorAll('.box')
const tttBoard = document.querySelector('.board')

/*----------------------------- Event Listeners -----------------------------*/
// 2) Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:


  resetBtn.addEventListener("click", initializeGame)
   boxes.forEach(box => box.addEventListener('click', handleClick))
   //to grab the ids, need a foreach loop since I have 9 elements 

/*-------------------------------- Functions --------------------------------*/

// 3.1) Call an initialize function
function initializeGame(){
  isWinner = null
  currentPlayer = 1
  gameBoard = [null, null, null, null, null, null, null, null, null]
  messageEl.innerText = "Pick A Square. Three in a Row Wins!"
  resetBtn.setAttribute("hidden", true)
  render()
}

// 3.3) The render function should:
function render() {
  for (let i = 0; i < gameBoard.length; i++){
    if (gameBoard[i] === 1) {
      boxes[i].innerText = 'X'
    } else if (gameBoard[i] === -1) {
      boxes[i].innerText = 'O'
    } else {
      boxes[i] = ' '
  } 
  resetBtn.removeAttribute("hidden")
}
}
  
  function renderGameStatus(){
    if (isWinner === 1) {
    messageEl.innerText = `Player X WINS!`
  } else if(isWinner === -1){
    messageEl.innerText = `Player O WINS!`
  } else if (isWinner === `T`){
    messageEl.innerText = `Its a TIE!`
  } 
}


// 5) Next, the app should wait for the user to click a square and call a handleClick function
//the handleClick function will...
function handleClick(event) {
  // Extract the index from an id assigned to the element in the HTML 
  let index = parseInt(event.target.id.slice(2))
  console.log("This is index",index)
  //if the board at the clicked box has a value, return 
  if (gameBoard[index] != null) {
    return
  }
  //if winner is not null immediately return the game because the game is over 
  if (isWinner != null) {
    return
  }
  //update the board array with the value of turn 
  gameBoard[index] = currentPlayer
  //change the turn by multiplying turn by -1 (this flips a 1 to -1)
  currentPlayer = currentPlayer * -1
  isWinner = getWinner()
  console.log("This is Winner",isWinner)
  render()
  renderGameStatus()
}


// 5.6.2.1) For each one of the winning combinations you wrote in step 4, find the total of each winning combination.
// 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
// 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.
function getWinner() {
  if (Math.abs(gameBoard[0] + gameBoard[1] + gameBoard[2]) === 3) { 
    console.log("This is boxes", gameBoard[0])
    return gameBoard[0]
  }
  else if (Math.abs(gameBoard[3] + gameBoard[4] + gameBoard[5]) === 3) {
    return gameBoard[3]
  }
  else if (Math.abs(gameBoard[6] + gameBoard[7] + gameBoard[8]) === 3) {
    return gameBoard[6]
  }
  else if (Math.abs(gameBoard[0] + gameBoard[3] + gameBoard[6]) === 3) {
    return gameBoard[0]
  }
  else if (Math.abs(gameBoard[1] + gameBoard[4] + gameBoard[7]) === 3) {
    return gameBoard[1]
  }
  else if (Math.abs(gameBoard[2] + gameBoard[5] + gameBoard[8] === 3)) {
    return gameBoard[2]
  }
  else if (Math.abs(gameBoard[0] + gameBoard[4] + gameBoard[8] === 3)) {
    return gameBoard[0]
  }
  else if (Math.abs(gameBoard[3] + gameBoard[4] + gameBoard[6] === 3)) {
    return gameBoard[3]
  } 
  if (gameBoard.includes(null)){
    return null
  } else {
    return `T`
  }
}


initializeGame()
