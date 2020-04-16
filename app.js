'use strict';

console.log('He lives!');

var isLOTRFan = prompt('Are you a Lord of the Rings fan?').toLowerCase();
var today = new Date();
var hourNow = today.getHours();
var greeting;

function middleEarthPersona(){
    if(isLOTRFan === 'yes'){
      var middleEarthName = prompt('What is your Middle-Earth persona?');
      alert('Welcome to Middle-Earth, ' + middleEarthName + '!');
      document.write('<h1>' + 'Welcome to Middle-Earth, ' + middleEarthName + '!')
    }

    else if (isLOTRFan === 'no'){
      var humanName = prompt('What is your human name?');
      alert("Don't worry, " + humanName + ", no one is perfect!");
      document.write('<h1>' + humanName + ', your journey to Middle-Earth, begins here!');
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