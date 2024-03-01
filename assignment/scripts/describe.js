// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Declared a variable that is set ot a string of 'Dan'. Variable can be reassigned.
// Created a conditional if statement  that checks if name === to the string 'Mary'
// if the name matches, it will log Hi, Mary! If not, we esle and console log the statment.
// The output of the console.log will be: 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// created a variable and left it empty, can be reassinged. Created a 2nd variable and set it to 123, can be reassigned.
// Creates a conditional if statement that checks if code === 123. IOf it is, assign variable secret to 'super' and also code is reassinged to code * 2 (do the math)
// create a 2nd if statement that checks if code is greater than 250 (note, that 123 * 2 = 246)
//code is less than 250, so the secret reassignment wont' change to duper because the conditon wasn't met.
// when you console.log, you will get super

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// 3 variables, first is set to a booleen, which is true. 2nd variable is set to 34 and 3rd variable is set to some numbers (mpls area code ;-))
// Created a conditional else if statement. first part checks if isStudent is equal to true and (&&) zip is greater than 80000. Both conditionas are not true so, we move onto the next set of conditions.
// This checks if isStudent is === false or (||) age is less than 30, when using || only one condition needs to match, but none do. Move on to the next condition.
// Next condition checks if isStudent === true which it does. If didn't and none of the conditions matched, we would log the last console.log
// In our case, the console.log that will display is 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX Instructions say colorOne is blue and colorTwo is red
//It should be colorOne = 'blue' and colorTwo = 'blue'

if (mix === true) {
  colorOne = 'purple';

  FIX Instructions say to set colorOne and colorTwo to purple, but only colorOne is set to purple
  Should be colorOne = 'purple';  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

FIX - Directions say to check if temp is > 39 and time is >= 4
This statement is using or (||) the code should be writtrn as so, if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {  
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

FIX - Instructions say to check if age is greater than or equal to miniAge. The code shows miniAge is less than or equal to age.
Code: if (age >= miniAge). In this case, it would console.log('no entry')

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

