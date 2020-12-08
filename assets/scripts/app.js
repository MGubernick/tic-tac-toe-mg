'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')
// const gameEvents = require('./game/events.js')
// const example = require('./example')

$(() => {
  $('.after-sign-in').hide()
  // signup listener
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
})