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

// var numbers = [10,3,2,5,7,6,9,12,15,4,19,1];

// var answer = [];

// for (var i =0; i < numbers.length; i++) {
//     if (number[i] < 6 || nubmers[i] > 12) {
//         answer.push(numbers[i])
//     }
// }
// console.log(answer);