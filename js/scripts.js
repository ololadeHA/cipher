$(document).ready(function() {


//to enter a sentencs
let userSentence = prompt("Please enter a sentence");
var text = userSentence

//function to capitalize the first and last letter
function newString() {
  let value = text.charAt(0) + text.charAt(text.length - 1);
  value.toUpperCase();
  return value.toUpperCase().toString();
}

//function to reverse  
function reverseNewString() {
  let reverse = text.charAt(text.length - 1) + text.charAt(0)
  return reverse.toUpperCase().toString();
}

//a third function that calls the other two function
function callFunctions() {
  newString();
  reverseNewString();
  return text + reverseNewString();
}
function countCharacters() {
  let Characterscount = text.length;
  let indexLetter = parseInt((Characterscount) / 2);
  return indexLetter.charAt();
}

function determineCharacter() {
  return countCharacters().charAt();
}

function reverse() {
  text.split;
  return text.split('').reverse().join('');
}
$("img").click(function () {
  alert('this is my image')
})

})