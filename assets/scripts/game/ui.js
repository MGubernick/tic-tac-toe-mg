'use strict'

// Game ui
const store = require('./../store.js')

const onNewGameSuccess = function (response) {
  $('.after-new-game-click').show()
  $('#change-password').hide()
  $('#message').text('New Game Started, Lets Go!')
  store.game = response.game

  const gameObject = store.game

  console.log('Here is the new game object:', gameObject)
}

const onNewGameFailure = function (error) {
  $('#message').text('Uh Oh..Something went wrong, take a look. Error: ' + error.responseJSON.message)
}

module.exports = {
  onNewGameSuccess: onNewGameSuccess,
  onNewGameFailure: onNewGameFailure
}
