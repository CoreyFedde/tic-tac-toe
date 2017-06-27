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

const win = ($('#box-1').val() === $('#box-2').val() === $('#box-3').val()) ||
($('#box-1').val() === $('#box-4').val() === $('#box-7').val()) ||
($('#box-1').val() === $('#box-5').val() === $('#box-9').val()) ||
($('#box-3').val() === $('#box-5').val() === $('#box-7').val()) ||
($('#box-3').val() === $('#box-6').val() === $('#box-9').val()) ||
($('#box-7').val() === $('#box-8').val() === $('#box-9').val()) ||
($('#box-2').val() === $('#box-5').val() === $('#box-8').val())

$('#game-board').on('click', function (event) {
  // Want a variable that capture the value of game-text before each move
  const lastTurn = $('#game-text').text()
  console.log(lastTurn)
  // Changes box to show X
  if (lastTurn === 'Your move Player 1' || '') {
    const value = $(event.target).text()
    if (value === '') {
      $(event.target).text('X')
      $('#game-text').text('Your move Player 2')
    // } else ($('#game-text').text('INVALID MOVE MORON'))
    }
  } else {
// Changes box to show O
    // $('#game-board').on('click', function (event) {
    const value = $(event.target).text()
    if (value === '') {
      $(event.target).text('O')
      $('#game-text').text('Your move Player 1')
      // } else ($('#game-text').text('INVALID MOVE... and you looked so competent before'))
    }
  }
})

if (win === true) {
  console.log('Game Over')
}
