// Game Value

let min= 1,
    max= 10,
    winningNum = getRandomNum(min,max);
    guessesLeft = 3;


// UI Elements

const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");
      
      
// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});
// Listener for guess

 guessBtn.addEventListener('click',function(){
     console.log(guessInput.value);
     let guess = parseInt(guessInput.value);

     // validation

     if(isNaN(guess) || guess < min || guess > max){

        
        setMessage('Please enter a number between '+ min +" and " +max ,'red');

     }

     // Check if won
     if(guess === winningNum){

        //game win
        gameOver(true, winningNum+' is correct, YOU WIN!' );
    
    }
     else{
         // Wrong number
         guessesLeft -= 1;

         if(guessesLeft===0){
             //Game lost
             gameOver(false,'Game Over, You Lost. The correct number was: ' +winningNum );
        
    
         }
         else{
             // Answer Wrong - Game continue

             // border color change
             guessInput.style.borderColor = 'red';

             // Clear Input
             guessInput.value = '';

             setMessage(guess+' is not correct '+guessesLeft+' guesses left','red' );
         }
     }
 });

 // function for game over
 function gameOver(won, msg){
     let color;
     won=== true ? color = 'green' :color = 'red';

     //  input
     guessInput.disabled = true;
     // Change border color
     guessInput.style.borderColor = color;
     message.style.color=color;
     setMessage(msg);


     // Play again
     guessBtn.value = 'Play Again' ;
     guessBtn.className += 'play-again';
 }

 // Get random  winning number 
 function getRandomNum(min, max){
    //  console.log(Math.floor(Math.random()*(max-min+1)+min));
    return (Math.floor(Math.random()*(max-min+1)+min));
 }
 //function for message

 function setMessage(msg, color){
    message.style.color = color;
     message.textContent=msg;
 }