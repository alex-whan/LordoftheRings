//'use strict';

console.log('He lives!');

var isFan = 'nope';
var today = new Date();
var hourNow = today.getHours();
var greeting;

/*Needed to to reassign prompt value to "isFan" variable with 
in the loop below - not up top with the global variables - 
otherwise it became an endless loop*/

while( (isFan != 'yes') && (isFan != 'no') ){
    isFan = prompt('Are you a Lord of the Rings fan? (Yes/No)').toLowerCase();
}

function middleEarthPersona(){
    if(isFan === 'yes'){
      var middleEarthName = prompt('What is your Middle-Earth persona?');
      alert('Welcome to Middle-Earth, ' + middleEarthName + '!');
      document.write('<h1>' + 'Welcome to Middle-Earth, ' + middleEarthName + '!')
    }

    else if (isFan === 'no'){
      var humanName = prompt('What is your human name?');
      alert("Don't worry, " + humanName + ", no one is perfect!");
      document.write('<h1>' + humanName + ', your journey to Middle-Earth, begins here!');
    }
}

function ringGuessingGame(){

    var correctAnswer = 1;

    for (var i = 0; i < 3; i = i + 1){
        var numberGuess = prompt('How many rings were there to rule them all?');
        if(numberGuess == correctAnswer){
            alert('Are you certain you are not the Dark Lord Sauron Himself?');
            break;
        } else {
            alert('Incorrect. There is only one answer.');
        }
        if (i == '2') {
            alert('The time of the orc has come.');
            break;
        }
    }

}

function middleEarthTime(){
    if (hourNow > 18) {
        greeting = "It's evening in Middle-Earth!";
    } else if (hourNow > 12) {
        greeting = "It's afternoon in Middle-Earth!";
    } else if (hourNow > 5) {
        greeting = "It's morning in Middle-Earth!";
    } else if (hourNow > 0) {
        greeting = "It's nighttime in Middle-Earth!";
    } else {
        greeting = 'Welcome to Middle-Earth!';
    }
    
    document.write('<h3>' + greeting + '</h3>')
}


middleEarthPersona();
middleEarthTime();
ringGuessingGame();