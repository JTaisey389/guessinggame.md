 'use strict';
var arrayofAnswers = []
var askQuestion = function(question){
  var answer = prompt(question);
  arrayofAnswers.push(answer);
}

askQuestion("Would you like to enter my page?")
askQuestion("Do you live in Washington state?")
askQuestion("Do you have any pets?")
askQuestion("Do you live in a house?")
askQuestion("Do you have a favorite candy?")
