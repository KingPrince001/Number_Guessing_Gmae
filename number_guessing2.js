
let secretNumber;
// let windowPrompt;
const gameButtons=document.querySelectorAll('.game-btn');
const inputArea=document.getElementById('input-area');
const playState=document.getElementsByClassName('play-state');
const body=document.getElementById('body');
const userName=document.getElementById('userName');
const correctAnswer=document.getElementById('correct-answer');
const wrongAnswerHigh=document.getElementById('wrong-answer-high');
const wrongAnswerLow=document.getElementById('wrong-answer-low');
let username;
const randomNumberGenerated=document.getElementById('random-number-generated');




function userPrompt (){
    let windowPrompt= window.prompt('Please Enter Your userName')
    return windowPrompt;
}

gameButtons[0].addEventListener('click',function(){
    username = userPrompt()  
    userName.innerText=` ${username} ! ! !`
    secretNumber=Math.floor(Math.random()*400);
    randomNumberGenerated.innerText="A Random  Number Has Been Generated. GOOD LUCK GUESSING IT !!"
   
})

function checkUserGuess(){
     guessNumber=inputArea.value;
  
    if(parseInt(guessNumber)===secretNumber){
        playState[1].innerText=`Hureee!! ${username} You Did It.`;
        playState[1].classList.add('playState2');
        body.style.backgroundColor='rgb(0,100,0)'
        correctAnswer.play();
      
    }
    else if (parseInt(guessNumber)>secretNumber){
        playState[1].innerText=`${guessNumber} is Greater than the Target Number`
        playState[1].classList.add('playState2');
        body.style.backgroundColor='#2bab0d'
        wrongAnswerHigh.play();
    }
    else if (parseInt(guessNumber)<secretNumber){
        playState[1].innerText=`${guessNumber} is Less than the Target Number`
        playState[1].classList.add('playState2');
        body.style.backgroundColor='#b2ff00'
        wrongAnswerLow.play();
    }
    else if (guessNumber===""){
        playState[1].innerText="Please Enter A Number."
        playState[1].classList.add('playState2');
        body.style.backgroundColor='gold'
    }
    
    inputArea.value=""
}


document.addEventListener('keydown', function(event){
console.log(event);
if(event.key=="Enter"){
    checkUserGuess();
}


})


gameButtons[1].addEventListener('click', checkUserGuess)



