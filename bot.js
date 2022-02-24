// Hello! Need help getting started? Check out the Tic-Tac-Toe tutorial:
// 👉 https://github.com/zilch/beta/blob/main/docs/games/tic-tac-toe/tutorial.md

export class TicTacToeBot {
  constructor(config) {
    // 👇 Get started by uncommenting this line
    console.log("Hello World!", config);
  }

  move(board) {
    console.log(board); // 3x3 array with values "x" or "o" or "empty"

    // Return the spot you'd like to move here.
    // x should be an integer between 0 and 2
    // y should be an integer between 0 and 2

    console.log("YO")

    let choice = { x: 0, y: 0 };
    board.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (cell === "empty") {
          choice = {
            x: rowIndex,
            y: columnIndex
          }
        }
      })
    })

    return choice;
  }
}
