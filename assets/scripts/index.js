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

// const win = [
//   ($('#box-1').val() === $('#box-2').val() === $('#box-3').val()),
//   ($('#box-1').val() === $('#box-4').val() === $('#box-7').val()),
//   ($('#box-3').val() === $('#box-5').val() === $('#box-7').val()),
//   ($('#box-4').val() === $('#box-5').val() === $('#box-6').val()),
//   ($('#box-3').val() === $('#box-5').val() === $('#box-7').val()),
//   ($('#box-3').val() === $('#box-6').val() === $('#box-9').val()),
//   ($('#box-7').val() === $('#box-8').val() === $('#box-9').val()),
//   ($('#box-2').val() === $('#box-5').val() === $('#box-8').val())
//   ($('#box-1').val() === $('#box-5').val() === $('#box-9').val())
// ]
// const win = ($('#box-1').val() === $('#box-2').val() === $('#box-3').val()) ||
// ($('#box-1').val() === $('#box-4').val() === $('#box-7').val()) ||
// ($('#box-1').val() === $('#box-5').val() === $('#box-9').val()) ||
// ($('#box-3').val() === $('#box-5').val() === $('#box-7').val()) ||
// ($('#box-3').val() === $('#box-6').val() === $('#box-9').val()) ||
// ($('#box-7').val() === $('#box-8').val() === $('#box-9').val()) ||
// ($('#box-2').val() === $('#box-5').val() === $('#box-8').val())
// if (win === true) {
// //   console.log('Game Over')
// // }

let turnCounter = 0

const checkWin = function () {
  // $('#check-win').on('click', function () {
  //   console.log('clicked')
  // console.log(turnCounter)
  let boxOne = $('#box-1').text()
  // console.log(boxOne)
  let boxTwo = $('#box-2').text()
  // console.log(boxTwo)
  let boxThree = $('#box-3').text()
  // console.log(boxThree)
  let boxFour = $('#box-4').text()
  // console.log(boxFour)
  let boxFive = $('#box-5').text()
  // console.log(boxFive)
  let boxSix = $('#box-6').text()
  // console.log(boxSix)
  let boxSeven = $('#box-7').text()
  // console.log(boxSeven)
  let boxEight = $('#box-8').text()
  // console.log(boxEight)
  let boxNine = $('#box-9').text()
  // console.log(boxNine)
  // Horizontal wins
  if (turnCounter > 3) {
    if (boxOne !== '' && boxTwo !== '' && boxThree !== '') {
      if (boxOne === boxTwo && boxTwo === boxThree) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
        } else {
          $('#game-text').text('Play 2 wins')
        }
      }
    }
    if (boxFour !== '' && boxFive !== '' && boxSix !== '') {
      if (boxFour === boxFive && boxFive === boxSix) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
        } else {
          $('#game-text').text('Play 2 wins')
        }
      }
    }
    if (boxSeven !== '' && boxEight !== '' && boxNine !== '') {
      if (boxSeven === boxEight && boxEight === boxNine) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
        } else {
          $('#game-text').text('Play 2 wins')
        }
      }
    }
      // Vertical wins
    if (boxOne !== '' && boxFour !== '' && boxSeven !== '') {
      if (boxOne === boxFour && boxFour === boxSeven) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
        } else {
          $('#game-text').text('Play 2 wins')
        }
      }
    }
    if (boxTwo !== '' && boxFive !== '' && boxEight !== '') {
      if (boxTwo === boxFive && boxFive === boxEight) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
        } else {
          $('#game-text').text('Play 2 wins')
        }
      }
    }
    if (boxThree !== '' && boxSix !== '' && boxNine !== '') {
      if (boxThree === boxSix && boxSix === boxNine) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
        } else {
          $('#game-text').text('Play 2 wins')
        }
      }
    }
    // Diagnol wins
    if (boxOne !== '' && boxFive !== '' && boxNine !== '') {
      if (boxOne === boxFive && boxFive === boxNine) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
        } else {
          $('#game-text').text('Play 2 wins')
        }
      }
    }
    if (boxThree !== '' && boxFive !== '' && boxSeven !== '') {
      if (boxThree === boxFive && boxFive === boxSeven) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
        } else {
          $('#game-text').text('Play 2 wins')
        }
      }
    }
  }
// Maximum amount of moves
  if (turnCounter === 9) {
    $('#game-text').text("Cat's Game!")
  }
  // })
}

// Below is the logic for the game-board, which is also linked to the game-text
$('#game-board').on('click', function (event) {
  if (turnCounter % 2 === 0) {
    const value = $(event.target).text()
    if (value === '') {
      $(event.target).text('X')
      $('#game-text').text('Your move Player 2')
      turnCounter++
      console.log(turnCounter)
      checkWin()
    }
  } else {
    const value = $(event.target).text()
    if (value === '') {
      $(event.target).text('O')
      $('#game-text').text('Your move Player 1')
      turnCounter++
      console.log(turnCounter)
      checkWin()
    }
  }
})

// $('#game-board').on('click', function (event) {
//   // Want a variable that capture the value of game-text before each move
//   const lastTurn = $('#game-text').text()
//   console.log(lastTurn)
//   // Changes box to show X
//   if (lastTurn === 'Your move Player 2') {
//     // Changes box to show O
//         // $('#game-board').on('click', function (event) {
//     const value = $(event.target).text()
//     if (value === '') {
//       $(event.target).text('O')
//       $('#game-text').text('Your move Player 1')
//       turnCounter++
//       console.log(turnCounter)
//           // } else ($('#game-text').text('INVALID MOVE... and you looked so competent before'))
//     }
//   } else {
//     const value = $(event.target).text()
//     if (value === '') {
//       $(event.target).text('X')
//       $('#game-text').text('Your move Player 2')
//       turnCounter++
//       console.log(turnCounter)
//     // } else ($('#game-text').text('INVALID MOVE MORON'))
//     }
//   }
// })

// New Game button, which should reset all squares to have a value of "''" and allow the users to start playing
$('#new-game-button').on('click', function (event) {
  console.log('button clicked')
  $('#game-text').text('New game!')
  turnCounter = 0
  // Create an array to represent the game-board
  $('.game').each(function () {
    $(this).text('')
  })
})

// Hiding for the modals and button until logged in
if ('loggedIn') {
  $('#sign-out-button').show()
  $('#change-password-button').show()
} else {
  $('#sign-out-button').hide()
  $('#change-password-button').hide()
}

// Turn counter. If turns = 9 then the game is over. If turns > 3, check to see
// if anyone has won.
// $('.game').each(function () {
//   if ($(this).text('') !== true) {
//     console.log('Game is over')
//   }
// })
