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
  $(this).html(playerPick)
  const cellIndex = $(this).data()

  api.spaceClick(cellIndex, playerPick)
    .then(function (response) {
      console.log(response)
      return response
    })
    .then(ui.spaceClickSuccess)
    .catch(ui.spaceClickFailure)
}

module.exports = {
  onNewGame: onNewGame,
  onSpaceClick: onSpaceClick
}
