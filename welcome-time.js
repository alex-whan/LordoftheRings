'use strict'

var today = new Date();
var hourNow = today.getHours();
var greeting;

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

document.write('<h3>' + greeting + '</h3>');