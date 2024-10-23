var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var firstCapLetter = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
alert("Hello " + firstCapLetter + restOfName + "! " + "How are you doing?");
prompt("");
alert("Awesome!");

var dogAge = prompt("What is your dogs age?");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog is " + humanAge + " years old in human years!");

alert("I want to watch some videos about Puff Daddy and the Hollywood conspiracies What do you say?");
prompt("You down?");