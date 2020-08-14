//Main Menu Flow Control
let userInput = prompt('Welcome valued customer. Enter W to withdraw. D to deposit. B to view balance. Q to Quit.');

function mainMenu(userInput) {
  switch (userInput) {
    case 'Q':
    case 'q': {
      console.log('quit');
      break;
    }
    case 'W':
    case 'w': {
      console.log('withdraw');
      break;
    }
    case 'D':
    case 'd': {
      console.log('deposit.');
      break;
    }
    case 'B':
    case 'b': {
      console.log('balance');
      break;
    }
    default: {
      console.log('invalid entry');
      alert('invalid entry');
    }
  }
}
