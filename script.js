
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let limit = 20
let count =1;

let computerScore = 0;
let userScore = 0

let userScoreId = document.getElementById('user-score');
let computerScoreId = document.getElementById('computer-score');
let computerDisplay = document.getElementById('computer-image');
let pleaseSelect = document.getElementById('please-select');

let messageBox = document.getElementById('message-box')
let winNote = document.getElementById('win-note-id')
let winner = document.getElementById('winner-id')



function userTouch(value){
    let userInput = value
    count = count+1;
    let randomNumber = Math.floor(Math.random()*3)+1;
    let computerChoice ;
    showComputerImage(randomNumber)
    randomNumber == 1 ? computerChoice = rock : randomNumber == 2 ?computerChoice = paper : computerChoice = scissors;
    finalChecking( computerChoice,userInput)

}

function showComputerImage(number){
    computerDisplay.style.display = 'block'
    pleaseSelect.style.display = 'none'
    if(number == 1 ){
        computerDisplay.src = "img/stone.png"
    }
    if(number == 2){
        computerDisplay.src = "img/paper.png"
    }
    if(number ==3 ){
        computerDisplay.src = "img/scissors.png"
    }
}

function newGame(){
    location.reload()
}

function finalChecking(computerChoice,userInput){
    let replay;
    let whoWin;
    
    computerChoice === userInput ? replay = `You choose "${userInput.toLocaleUpperCase()}" I choose "${computerChoice.toLocaleUpperCase()}"`:
    userInput === rock && computerChoice == paper
    ?  replay = `You choose "${userInput.toLocaleUpperCase()}" I choose "${computerChoice.toLocaleUpperCase()}"`
    :userInput == paper && computerChoice === scissors
    ?  replay = `You choose "${userInput.toLocaleUpperCase()}" I choose "${computerChoice.toLocaleUpperCase()}"`
    :userInput == scissors && computerChoice === rock
    ?  replay = `You choose "${userInput.toLocaleUpperCase()}" I choose "${computerChoice.toLocaleUpperCase()}"`
    : replay = `You choose "${userInput.toLocaleUpperCase()}" I choose "${computerChoice.toLocaleUpperCase()}"`

    //who win
    computerChoice === userInput ? whoWin = "both are same no score":
    userInput === rock && computerChoice == paper
    ?  whoWin = 'I am win'
    :userInput == paper && computerChoice === scissors
    ?  whoWin = 'I am win'
    :userInput == scissors && computerChoice === rock
    ?  whoWin = 'I am win'
    :  whoWin =  `You are win`

    //score
    computerChoice === userInput ? replay = "both are same no score":
    userInput === rock && computerChoice == paper
    ?  computerScore = computerScore+1
    :userInput == paper && computerChoice === scissors
    ?  computerScore = computerScore+1
    :userInput == scissors && computerChoice === rock
    ?  computerScore = computerScore+1
    : userScore = userScore+1

    userScoreId.innerText = userScore
    computerScoreId.innerText = computerScore

    winNote.innerText = replay
    winner.innerText = whoWin
    messageBox.style.display ='flex'
    setTimeout(() => {
        messageBox.style.display ='none'
    }, 1500);
    checkLimit()

}

function checkLimit() {
  if (count >= limit) {
    let mainDiv = document.getElementById("main-div");
    let childElements = mainDiv.querySelectorAll("*");

    childElements.forEach(function (element) {
      element.removeAttribute("onclick");
    });

    if (userScore > computerScore) {
      whoWin = `"CONGRATULATIONS" You are the Winner`;
      setTimeout(() => {
        winner.innerText = whoWin;
        messageBox.style.backgroundImage =
          "linear-gradient(rgb(0, 5, 19), rgb(89 255 0) 150%)";
        messageBox.style.boxShadow = "0px 0px 15px 0px green";
        messageBox.style.display = "flex";
      }, 2000);
      setTimeout(() => {
        newGame();
      }, 5000);
    } else if (computerScore > userScore) {
      whoWin = `"SORRY" You are defeated this game`;
      setTimeout(() => {
        winner.innerText = whoWin;
        messageBox.style.backgroundImage =
          "linear-gradient(rgb(0, 5, 19), rgb(255 0 0) 150%)";
        messageBox.style.boxShadow = "0px 0px 15px 0px red";
        messageBox.style.display = "flex";
      }, 2000);
      setTimeout(() => {
        newGame();
      }, 5000);
    } else {
      whoWin = `Both are Equal`;
      setTimeout(() => {
        winner.innerText = whoWin;
        messageBox.style.backgroundImage =
          "linear-gradient(rgb(0, 5, 19), rgb(255 212 0) 150%)";
        messageBox.style.boxShadow = "0px 0px 15px 0px orange";
        messageBox.style.display = "flex";
      }, 2000);
      setTimeout(() => {
        newGame();
      }, 5000);
    }
  }
}


