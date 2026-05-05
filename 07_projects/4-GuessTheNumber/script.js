// Math.random()
let randomNumber = parseInt(Math.random()*100+1)
console.log(randomNumber);


const submit = document.querySelector("#subt")
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas")


const p = document.createElement('p')

let prevGuess = []
let numGuess = 0

let playGame = true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()

        const num = parseInt(userInput.value)
        // console.log(num);
        validateGuess(num)
    })
}
else{
    const restart = document.createElement('button')
    restart.id="restart"
    restart.appendChild(restart.id)
    startOver.appendChild(restart)
}


const validateGuess = (num)=>{
    if(isNaN(num)){
        alert("Please enter a valid number")
    }
    else if(num <1 || num>100 ){
        alert("Enter a number in between 1 - 100")
    }
    else{
        if(numGuess>=10){
            displayGuess(num)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            prevGuess.push(num);
            numGuess++;
            // displayGuess(num)
            checkGuess(num);
        }
        
    }
}

const checkGuess = (num)=>{
    if(num === randomNumber){
        displayMessage("Congratulations! You Won!")
        endGame()
    }
    else if(num>randomNumber){
        displayMessage("You Entered a larger number!")
        displayGuess()
    }
    else{
        displayMessage("You Entered a smaller number!");
        displayGuess();
    }
}

const displayGuess = (num)=>{
    userInput.value = ''
    guessSlot.innerHTML = `${prevGuess}`
    remaining.innerHTML = `${10 -numGuess}`
}

const displayMessage = (message)=>{
    lowOrHigh.innerHTML = `<h2>${message}</h2>`   
}


const newGame = ()=>{
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

const endGame = ()=>{
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}
