'use strict'

// Game Events

const api = require('./api.js')
const ui = require('./ui.js')
// const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')
// new game event handler
const onNewGame = function (event) {
  api.newGame()
    .then(function (response) {
      console.log(response)
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
// console.log('this is players pick ', playerPick)
playerPick = firstPlayer
const onSpaceClick = function (event) {
  const cellIndex = $(event.target).data('cell-index')
  console.log(cellIndex)
  // find the game array in the store
  const gameArray = store.game.cells
  console.log(gameArray)

  const gameArrayIndex = gameArray[cellIndex]
  console.log(gameArrayIndex)
  // when user clicks - check that the space is empty
  if (gameArrayIndex !== firstPlayer && gameArrayIndex !== secondPlayer) {
    api.spaceClick(cellIndex, playerPick)
      .then(function (response) {
        console.log(response)
        return response
      })
      .then(ui.spaceClickSuccess)
      .catch(ui.spaceClickFailure)
    $(event.target).html(playerPick)
    // this is when we want to know if the tur wins the game.
    // switch players turn and continue
    playerChange()
  } else {
    $('#bad-space').show()
  }
  console.log(gameArray)
}

module.exports = {
  onNewGame: onNewGame,
  onSpaceClick: onSpaceClick
}
