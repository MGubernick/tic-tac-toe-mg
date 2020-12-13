'use strict'

// Game API
const config = require('./../config.js')
const store = require('./../store.js')

// new game api function
const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    game: {
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// api function for clicking on a space
const spaceClick = function (cellIndex, playerPick) {
  // console.log('this is store ', store)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: playerPick
        },
        over: false
      }
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// api function for game over
const gameOver = function () {
  // console.log('this is store ', store)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: true
      }
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// api function for finding how many games you have played
const gameIndex = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newGame: newGame,
  spaceClick: spaceClick,
  gameOver: gameOver,
  gameIndex: gameIndex
}
