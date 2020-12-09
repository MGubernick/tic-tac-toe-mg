'use strict'

// Game ui
const store = require('./../store.js')

const onNewGameSuccess = function (response) {
  $('.after-new-game-click').show()
  $('#message').text('New Game Started, Lets Go!')
  store.games = response.games

  console.log('Here is whats I stored:', store.games)
}

const onNewGameFailure = function (error) {
  $('#message').text('Uh Oh..Something went wrong, take a look. Error: ' + error.responseJSON.message)
}

module.exports = {
  onNewGameSuccess: onNewGameSuccess,
  onNewGameFailure: onNewGameFailure
}
