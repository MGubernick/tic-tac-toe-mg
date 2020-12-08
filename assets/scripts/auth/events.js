'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// create functions that will be referenced by event listeners in app.js
const onSignUp = function (event) {
  // Prevent the page from refreshing
  event.preventDefault()

  const form = event.target
  console.log(event.target)
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

module.exports = {
  onSignUp: onSignUp
}
