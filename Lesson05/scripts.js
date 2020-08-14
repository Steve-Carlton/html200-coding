/*Create a bank application.
	•	The user should see a prompt so they can type which action to perform.
	•	The user will have a list of 4 actions to choose from.
	◦	Enter Q to quit (immediately quits the program).
	◦	Enter W to withdraw. The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be able to type another option.
	◦	Enter D to deposit. The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.
	◦	Enter B to view balance. The user will see their balance. Afterwards, they should be able to type another option.
	•	The program will loop asking for input until the user enters Q.


Extra challenges: The additional requirements below are optional. Implement them if you finish the Regular Challenge 1 (above) and are up for more!
	•	The user should not be able to make excessive withdrawals (no negative balances).
	•	The user should have a deposit cap of $50,000.
	•	The user should receive a warning to protect against low balances.
	•	Create an alert if the user tries to withdraw an amount that would leave them with less than $300 in their account, asking them to confirm if they're sure.
Publish your work to github.io
*/

// do while?

//Main Menu Flow Control
let userInput = prompt('Welcome valued customer. Enter W to withdraw. D to deposit. B to view balance. Q to Quit.');

function mainMenu(userInput) {
  switch (userInput) {
    case 'Q':
    case 'q': {
      console.log('quit');
      alert('Goodbye.');
      break;
      return;
    }
    case 'W':
    case 'w': {
      console.log('withdraw');
      //withdraw interface. function?
      break;
    }
    case 'D':
    case 'd': {
      console.log('deposit.');
      //depsoit interface. function?
      break;
    }
    case 'B':
    case 'b': {
      console.log('balance');
      //balance interface. function?
      break;
    }
    default: {
      console.log('invalid entry');
      alert('invalid entry');
    }
  }
}
