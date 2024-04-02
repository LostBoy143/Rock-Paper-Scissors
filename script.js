
let userScore=0;
let compScore=0;
let gameCount=0;

//to get the user choice we have accessed all the options and stored the result in userChoice variable
let choices=document.querySelectorAll(".choice");

choices.forEach(choice=>{
    choice.addEventListener('click',function(){
        gameCount++;
        const userChoice=choice.id;
       if(gameCount<=10){
        attempt(gameCount);
        playGame(userChoice);
       }
        if(gameCount===10){
            finalGame(gameCount);  // we will define a function in which we will show the results after 10 attempts
        }
         })
})

//to generate random choice by the computer we will use random  method

const genCompChoice=()=>{
    const options=['Rock','Paper','Scissors'];
    let randomNumber=Math.floor(Math.random()*3);
    return options[randomNumber];
}
//We will create different functions for different scenarios of the game

//function for a draw game
const drawGame= ()=>{
    const result=document.querySelector('#result');
    result.innerHTML="It's a draw!";
    result.style.backgroundColor="yellow";
    result.style.color="black";
    console.log("game draw")
}
//function for user winning the game
const userWin=()=>{
    const result = document.querySelector('#result');
    result.innerHTML="You Won!";
    result.style.backgroundColor="green";
    result.style.color="white";
    userScore++;
    document.querySelector('#userScore').innerHTML=userScore;
    
}
//function for computer winning the game
const compWin=()=>{
    const result = document.querySelector('#result');
    result.innerHTML="You Lost!";
    result.style.backgroundColor="red";
    result.style.color="white";
    compScore++;
    document.querySelector('#compScore').innerHTML=compScore;
    
}

//WE will create a play game function

function playGame(userChoice){
document.querySelector('#userMsg').innerHTML=userChoice;

const compChoice=genCompChoice();
document.querySelector('#compMsg').innerHTML=compChoice;

if(userChoice===compChoice){
    drawGame();
}
else if(userChoice==="Rock" && compChoice==="Scissors"){
    userWin();
}
else if(userChoice==="Paper" && compChoice==="Rock"){
    userWin();
}
else if(userChoice==="Scissors" && compChoice==="Paper"){
    userWin();
}
else if(userChoice==="Rock" && compChoice==="Paper"){
    compWin();
}
else if(userChoice==="Paper" && compChoice==="Scissors"){
    compWin();
}
else if(userChoice==="Scissors" && compChoice==="Rock"){
    compWin();
}



}
function attempt(gameCount){
    document.querySelector('#instruction').innerHTML="<h3>Attempt</h3>"
    let attemptCount =document.querySelector('#inst2');
    attemptCount.innerHTML=gameCount;
    attemptCount.style.fontSize="2rem";
    document.querySelector('.inst1').style.display="none";
}

function finalGame(){
    setTimeout(function(){
    let choiceOptions=document.querySelector(".choices");
    let  resultMsg=document.querySelector("#finalResultMsg");
    let showFinalResult=document.querySelector(".showFinalResult");
    let showChoice=document.querySelector(".showChoice");
    let msg=document.querySelector(".msg");
    let replayContainer=document.querySelector(".center-container");
    choiceOptions.classList.add("hide");
    showChoice.classList.add("hide");
    msg.classList.add("hide");

    showFinalResult.style.display="flex";
    replayContainer.style.display="flex";
   
    console.log("match is ended");
    if (userScore===compScore){
        console.log("Game was draw");
        resultMsg.innerHTML="It's a draw!"
        resultMsg.style.color="#333333"
    }
    else if(userScore>compScore){
        console.log("User won");
        resultMsg.innerHTML='Congratulations! Victory is Yours!';
        resultMsg.style.color="green";
    }
    else{
        console.log("Computer won");
        resultMsg.innerHTML="You Lost! Better luck next time!"
        resultMsg.style.color="Red";
    }
},1500); //2000 milliseconds= 2 seconds
   
   
}

//To replay the game
document.getElementById('replayButton').addEventListener('click', replayGame);

function replayGame() {
    document.querySelector('.msg').style.setProperty('background-color','#081b31', 'important');
        // Reset scores and game count
        userScore = 0;
        compScore = 0;
        gameCount = 0;
    
        // Update UI to reflect the reset
        document.querySelector('#userScore').innerHTML = userScore;
        document.querySelector('#compScore').innerHTML = compScore;
        document.querySelector('#inst2').innerHTML = gameCount;
    
        // Hide final result display and show choices again
        document.querySelector(".showFinalResult").style.display = "none";
        document.querySelector(".center-container").style.display = "none";
        document.querySelector(".choices").classList.remove("hide");
        document.querySelector(".showChoice").classList.remove("hide");
        document.querySelector(".msg").classList.remove("hide");
        document.querySelector('.inst1').style.display = "none";
    
        // Reset result text
        document.querySelector('#result').innerHTML = "Play your move";
        document.querySelector('#userMsg').innerHTML = "Play Game";
        document.querySelector('#compMsg').innerHTML = "Play Game";
       }

