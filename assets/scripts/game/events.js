'use strict'

// Game Events

const api = require('./api.js')
const ui = require('./ui.js')
// const getFormFields = require('./../../../lib/get-form-fields')

const onNewGame = function (event) {
  // const form = event.target
  // const data = getFormFields(form)
  api.newGame()
    .then(function (response) {
      console.log(response)
      return response
    })
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

module.exports = {
  onNewGame: onNewGame
}
