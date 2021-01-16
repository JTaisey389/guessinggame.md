let correctAnswer = 28;

function guessingGame(){
    let userAnswer = prompt ('Guess a number between 1 and 50');
    while (userAnswer < 1 || userAnswer > 50){ 
        userAnswer = prompt ('Incorrect. Please try again');
    }
    let numberofguesses = 4
    for(let i = 0; i < numberofguesses; i++){
      userAnswer = parseInt(userAnswer);
      console.log (i, userAnswer);
     
      if (i === 3 && userAnswer !== correctAnswer) {
        alert('The correct answer was 28')
      }
      
          else if (userAnswer == correctAnswer){
            alert('Congratulations the number was 28');
          
            break;
        } else if (userAnswer < correctAnswer){
            alert('Sorry, too low');
            userAnswer = prompt('Incorrect. Please try again')
        } else if (userAnswer > correctAnswer){
            alert('Sorry, too High');
            userAnswer = prompt('Incorrect. Please try again')    
        }
    }
}
guessingGame()