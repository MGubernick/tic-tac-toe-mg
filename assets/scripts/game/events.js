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
const playerPick = 'X'

// const firstPlayer = 'X'
//
// const secondPlayer = 'O'

const onSpaceClick = function (event) {
  $(event.target).html(playerPick)
  const cellIndex = $(event.target).data('cell-index')
  console.log(cellIndex)
  // find the game array in the store
  const gameArray = store.game.cells
  console.log(gameArray)

  const gameArrayIndex = gameArray[cellIndex]
  console.log(gameArrayIndex)
  // when user clicks - check that the space is empty
  if (gameArrayIndex !== 'X') {
    api.spaceClick(cellIndex, playerPick)
      .then(function (response) {
        console.log(response)
        return response
      })
      .then(ui.spaceClickSuccess)
      .catch(ui.spaceClickFailure)
  } else {
    $('#bad-space').show()
  }
}

module.exports = {
  onNewGame: onNewGame,
  onSpaceClick: onSpaceClick
}
