'use strict';
module.exports = function() {
  var randomNumber = Math.floor((Math.random()*100)+1);
  return function(){
    return randomNumber;
  }
};

var secretNumberGenerator = module.exports;
var secretNumber = secretNumberGenerator();
var generatedNumber = secretNumber();
var generatedNumber1 = secretNumberGenerator()();
var generatedNumber2= secretNumberGenerator()();
var originalNumber = secretNumber();