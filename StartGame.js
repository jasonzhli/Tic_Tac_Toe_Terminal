const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var currPlayer = 0;
var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var count = 0;
var compare = {
  1: [0,0],
  2: [0,1],
  3: [0,2],
  4: [1,0],
  5: [1,1],
  6: [1,2],
  7: [2,0],
  8: [2,1],
  9: [2,2]
}

const displayBoard = (board) => {
  var str = '';
  for (var i = 0; i < board.length; i++) {
    str += '|';
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] === 0) {
        str += '   |';
      }
      else if (board[i][j] === 'x') {
        str += ' X |';
      }
      else str += ' O |'
    }
    str += '\n';
  }
  return str;
}

const checkWin = (currBoard) => {
}


const recurseGame = (player) => {
  console.log(displayBoard(board));
  if (count > 8) {
    console.log('Cats Game!!');
    rl.close();
    return;
  } else if (checkWin(board)) {
    console.log('Player Wins!');
    rl.close();
    return;
  } else {
    if (player === 0) {
      rl.question('Player one move? ', (move) => {
        board[compare[move][0]][compare[move][1]] = 'x';
        count++;
        if (move) recurseGame(1);
      });
    } else {
      rl.question('Player two move? ', (move) => {
        board[compare[move][0]][compare[move][1]] = 'o';
        count++;
        if (move) recurseGame(0);
      });
    }
  }
}

recurseGame(0);