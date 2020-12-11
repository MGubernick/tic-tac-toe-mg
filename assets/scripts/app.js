'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
// const example = require('./example')

$(() => {
  $('.after-sign-in').hide()
  $('#start-game').hide()
  $('.after-new-game-click').hide()
  $('#bad-space').hide()
  $('#after-game-ends').hide()
  // event listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#start-game').on('click', gameEvents.onNewGame)
  $('.all-the-games').on('click', gameEvents.onGameIndex)
  // $('.click-space').on('click', gameEvents.onSpaceClick)
})
