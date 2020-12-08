'use strict'

const config = require('./../config.js')
// const store = require('./../store.js')

// api functions to communicate via ajax
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp: signUp
}
