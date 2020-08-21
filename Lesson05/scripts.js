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

/* myNotes: •
•Get user input to ignore case. See equalsIgnoreCase?
•
*/
//Main Menu Flow Control
let moneyIn = 0;
let moneyOut = 0;
let balance = moneyIn - moneyOut;

let userAction = 'm';

function mainMenu(userAction) {
  if (userAction === 'q'){
    console.log('quit');
    alert('Goodbye.');
  }
  else if (userAction === 'w') {
    console.log('withdrawal');
    let moneyOut = prompt("Enter withdrawal amount: ");
    console.log(moneyOut);
    moneyOut = (parseInt(moneyOut)); // make string a number
    console.log(moneyOut);
    balance -= moneyOut; //this line updates balance.
    console.log(balance);
    let userAction = 'm';
    console.log(userAction);
    mainMenu(userAction);
  }
  else if (userAction === 'd') {
    console.log('deposit');
    let moneyIn = prompt('Enter deposit amount:');
    console.log(moneyIn);
    moneyIn = (parseInt(moneyIn));
    console.log(moneyIn);
    balance += moneyIn;
    console.log(balance);
    console.log(typeof balance);
    let userAction = 'm';
    console.log(userAction);
    mainMenu(userAction);
  }
  else if (userAction === 'b') {
    console.log('balance');
    console.log(balance);
    alert('Current balance: $' + balance);
    userAction = 'm';
    mainMenu(userAction);
  }
  else if (userAction === 'm') {
    console.log('menu');
    console.log(balance);
    if (balance === 0) {
      let userAction = prompt('Welcome. Press \'w\' for withdrawals, \'d\' for deposits, \'b\' to display current account balance, or \'q\' to quit.  Your current balance is $' + balance + '. ');
      console.log(userAction);
      mainMenu(userAction);
    } else {
      let userAction = prompt('Welcome. Press \'w\' for withdrawals, \'d\' for deposits, \'b\' to display current account balance, or \'q\' to quit.');
      console.log(userAction);
      mainMenu(userAction);
    }
  } else {
    alert('invalid entry');
    console.log('invalid entry');
    let userAction = 'm';
    console.log(userAction);
    mainMenu(userAction);
  }
}

while (userAction != 'q') {
  mainMenu(userAction)
  console.log(balance);
  console.log(typeof balance);
  console.log(typeof moneyIn);
  console.log(typeof moneyOut);
  userAction = 'q'; // this line quits the while loop
  console.log('quitWhileLoop');
  }






// OBS switch statment. Could not get it to loop. Not appropriate for this application...?
// for (i=0; i<=2; ++i)
// {
//   let userMainMenuInput = prompt('Welcome valued customer. Enter W to withdraw. D to deposit. B to view balance. Q to Quit.');
// function mainMenu(userMainMenuInput) {
//   switch (userMainMenuInput) {
//     //Quit
//     case 'Q':
//     case 'q': {
//       console.log('quit');
//       alert('Goodbye.');
//       return;
//     }
//     //Withdrawal
//     case 'W':
//     case 'w': {
//       let userWithdrawalAmount = prompt("Please enter withdrawal amount:");
//       function withdrawal(moneyOut) {
//         console.log(moneyOut);
//       }
//       withdrawal(userWithdrawalAmount);
//       break;
//     }
//     //Deposit
//     case 'D':
//     case 'd': {
//       let userDepositAmount = prompt("Please enter deposit amount:");
//       function deposit(moneyIn) {
//         console.log(moneyIn);
//       }
//       deposit(userDepositAmount);
//       break;
//       return;
//     }
//     //Balance
//     case 'B':
//     case 'b': {
//       prompt("Current balance: $" + balance);
//       console.log(balance);
//       break;
//     }
//     default: {
//       console.log('invalid entry');
//       alert('invalid entry');
//       break;
//       return;
//     }
//   }
//  }
//   console.log(i);
// }
