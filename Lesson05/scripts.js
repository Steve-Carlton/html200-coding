//Main Menu Flow Control
let userInput;

function mainMenu(userInput) {
prompt('Welcome valued customer. Enter W to withdraw. D to deposit. B to view balance. Q to Quit.');
  switch (userInput) {
      case 'Q':
      case 'W':
      case 'D':
      case 'B': {
      console.log('bananas.');
      break;
      }
    //default: {
      //console.log('Invalid entry');
  }
}
