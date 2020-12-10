'use strict'

// Game ui
const store = require('./../store.js')
const gamewin = require('./gamewin.js')

const onNewGameSuccess = function (response) {
  $('.after-new-game-click').show()
  $('#change-password').hide()
  $('#message').text('New Game Started, Lets Go!')
  store.game = response.game

  const gameObject = store.game

  console.log('Here is the new game object:', gameObject)
  $('.click-space').html('')
  $('#bad-space').hide()
}

const onNewGameFailure = function (error) {
  $('#message').text('Uh Oh..Something went wrong, take a look. Error: ' + error.responseJSON.message)
}

const spaceClickSuccess = function (response) {
  $('#bad-space').hide()

  store.game.cells = response.game.cells
  const gameObject = store.game.cells
  console.log(gameObject)
  gamewin.checkWin(gameObject)
}

const spaceClickFailure = function (error) {
  $('#message').text('Ooops, that didn\'t work, someone already chose that space...Error: ' + error.responseJSON.message)
}

module.exports = {
  onNewGameSuccess: onNewGameSuccess,
  onNewGameFailure: onNewGameFailure,
  spaceClickSuccess: spaceClickSuccess,
  spaceClickFailure: spaceClickFailure
}
