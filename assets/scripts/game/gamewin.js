'use strict'

const store = require('./../store')

const checkWin = function (gameArray) {
  const isPopulated = (currentValue) => currentValue !== ''
  let winGame = store.game.over // by default is false
  // first row win
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[0] === gameArray[2]) {
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Across-Top!')
    $('#bad-space').hide()
    // indicate the game is over by changing the game.over value to true
    winGame = true
    // second row win
  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[3] === gameArray[5]) {
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Across-Middle!')
    $('#bad-space').hide()
    winGame = true
    // third row win
  } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8]) {
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Across-Bottom!')
    $('#bad-space').hide()
    winGame = true
    // vert l win
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[0] === gameArray[6]) {
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Vertical-Left!')
    $('#bad-space').hide()
    winGame = true
    // vert mid win
  } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[1] === gameArray[7]) {
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Vertical-Middle!')
    $('#bad-space').hide()
    winGame = true
    // vert r win
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[2] === gameArray[8]) {
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Vertical-Right!')
    $('#bad-space').hide()
    winGame = true
    // d l - r win
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[0] === gameArray[8]) {
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Diagonal!')
    $('#bad-space').hide()
    winGame = true
    // d r - l win
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[2] === gameArray[6]) {
    $('#win-draw-text').text('Winner Winner, Chicken Dinner-Diagonal!')
    $('#bad-space').hide()
    winGame = true
    // check to see if all spaces are taken and if so - its a draw!
  } else if (gameArray.every(isPopulated) === true) {
    $('#win-draw-text').text('It\'s a Draw!')
    $('#bad-space').hide()
    winGame = true
  } else {
    // console.log('Next Turn!')
  }
  return winGame
}

// console.log(checkWin(gameArray))
module.exports = {
  checkWin: checkWin
}

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
