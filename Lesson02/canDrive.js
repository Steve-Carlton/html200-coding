//Replacing placeholders with values inside of a string literal is named string interpolation.
//In JavaScript, the template literals (strings wrapped in backticks `) and ${expression} as placeholder perform the string interpolation:

//const number = 42;
//const message = `The number is ${number}`;

//Declare a first name, a last name, an age and a variable that is 16. Your program should compare the driver's age with the driving age. If //they are old enough to drive it should console log the first name and last name can drive and how long they've driven. If they are too young, //log a countdown from 5.

//Extra bonus bonus. Use string interpolation

let firstName = 'Bart';
let lastName = 'Simpson';
const legalAge = 16;
let patronAge = 20;

if (patronAge >= legalAge) {
  console.log(firstName + ' ' + lastName + ` can drive. They have been driving for ${patronAge - legalAge} year(s).`);
} else {for (let i = 5; i >= 0; i--) {
  console.log(i);}
}


/* STAFF COMMENTS
While the code still runs, it is best to wrap your code after an else statement in { } curly braces. Your code is: "else for() { //loop code }" but should be "else { for() { //loop code} }" */
