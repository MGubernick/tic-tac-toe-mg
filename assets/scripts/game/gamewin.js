'use strict'

const store = require('./../store')
// const events = require('./events.js')
// const api = require('./api.js')
// const ui = require('./ui.js')

const checkWin = function (gameArray) {
  const isPopulated = (currentValue) => currentValue !== ''
  let winGame = store.game.over // by default is false
  // first row win
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
    console.log('Winner Winner, Chicken Dinner-Top!')
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Across-Top!')
    // indicate the game is over by changing the game.over value to true
    winGame = true
    // second row win
  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {
    console.log('Winner Winner, Chicken Dinner-Middle!')
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Across-Middle!')
    winGame = true
    // third row win
  } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
    console.log('Winner Winner, Chicken Dinner-Bottom!')
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Across-Bottom!')
    winGame = true
    // vert l win
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
    console.log('Winner Winner, Chicken Dinner-Vertical-Left!')
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Vertical-Left!')
    winGame = true
    // vert mid win
  } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
    console.log('Winner Winner, Chicken Dinner-Vertical-Middle!')
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Vertical-Middle!')
    winGame = true
    // vert r win
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
    console.log('Winner Winner, Chicken Dinner-Vertical-Right!')
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Vertical-Right!')
    winGame = true
    // d l - r win
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
    console.log('Winner Winner, Chicken Dinner-Diagonal-Left-to-Right!')
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Diagonal!')
    winGame = true
    // d r - l win
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
    console.log('Winner Winner, Chicken Dinner-Diagonal-Right-to-Left!')
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Diagonal!')
    winGame = true
    // check to see if all spaces are taken and if so - its a draw!
  } else if (gameArray.every(isPopulated) === true) {
    console.log('Draw!')
    $('#win-draw-text').text('It\'s a Draw!')
    winGame = true
  } else {
    console.log('Next Turn!')
  }
  return winGame
}

// console.log(checkWin(gameArray))
module.exports = {
  checkWin: checkWin
}

// const events = require('./events.js')
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
//
// const draw = function(gameArray) {
//
// }

// gameArray.forEach(winConds, gameArray)

// if the marker in index 0 = the marker in any of the winConds, invoke winner
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
