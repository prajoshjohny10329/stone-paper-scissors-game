
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

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

    let randomNumber = Math.floor(Math.random()*3)+1;
    let computerChoice ;
    showComputerImage(randomNumber)
    randomNumber == 1 ? computerChoice = rock : randomNumber == 2 ?computerChoice = paper : computerChoice = scissors;
    console.log(`computer choice ${computerChoice} \n userChoice ${userInput}`);

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







let a = 'Cbs'
console.log(a.toLocaleUpperCase());

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
    console.log(replay);
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

    console.log(userScore);
    console.log(computerScore);

    userScoreId.innerText = userScore
    computerScoreId.innerText = computerScore

    winNote.innerText = replay
    winner.innerText = whoWin
    messageBox.style.display ='flex'
    setTimeout(() => {
        messageBox.style.display ='none'
    }, 1500);

    




}




///computer part


