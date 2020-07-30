/*Create a JavaScript file that does the following:

Do a console log after each item
• Create an array, with at least 5 strings
• Add an element to the end of the array
• Remove the third element
• Create a string from the elements and comma separate them*/

let myArray = ['earth', 'wind', 'fire', 'water', 'heart'];
console.log(myArray);

myArray.push('With your powers combined...');
console.log(myArray);

myArray.splice(2, 1);
console.log(myArray);

let myString = myArray.join(', ');
console.log(myString);
