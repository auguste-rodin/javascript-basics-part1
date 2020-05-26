/* escape sequences in strings

\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

*/


// how to find the length of a string. Replace the word within the brackets to find out it's length.
/*

var myStrLength = 0;
var myStr = "Second";

myStrLength = myStr.length;

console.log(myStrLength);

*/


// Bracket notation return a character within a string
// Remember zero based indexing.

/*

let firstLetterOfFirstName = "";
let firstName = "Geoff";

firstLetterOfFirstName = firstName[3];

console.log(firstLetterOfFirstName);

*/
// How to find the last character in a string when you don't know how many characters there are by using the variable.length - 1 method.

/*

let firstName = "Geoffrey Boycott";

lastLetterOfLastName = firstName[firstName.length - 1];

console.log(lastLetterOfLastName);

*/


// you can find letters before the end by minusing the number from the end you want. 
// ex 

/*

let firstName = "Geoffrey Boycott";

lastLetterOfLastName = firstName[firstName.length - 3];

console.log(lastLetterOfLastName);

*/
// A simple function to demonstrate word blanks

/*

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  let result = "";
  result += "The " + myAdjective + myNoun + myVerb + myAdverb + " to the store ";
  return result;

}

console.log(wordBlanks("dog ", "big ", "ran ", "quickly"));
console.log(wordBlanks("cat ", "giant ", "walked ", "slowly"));

*/

// Arrays store information in a list within square brackets. You can also nest arrays within arrays and nest objects within arrays. Arrays usually contain related information.

/*
var ourArray = [["the universe, 42"], ["everything, 101010"]];
var myArray = ourArray[1];


console.log(myArray);

*/

