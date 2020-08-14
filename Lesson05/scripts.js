//Main Menu Flow Control
let userInput;

function mainMenu(userInput) {
  prompt('Welcome valued customer. Enter W to withdraw. D to deposit. B to view balance. Q to Quit.');
  switch (userInput) {
      case 'Q': {
        console.log('bananas.');
      }
      case 'W': {
        //return ~make a withdrawl
        break;
      }
      case 'D': {
        //return ~make a deposit
        break;
      }
      case 'B': {
        //return ~display bank balance
        break;
      }
    default: {
      alert('Invalid entry');
    }
  }
}
