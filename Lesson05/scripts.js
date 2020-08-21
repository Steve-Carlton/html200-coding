/*Assignment Instructions Create a bank application.
	•	The user should see a prompt so they can type which action to perform.
	•	The user will have a list of 4 actions to choose from.
	◦	Enter Q to quit (immediately quits the program).
	◦	Enter W to withdraw. The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be able to type another option.
	◦	Enter D to deposit. The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.
	◦	Enter B to view balance. The user will see their balance. Afterwards, they should be able to type another option.
	•	The program will loop asking for input until the user enters Q.


Extra challenges: The additional requirements below are optional. Implement them if you finish the Regular Challenge 1 (above) and are up for more!
	•	Create an alert if the user tries to withdraw an amount that would leave them with less than $300 in their account, asking them to confirm if they're sure.
Publish your work to github.io
*/

/* myNotes:
• How to get user input to ignore case. See equalsIgnoreCase?
• Can a switch statment be incorporated to simplify the code?
• How can I get this program to accept "Cancel" as a valid button click?
*/

//Main Menu Flow Control
let moneyIn = 0;
let moneyOut = 0;
let balance = moneyIn - moneyOut;

let userAction = 'm';

function mainMenu(userAction) {
  if (userAction === 'q'){ //quit message
    console.log('quit');
    alert('Goodbye.');
  }
  else if (userAction === 'w') { //withdrawal menu /w $0 balance alert. negative balances not permitted.
    // console.log('withdrawal');
    if (balance >= 0) { // Get withdrawal amount
    moneyOut = prompt("Enter withdrawal amount: ");
    moneyOut = (parseInt(moneyOut)); // makes moneyOut a type number.
    // console.log(moneyOut);
      if (balance - moneyOut < 0) { // Transaction not processed, no negative balances.
        alert('Transaction denied. Insufficient Funds. Current balance is: $ ' + balance);
        let userAction = 'm'; // return to main menu.
        mainMenu(userAction);
        // console.log('transaction denied. balance - moneyOut was less than 0. user sent to main menu');
      }
      else if (balance - moneyOut === 0) { // $0 balance warning
        balance -= moneyOut;
        alert('Warning. Current balance is: $ ' + balance);
        let userAction = 'm'; // return to main menu.
        mainMenu(userAction);
        // console.log('transaction processed. balance is $0. user sent to main menu');
      }
      else { // withdrawal will be processed
        balance -= moneyOut;
        // console.log('new balance: $' + balance);
        let userAction = 'm'; // return to main menu.
        mainMenu(userAction);
        // console.log('go to main menu');
    }
}
    else { // $0 balance. Patron cannot make a withdraw
      alert('0 balance. go to main menu');
      let userAction = 'm'; // return to main menu.
      mainMenu(userAction);
      // console.log('0 balance. go to main menu');
    }
  }
  else if (userAction === 'd') { //deposit menu w/ deposit cap.
    // console.log('deposit');
    let moneyIn = prompt('Enter deposit amount:');
    moneyIn = (parseInt(moneyIn));
    if (moneyIn > 50000) { // transaction not permitted. deposit cap alert.
      alert('Transaction denied. Deposit cap is $50,000.');
      let userAction = 'd';
      // console.log('deposit denied')
      mainMenu(userAction);
    } else { // transaction processed return to main menu
      balance += moneyIn;
      let userAction = 'm';
      // console.log('deposit accepted');
      mainMenu(userAction);
    }
  }
  else if (userAction === 'b') { // balance status menu
    // console.log('balance');
    // console.log(balance);
    alert('Current balance: $' + balance);
    userAction = 'm';
    mainMenu(userAction);
  }
  else if (userAction === 'm') { //main menu w/ $0 balance alternate greeting
    // console.log('menu');
    // console.log(balance);
    if (balance === 0) { // $0 balance greeting. Withdrawals not permitted.
      let userAction = prompt('Welcome. Enter \'w\' for withdrawals, \'d\' for deposits, \'b\' to display current account balance, or \'q\' to quit.  Your current balance is $' + balance + '. ');
      // console.log(userAction);
      if (userAction === 'w') {
        alert('Current balance is $0. Choose another option.')
        userAction = 'm'
        mainMenu(userAction);
      } else {
      mainMenu(userAction);
      }
    } else { // generic greeting
      let userAction = prompt('Welcome. Enter \'w\' for withdrawals, \'d\' for deposits, \'b\' to display current account balance, or \'q\' to quit.');
      // console.log(userAction);
      mainMenu(userAction);
    }
  } else { //invalid entry alert
    alert('Invalid entry. Enter \'w\' for withdrawals, \'d\' for deposits, \'b\' to display current account balance, or \'q\' to quit.');
    console.log('invalid entry');
    let userAction = 'm';
    // console.log(userAction);
    mainMenu(userAction);
  }
}

while (userAction != 'q') { // banking loop
  mainMenu(userAction)
  userAction = 'q'; // this line quits the while loop
  }

/*OBS code
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
*/
