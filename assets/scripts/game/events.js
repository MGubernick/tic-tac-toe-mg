'use strict'

// Game Events

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store.js')
const gamewin = require('./gamewin.js')
// new game event handler
const onNewGame = function (event) {
  $('.click-space').on('click', onSpaceClick)
  $('.o-go-first').show()
  $('.x-go-first').show()
  api.newGame()
    .then(function (response) {
      // console.log(response)
      return response
    })
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}
// Player starts as x
const firstPlayer = 'X'
const secondPlayer = 'O'
let playerPick

const playerChange = function () {
  // if the player pick = first player, switch to second player
  if (playerPick === firstPlayer.fontcolor('#b84904')) {
    playerPick = secondPlayer.fontcolor('#e4dd0c')
    $('#players-turn').text('Who\'s turn: O')
    // else if the player pick is second player, switch to first player.
  } else {
    playerPick = firstPlayer.fontcolor('#b84904')
    $('#players-turn').text('Who\'s turn: X')
  }
}

// function to select which player goes first.

// set first player is x by default
playerPick = firstPlayer.fontcolor('#b84904')

// Extra Button: if you would like to start as 'O'
const oneToTwo = function (event) {
  const select = event.target
  if (select) {
    playerPick = secondPlayer.fontcolor('#e4dd0c')
    $('#players-turn').text('First Player: O')
  } else {
    playerPick = firstPlayer.fontcolor('#b84904')
  }
  return playerPick
}

// Extra Button: if you would like to start as 'X'
const twoToOne = function (event) {
  const select = event.target
  if (select) {
    playerPick = firstPlayer.fontcolor('#b84904')
    $('#players-turn').text('First Player: X')
  } else {
    playerPick = secondPlayer.fontcolor('#e4dd0c')
  }
  return playerPick
}

// event listener for when a space is clicked
const onSpaceClick = function (event) {
  const cellIndex = $(event.target).data('cell-index')
  // console.log(cellIndex)
  // find the game array in the store
  const gameArray = store.game.cells
  $('.o-go-first').hide()
  $('.x-go-first').hide()
  // console.log(gameArray)

  const gameArrayIndex = gameArray[cellIndex]
  // console.log(gameArrayIndex)
  // when user clicks - check that the space is empty
  if (gameArrayIndex !== firstPlayer.fontcolor('#b84904') && gameArrayIndex !== secondPlayer) {
    // store.game.cells[cellIndex] = playerPick
    gameArray[cellIndex] = playerPick
    // check to see if the game was won
    const winGame = gamewin.checkWin(gameArray)
    $(event.target).html(playerPick)
    // console.log(winGame)
    // if the play was a winning play, trigger game over api.
    if (winGame === true) {
      api.gameOver()
        .then(ui.gameOverSuccess)
        .catch(ui.gameOverFailure)
    } else if (winGame === false) {
      // otherwise, run the usual space click api and continue the game.
      api.spaceClick(cellIndex, playerPick)
        .then(function (response) {
          // console.log(response)
          return response
        })
        .then(ui.spaceClickSuccess)
        .catch(ui.spaceClickFailure)
      // this is when we want to know if the tur wins the game.
      // switch players turn and continue
      playerChange()
    }
  } else {
    // if a player clicks on a space that is already taken, bad space message will show
    $('#bad-space').show()
  }
  // console.log(gameArray)
}

// find out how many games you've played event handler.
const onGameIndex = function (event) {
  const form = event.target
  const data = getFormFields(form)

  api.gameIndex(data)
    .then(ui.onGameIndexSuccess)
    .catch(ui.onGameIdexFailure)
}

// const onGameOver = function (response) {
//   if (response === true) {
//     api.gameOver()
//       .then(ui.gameOverSuccess)
//       .catch(ui.gameOverFailure)
//   } else {
//     console.log('that didn\'t work')
//   }
// }

module.exports = {
  onNewGame: onNewGame,
  onSpaceClick: onSpaceClick,
  onGameIndex: onGameIndex,
  oneToTwo: oneToTwo,
  twoToOne: twoToOne
  // onGameOver: onGameOver
}
