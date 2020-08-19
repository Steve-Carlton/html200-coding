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

// wrap main menu in a do-while loop?

//Main Menu Flow Control
let moneyIn;
let moneyOut;
let balance = moneyIn - moneyOut;



let userAction = 'm';

function mainMenu(userAction) {
  if (userAction === 'q'){
    console.log('quit');
    alert('Goodbye.');
  }
  else if (userAction === 'w') {
    console.log('withdrawal');
    prompt()
    let userWithdrawalAmount;

    let userAction = prompt('you are in the withdrawal function');
    console.log(userAction);
    mainMenu(userAction);
    // return 'w';
  }
  else if (userAction === 'd') {
    console.log('deposit');
    let userAction = prompt('you are in the deposit function');
    console.log(userAction);
    mainMenu(userAction);
  }
  else if (userAction === 'b') {
    console.log('balance');
    alert('Current balance: $');
    userAction = 'm';
    mainMenu(userAction);
  }
  else if (userAction === 'm') {
    console.log('menu');
    let userAction = prompt('this is the main menu.'); // this function works for inputs. replicate this structure to other userAction else/if options
    console.log(userAction);
    mainMenu(userAction);

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
  console.log('quitw1');
  userAction = 'q';
  console.log('quitw2');
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
