'use strict'

// Game Events

const api = require('./api.js')
const ui = require('./ui.js')
// const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')

const onNewGame = function (event) {
  api.newGame()
    .then(function (response) {
      console.log(response)
      return response
    })
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const playerPick = 'X'

const onSpaceClick = function (event) {
  $(event.target).html(playerPick)
  const cellIndex = $(event.target).data('cell-index')
  console.log(cellIndex)

  const gameArray = store.game.cells
  console.log(gameArray)

  const gameArrayIndex = gameArray[cellIndex]
  console.log(gameArrayIndex)

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
