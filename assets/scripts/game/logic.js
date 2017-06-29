'use strict'
const gameActions = require('./gameActions.js')

let turnCounter = 0

const checkWin = function () {
  const boxOne = $('#box-1').text()
  const boxTwo = $('#box-2').text()
  const boxThree = $('#box-3').text()
  const boxFour = $('#box-4').text()
  const boxFive = $('#box-5').text()
  const boxSix = $('#box-6').text()
  const boxSeven = $('#box-7').text()
  const boxEight = $('#box-8').text()
  const boxNine = $('#box-9').text()
  // Horizontal wins
  if (turnCounter > 3) {
    if (boxOne !== '' && boxTwo !== '' && boxThree !== '') {
      if (boxOne === boxTwo && boxTwo === boxThree) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
          $('.game').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('.game').off()
        }
        gameActions.gameStatus.over = true
      }
    }
    if (boxFour !== '' && boxFive !== '' && boxSix !== '') {
      if (boxFour === boxFive && boxFive === boxSix) {
        if (boxFour === 'X') {
          $('#game-text').text('Player 1 wins')
          $('.game').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('.game').off()
        }
        gameActions.gameStatus.over = true
      }
    }
    if (boxSeven !== '' && boxEight !== '' && boxNine !== '') {
      if (boxSeven === boxEight && boxEight === boxNine) {
        if (boxSeven === 'X') {
          $('#game-text').text('Player 1 wins')
          $('.game').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('.game').off()
        }
        gameActions.gameStatus.over = true
      }
    }
      // Vertical wins
    if (boxOne !== '' && boxFour !== '' && boxSeven !== '') {
      if (boxOne === boxFour && boxFour === boxSeven) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
          $('.game').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('.game').off()
        }
        gameActions.gameStatus.over = true
      }
    }
    if (boxTwo !== '' && boxFive !== '' && boxEight !== '') {
      if (boxTwo === boxFive && boxFive === boxEight) {
        if (boxTwo === 'X') {
          $('#game-text').text('Player 1 wins')
          $('.game').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('.game').off()
        }
        gameActions.gameStatus.over = true
      }
    }
    if (boxThree !== '' && boxSix !== '' && boxNine !== '') {
      if (boxThree === boxSix && boxSix === boxNine) {
        if (boxThree === 'X') {
          $('#game-text').text('Player 1 wins')
          $('.game').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('.game').off()
        }
        gameActions.gameStatus.over = true
      }
    }
    // Diagnol wins
    if (boxOne !== '' && boxFive !== '' && boxNine !== '') {
      if (boxOne === boxFive && boxFive === boxNine) {
        if (boxOne === 'X') {
          $('#game-text').text('Player 1 wins')
          $('.game').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('.game').off()
        }
        gameActions.gameStatus.over = true
      }
    }
    if (boxThree !== '' && boxFive !== '' && boxSeven !== '') {
      if (boxThree === boxFive && boxFive === boxSeven) {
        if (boxThree === 'X') {
          $('#game-text').text('Player 1 wins')
          $('.game').off()
        } else {
          $('#game-text').text('Play 2 wins')
          $('.game').off()
        }
        gameActions.gameStatus.over = true
      }
    }
  }
// Maximum amount of moves == Cat's Game
  if (turnCounter === 9) {
    gameActions.gameStatus.over = true
    gameActions.getGameUpdates()
    $('#game-text').text("Cat's Game!")
    $('.game').off()
  }
}

// Below is the logic for the game-board, which is also linked to the game-text
const turnLogic = function (event) {
  if (turnCounter % 2 === 0) {
    const value = $(event.target).text()
    if (value === '') {
      $(event.target).text('X')
      $('#game-text').text('Your move Player 2')
      checkWin()
      gameActions.getGameUpdates()
      turnCounter++
    }
  } else {
    const value = $(event.target).text()
    if (value === '') {
      $(event.target).text('O')
      $('#game-text').text('Your move Player 1')
      checkWin()
      gameActions.getGameUpdates()
      turnCounter++
    }
  }
}

// New Game button, which should reset all squares to have a value of "''" and allow the users to start playing
const getNewGame = function (event) {
  $('#game-text').text('New game!')
  turnCounter = 0
  // Create an array to represent the game-board
  $('.game').each(function () {
    $(this).text('')
  })
  // this line updates the stat box
  gameActions.getStats()
  $('.game').on('click', turnLogic)
}

module.exports = {
  turnCounter,
  checkWin,
  turnLogic,
  getNewGame
}
