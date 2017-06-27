'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// Win conditions and possible way to compare, but not working
// const win = ($('#box-1').val() === $('#box-2').val() === $('#box-3').val()) ||
// ($('#box-1').val() === $('#box-4').val() === $('#box-7').val()) ||
// ($('#box-1').val() === $('#box-5').val() === $('#box-9').val()) ||
// ($('#box-3').val() === $('#box-5').val() === $('#box-7').val()) ||
// ($('#box-3').val() === $('#box-6').val() === $('#box-9').val()) ||
// ($('#box-7').val() === $('#box-8').val() === $('#box-9').val()) ||
// ($('#box-2').val() === $('#box-5').val() === $('#box-8').val())
// if (win === true) {
//   console.log('Game Over')
// }

// Below is the logic for the game-board, which is also linked to the game-text
$('#game-board').on('click', function (event) {
  // Want a variable that capture the value of game-text before each move
  let lastTurn = $('#game-text').text()
  console.log(lastTurn)
  // Changes box to show X
  if (lastTurn === 'Your move Player 2') {
    // Changes box to show O
        // $('#game-board').on('click', function (event) {
    const value = $(event.target).text()
    if (value === '') {
      $(event.target).text('O')
      $('#game-text').text('Your move Player 1')
          // } else ($('#game-text').text('INVALID MOVE... and you looked so competent before'))
    }
  } else {
    const value = $(event.target).text()
    if (value === '') {
      $(event.target).text('X')
      $('#game-text').text('Your move Player 2')
    // } else ($('#game-text').text('INVALID MOVE MORON'))
    }
  }
})

// New Game button, which should reset all squares to have a value of "''" and allow the users to start playing
$('#new-game-button').on('click', function (event) {
  console.log('button clicked')
  $('#game-text').text('New game!')
  // Create an array to represent the game-board
  $('.game').each(function () {
    $(this).text('')
  })
})
