'use strict'

// Game ui
const store = require('./../store.js')
const gamewin = require('./gamewin.js')
// const gameEvents = ('./events.js')

const onNewGameSuccess = function (response) {
  // $('.click-space').on('click', gameEvents.onSpaceClick)
  $('.after-new-game-click').show()
  $('#change-password').hide()
  $('#message').text('New Game Started, Lets Go!')
  store.game = response.game

  const gameObject = store.game

  console.log('Here is the new game object:', gameObject)
  $('.click-space').html('')
  $('#bad-space').hide()
  $('#win-draw-text').html('')
}

const onNewGameFailure = function (error) {
  $('#message').text('Uh Oh..Something went wrong, take a look. Error: ' + error.responseJSON.message)
}

const spaceClickSuccess = function (response) {
  $('#bad-space').hide()

  store.game = response.game
  const gameObject = store.game.cells
  console.log(gameObject)
  // create a variable to change the game over variable

  gamewin.checkWin(gameObject)
}

const spaceClickFailure = function (error) {
  $('#message').text('Ooops, that didn\'t work, someone already chose that space...Error: ' + error.responseJSON)
}

const gameOverSuccess = function (response) {
  $('#message').text('Game Over! Well Played!')
  $('.click-space').off()
}

const gameOverFailure = function (error) {
  $('#message').text('Uh Oh, that didn\'t work...Error: ' + error.responseJSON.message)
}

module.exports = {
  onNewGameSuccess: onNewGameSuccess,
  onNewGameFailure: onNewGameFailure,
  spaceClickSuccess: spaceClickSuccess,
  spaceClickFailure: spaceClickFailure,
  gameOverSuccess: gameOverSuccess,
  gameOverFailure: gameOverFailure
}
