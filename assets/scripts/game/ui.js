'use strict'

// Game ui
const store = require('./../store.js')
const gamewin = require('./gamewin.js')
// const gameEvents = ('./events.js')

// new game success and failrue
const onNewGameSuccess = function (response) {
  // $('.click-space').on('click', gameEvents.onSpaceClick)
  $('.after-new-game-click').show()
  $('#after-game-ends').hide()
  $('#change-password').hide()
  $('#message').text('New Game Started, Lets Go!')
  store.game = response.game

  // const gameObject = store.game
  //
  // console.log('Here is the new game object:', gameObject)
  $('.click-space').html('')
  $('#bad-space').hide()
  $('#win-draw-text').html('')
}

const onNewGameFailure = function (error) {
  $('#message').text('Uh Oh..Something went wrong, take a look. Error: ' + error.responseJSON.message)
}

// space click success and failure
const spaceClickSuccess = function (response) {
  $('#bad-space').hide()

  store.game = response.game
  const gameObject = store.game.cells
  // console.log(gameObject)
  // create a variable to change the game over variable

  gamewin.checkWin(gameObject)
}

const spaceClickFailure = function (error) {
  $('#message').text('Ooops, that didn\'t work, someone already chose that space...Error: ' + error.responseJSON)
}

// game over success and failure
const gameOverSuccess = function (response) {
  $('#message').text('Game Over! Well Played!')
  $('.click-space').off()
  $('#after-game-ends').show()
}

const gameOverFailure = function (error) {
  $('#message').text('Uh Oh, that didn\'t work...Error: ' + error.responseJSON.message)
}

// find out how many games you've played success and failure
const onGameIndexSuccess = function (response) {
  store.games = response.games
  const arrOfGames = store.games
  const gamesPlayed = arrOfGames.length

  $('#win-draw-text').text(`Congrats! You've played ${gamesPlayed} games!`)
}

const onGameIndexFailure = function (error) {
  $('message').text('Uh Oh, something went wrong...Error: ' + error.responseJSON.message)
}

module.exports = {
  onNewGameSuccess: onNewGameSuccess,
  onNewGameFailure: onNewGameFailure,
  spaceClickSuccess: spaceClickSuccess,
  spaceClickFailure: spaceClickFailure,
  gameOverSuccess: gameOverSuccess,
  gameOverFailure: gameOverFailure,
  onGameIndexSuccess: onGameIndexSuccess,
  onGameIndexFailure: onGameIndexFailure
}
