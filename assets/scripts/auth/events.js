'use strict'

// Auth Events
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// create functions that will be referenced by event listeners in app.js
const onSignUp = function (event) {
  // Prevent the page from refreshing
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// sign in event handler
const onSignIn = function (event) {
  event.preventDefault()

  $('#change-password').show()

  const form = event.target
  const data = getFormFields(form)
  // console.log('data that you got ', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// change password event handler
const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// sign out event listener
const onSignOut = function (event) {
  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut
}
