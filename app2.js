'use strict'
var arrayofCA = ['BOATING', 'KAYAKING', 'SKIING']

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


