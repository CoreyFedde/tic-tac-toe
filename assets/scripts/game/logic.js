'use strict'
const gameActions = require('./gameActions.js')

let turnCounter = 0

// gameStatus = true
// console.log(gameStatus)
// gameActions.getGameUpdates()

const checkWin = function () {
  // $('#check-win').on('click', function () {
  //   console.log('clicked')
  // console.log(turnCounter)
  const boxOne = $('#box-1').text()
  // console.log(boxOne)
  const boxTwo = $('#box-2').text()
  // console.log(boxTwo)
  const boxThree = $('#box-3').text()
  // console.log(boxThree)
  const boxFour = $('#box-4').text()
  // console.log(boxFour)
  const boxFive = $('#box-5').text()
  // console.log(boxFive)
  const boxSix = $('#box-6').text()
  // console.log(boxSix)
  const boxSeven = $('#box-7').text()
  // console.log(boxSeven)
  const boxEight = $('#box-8').text()
  // console.log(boxEight)
  const boxNine = $('#box-9').text()
  // console.log(boxNine)
  // Horizontal wins
  if (turnCounter > 3) {
    if (boxOne !== '' && boxTwo !== '' && boxThree !== '') {
      if (boxOne === boxTwo && boxTwo === boxThree) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
          $('#game-board').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('#game-board').off()
        }
        gameActions.gameStatus.over = true
      }
    }
    if (boxFour !== '' && boxFive !== '' && boxSix !== '') {
      if (boxFour === boxFive && boxFive === boxSix) {
        if (boxFour === 'X') {
          $('#game-text').text('Player 1 wins')
          $('#game-board').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('#game-board').off()
        }
        gameActions.gameStatus.over = true
        console.log('this is the fucking gameActions.gameStatus.over from the win: ', gameActions.gameStatus.over)
      }
    }
    if (boxSeven !== '' && boxEight !== '' && boxNine !== '') {
      if (boxSeven === boxEight && boxEight === boxNine) {
        if (boxSeven === 'X') {
          $('#game-text').text('Player 1 wins')
          $('#game-board').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('#game-board').off()
        }
        gameActions.gameStatus.over = true
        console.log('this is the fucking gameActions.gameStatus.over from the win: ', gameActions.gameStatus.over)
      }
    }
      // Vertical wins
    if (boxOne !== '' && boxFour !== '' && boxSeven !== '') {
      if (boxOne === boxFour && boxFour === boxSeven) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
          $('#game-board').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('#game-board').off()
        }
        gameActions.gameStatus.over = true
        console.log('this is the fucking gameActions.gameStatus.over from the win: ', gameActions.gameStatus.over)
      }
    }
    if (boxTwo !== '' && boxFive !== '' && boxEight !== '') {
      if (boxTwo === boxFive && boxFive === boxEight) {
        if (boxTwo === 'X') {
          $('#game-text').text('Player 1 wins')
          $('#game-board').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('#game-board').off()
        }
        gameActions.gameStatus.over = true
        console.log('this is the fucking gameActions.gameStatus.over from the win: ', gameActions.gameStatus.over)
      }
    }
    if (boxThree !== '' && boxSix !== '' && boxNine !== '') {
      if (boxThree === boxSix && boxSix === boxNine) {
        if (boxThree === 'X') {
          $('#game-text').text('Player 1 wins')
          $('#game-board').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('#game-board').off()
        }
        gameActions.gameStatus.over = true
        console.log('this is the fucking gameActions.gameStatus.over from the win: ', gameActions.gameStatus.over)
      }
    }
    // Diagnol wins
    if (boxOne !== '' && boxFive !== '' && boxNine !== '') {
      if (boxOne === boxFive && boxFive === boxNine) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
          $('#game-board').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('#game-board').off()
        }
        gameActions.gameStatus.over = true
        console.log('this is the fucking gameActions.gameStatus.over from the win: ', gameActions.gameStatus.over)
      }
    }
    // for some reason player 1 is always winning
    if (boxThree !== '' && boxFive !== '' && boxSeven !== '') {
      if (boxThree === boxFive && boxFive === boxSeven) {
        if (boxThree === 'X') {
          $('#game-text').text('Player 1 wins')
          $('#game-board').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('#game-board').off()
        }
        gameActions.gameStatus.over = true
        console.log('this is the fucking gameActions.gameStatus.over from the win: ', gameActions.gameStatus.over)
      }
    }
  }
// Maximum amount of moves
  if (turnCounter === 9) {
    gameActions.gameStatus.over = true
    console.log('this is the fucking gameActions.gameStatus.over from the win: ', gameActions.gameStatus.over)
    gameActions.getGameUpdates()
    $('#game-text').text("Cat's Game!")
    $('#game-board').off()
  }
  // })
}

// Below is the logic for the game-board, which is also linked to the game-text
const turnLogic = function (event) {
  if (turnCounter % 2 === 0) {
    const value = $(event.target).text()
    if (value === '') {
      $(event.target).text('X')
      $('#game-text').text('Your move Player 2')
      console.log(turnCounter)
      checkWin()
      console.log('this is game status:', gameActions.gameStatus.over)
      gameActions.getGameUpdates()
      turnCounter++
    }
  } else {
    const value = $(event.target).text()
    if (value === '') {
      $(event.target).text('O')
      $('#game-text').text('Your move Player 1')
      console.log(turnCounter)
      checkWin()
      console.log('this is game status:', gameActions.gameStatus.over)
      gameActions.getGameUpdates()
      turnCounter++
    }
  }
}
console.log('this is global game status: ')
// New Game button, which should reset all squares to have a value of "''" and allow the users to start playing
const getNewGame = function (event) {
  console.log('button clicked')
  $('#game-text').text('New game!')
  turnCounter = 0
  // Create an array to represent the game-board
  $('.game').each(function () {
    $(this).text('')
  })
}

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

module.exports = {
  turnCounter,
  checkWin,
  turnLogic,
  getNewGame
}
