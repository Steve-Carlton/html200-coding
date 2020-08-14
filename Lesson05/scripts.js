//Initial User Prompt
function greetPrompt() {
  prompt('Welcome valued customer. Enter W to withdraw. D to deposit. B to view balance. Q to Quit.');

}


//User Input Flow Control
let userInput;

function mainMenu(greetPrompt) {
  switch (greetPrompt) {
      case 'Q': {
        console.log('Goodbye.');
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
      console.log('Invalid entry');
      greetPrompt()
    }
  }
}
