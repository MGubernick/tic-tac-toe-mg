'use strict'

// const store = require('./../store.js')

// Sign Up Success and Failrue functions.
const signUpSuccess = function (response) {
  $('#message').text('Sign Up Successful!')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Oops! Sign Up Failed...because Error: ' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure
}
