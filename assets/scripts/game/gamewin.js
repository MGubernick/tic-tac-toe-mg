'use strict'

// const store = require('./../store')

// const gameArray = store.game.cells
//
// const playerPick = 'X'

// const winConds = [
//   // horizontal win
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   // vertical wins
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   // diagnal wins
//   [0, 4, 8],
//   [2, 4, 6]
// ]

// const winner = function(gameArray, winConds) {
//
// }
//
// const draw = function(gameArray) {
//
// }

// gameArray.forEach(winConds, gameArray)

// if the marker in index 0 = the marker in any of the winConds, invoke winner

const checkWin = function (gameArray) {
  // first row win
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
    console.log('Winner Winner, Chicken Dinner-Top!')
    $('#message').text('Winner Winner, Chicken Dinner-Top!')
    // second row win
  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {
    console.log('Winner Winner, Chicken Dinner-Middle!')
    $('#message').text('Winner Winner, Chicken Dinner-Middle!')
    // third row win
  } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
    console.log('Winner Winner, Chicken Dinner-Bottom!')
    $('#message').text('Winner Winner, Chicken Dinner-Bottom!')
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
    console.log('Winner Winner, Chicken Dinner-V-Left!')
    $('#message').text('Winner Winner, Chicken Dinner-V-Left!')
  } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
    console.log('Winner Winner, Chicken Dinner-V-Middle!')
    $('#message').text('Winner Winner, Chicken Dinner-V-Middle!')
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
    console.log('Winner Winner, Chicken Dinner-V-Right!')
    $('#message').text('Winner Winner, Chicken Dinner-V-Right!')
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
    console.log('Winner Winner, Chicken Dinner-D-Left-to-Right!')
    $('#message').text('Winner Winner, Chicken Dinner-D-Left-to-Right!')
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
    console.log('Winner Winner, Chicken Dinner-D-Right-to-Left!')
    $('#message').text('Winner Winner, Chicken Dinner-D-Right-to-Left!')
  } else {
    console.log('Next Turn!')
  }
}
// console.log(checkWin(gameArray))

module.exports = {
  checkWin: checkWin
}

// const checkForWin = function () {
//   gameArray.forEach(function (condition, gameArray) {
//     if (playerPick === gameArray[winConds[0]] &&
//       gameArray[winConds[0]] === gameArray[winConds[1]] &&
//       gameArray[winConds[0]] === gameArray[winConds[2]]) {
//       console.log('winner')
//     } else {
//       console.log('no winner yet')
//     }
//   })
// }
