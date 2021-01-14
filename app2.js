'use strict'
var arrayofCA = ['BOATING', 'KAYAKING', 'SKIING']
// var COAS = numAnsCorect

// question7()
let numberofguesses = 6
var tries = 0
for (let i = 0; i < numberofguesses; i++) {
  var userAnswer = prompt('What is my favorite hobby? I will give you three hints. One involoves snow. One involves water. The third involves water and a license').toUpperCase()
  tries ++;
  for (let j = 0; j < arrayofCA.length; j++) {
    console.log(i, userAnswer);
    if (userAnswer === arrayofCA[j]) {
      alert('Congratulations I like Boating, Kayaking, and Skiing');
      i = 10
      break;

    }
  }
}
alert('The correct Answers are, Boating, Kayaking, Skiing')
alert('You got this many correct' + tries)
question7()

// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.