'use strict'

// Game Events

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')
const gamewin = require('./gamewin.js')
// new game event handler
const onNewGame = function (event) {
  $('.click-space').on('click', onSpaceClick)
  api.newGame()
    .then(function (response) {
      // console.log(response)
      return response
    })
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}
// Player starts as x
const firstPlayer = 'X'
const secondPlayer = 'O'
let playerPick

const playerChange = function () {
  // if the player pick = first player, switch to second player
  if (playerPick === firstPlayer) {
    playerPick = secondPlayer
    $('#players-turn').text('Who\'s turn: O')
    // else if the player pick is second player, switch to first player.
  } else {
    playerPick = firstPlayer
    $('#players-turn').text('Who\'s turn: X')
  }
}

// function to select which player goes first.

// set first player is x
playerPick = firstPlayer

const oneToTwo = function (event) {
  const select = event.target
  if (select) {
    playerPick = secondPlayer
    $('#players-turn').text('First Player: O')
  } else {
    playerPick = firstPlayer
  }
  return playerPick
}

const twoToOne = function (event) {
  const select = event.target
  if (select) {
    playerPick = firstPlayer
    $('#players-turn').text('First Player: X')
  } else {
    playerPick = secondPlayer
  }
  return playerPick
}

const onSpaceClick = function (event) {
  const cellIndex = $(event.target).data('cell-index')
  // console.log(cellIndex)
  // find the game array in the store
  const gameArray = store.game.cells
  // console.log(gameArray)

  const gameArrayIndex = gameArray[cellIndex]
  // console.log(gameArrayIndex)
  // when user clicks - check that the space is empty
  if (gameArrayIndex !== firstPlayer && gameArrayIndex !== secondPlayer) {
    // store.game.cells[cellIndex] = playerPick
    gameArray[cellIndex] = playerPick

    const winGame = gamewin.checkWin(gameArray)
    $(event.target).html(playerPick)
    // console.log(winGame)
    if (winGame === true) {
      api.gameOver()
        .then(ui.gameOverSuccess)
        .catch(ui.gameOverFailure)
    } else if (winGame === false) {
      api.spaceClick(cellIndex, playerPick)
        .then(function (response) {
          // console.log(response)
          return response
        })
        .then(ui.spaceClickSuccess)
        .catch(ui.spaceClickFailure)
      // this is when we want to know if the tur wins the game.
      // switch players turn and continue
      playerChange()
    }
  } else {
    $('#bad-space').show()
  }
  // console.log(gameArray)
}

const onGameIndex = function (event) {
  const form = event.target
  const data = getFormFields(form)

  api.gameIndex(data)
    .then(ui.onGameIndexSuccess)
    .catch(ui.onGameIdexFailure)
}

// const onGameOver = function (response) {
//   if (response === true) {
//     api.gameOver()
//       .then(ui.gameOverSuccess)
//       .catch(ui.gameOverFailure)
//   } else {
//     console.log('that didn\'t work')
//   }
// }

module.exports = {
  onNewGame: onNewGame,
  onSpaceClick: onSpaceClick,
  onGameIndex: onGameIndex,
  oneToTwo: oneToTwo,
  twoToOne: twoToOne
  // onGameOver: onGameOver
}
