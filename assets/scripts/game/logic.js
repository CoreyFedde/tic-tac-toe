'use strict'
const gameActions = require('./gameActions.js')

// Turn Counter variable
let turnCounter = 0

// win conditions
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

  // Maximum amount of moves == Cat's Game
  if (turnCounter === 9) {
    gameActions.gameStatus.over = true
    $('#game-text').text("Cat's Game!")
    $('#robotText').text('A tie? ANTICLIMACTIC.')
    $('.game').off()
    if ($('#game-board').hasClass('loggedIn')) {
      gameActions.getGameUpdates()
    }
  }
  // Horizontal wins
  if (boxOne !== '' && boxTwo !== '' && boxThree !== '') {
    if (boxOne === boxTwo && boxTwo === boxThree) {
      if (boxOne === 'X') {
        $('#game-text').text('Player 1 wins')
        $('#robotText').text('Player 1 you won! I always knew you could do it! To receive your prize, go to the root directory in your terminal and rm -rf something important.')
        $('.game').off()
      } else {
        $('#game-text').text('Play 2 wins')
        $('#robotText').text('Player 2, you are winning in the game and in life.')
        $('.game').off()
      }
      gameActions.gameStatus.over = true
    }
  } else if (boxFour !== '' && boxFive !== '' && boxSix !== '') {
    if (boxFour === boxFive && boxFive === boxSix) {
      if (boxFour === 'X') {
        $('#game-text').text('Player 1 wins')
        $('#robotText').text('Player 1 you won! I always knew you could do it! To receive your prize, go to the root directory in your terminal and rm -rf something important.')
        $('.game').off()
      } else {
        $('#game-text').text('Play 2 wins')
        $('#robotText').text('Player 2, you are winning in the game and in life.')
        $('.game').off()
      }
      gameActions.gameStatus.over = true
    }
  } else if (boxSeven !== '' && boxEight !== '' && boxNine !== '') {
    if (boxSeven === boxEight && boxEight === boxNine) {
      if (boxSeven === 'X') {
        $('#game-text').text('Player 1 wins')
        $('#robotText').text('Player 1 you won! I always knew you could do it! To receive your prize, go to the root directory in your terminal and rm -rf something important.')
        $('.game').off()
      } else {
        $('#game-text').text('Play 2 wins')
        $('#robotText').text('Player 2, you are winning in the game and in life.')
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
        $('#robotText').text('Player 1 you won! I always knew you could do it! To receive your prize, go to the root directory in your terminal and rm -rf something important.')
        $('.game').off()
      } else {
        $('#game-text').text('Play 2 wins')
        $('#robotText').text('Player 2, you are winning in the game and in life.')
        $('.game').off()
      }
      gameActions.gameStatus.over = true
    }
  } else if (boxTwo !== '' && boxFive !== '' && boxEight !== '') {
    if (boxTwo === boxFive && boxFive === boxEight) {
      if (boxTwo === 'X') {
        $('#game-text').text('Player 1 wins')
        $('#robotText').text('Player 1 you won! I always knew you could do it! To receive your prize, go to the root directory in your terminal and rm -rf something important.')
        $('.game').off()
      } else {
        $('#game-text').text('Play 2 wins')
        $('#robotText').text('Player 2, you are winning in the game and in life.')
        $('.game').off()
      }
      gameActions.gameStatus.over = true
    }
  } else if (boxThree !== '' && boxSix !== '' && boxNine !== '') {
    if (boxThree === boxSix && boxSix === boxNine) {
      if (boxThree === 'X') {
        $('#game-text').text('Player 1 wins')
        $('#robotText').text('Player 1 you won! I always knew you could do it! To receive your prize, go to the root directory in your terminal and rm -rf something important.')
        $('.game').off()
      } else {
        $('#game-text').text('Play 2 wins')
        $('#robotText').text('Player 2, you are winning in the game and in life.')
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
        $('#robotText').text('Player 1 you won! I always knew you could do it! To receive your prize, go to the root directory in your terminal and rm -rf something important.')
        $('.game').off()
      } else {
        $('#game-text').text('Play 2 wins')
        $('#robotText').text('Player 2, you are winning in the game and in life.')
        $('.game').off()
      }
      gameActions.gameStatus.over = true
    }
  } else if (boxThree !== '' && boxFive !== '' && boxSeven !== '') {
    if (boxThree === boxFive && boxFive === boxSeven) {
      if (boxThree === 'X') {
        $('#game-text').text('Player 1 wins')
        $('#robotText').text('Player 1 you won! I always knew you could do it! To receive your prize, go to the root directory in your terminal and rm -rf something important.')
        $('.game').off()
      } else {
        $('#game-text').text('Play 2 wins')
        $('#robotText').text('Player 2, you are winning in the game and in life.')
        $('.game').off()
      }
      gameActions.gameStatus.over = true
    }
  }
}

// Random response Player 1 array
const oneArray = [
  'Player 1, look at the Game Count above me. Think of all the minutes youve wasted...',
  'Player 1, I just got a call from your mother. She is disappointed in that last move.',
  'I am sorry for the insults Player 1. Its just been a long day and, well, you deserve them.',
  'Player 1, can I get you anything? Soda, tea, a Tic-Tac-Toe guide for Dummies?',
  'Wow, Player 1. That last move was pretty good. Player 2, get your shit together.',
  'Player 1, I changed my mind. You are great at this. Quit your day job. Pursue this professionally. You will not regret it...'
]
// Random response Player 2 array
const twoArray = [
  'Player 2, I believe in you as a tic-tac-toe player and as a person.',
  'Player 2, if you start to lose, just accidentally hit the New Game button.',
  'Player 2, that was a nice move.',
  'Player 2, thats right. YOU ARE DOING SO WELL!',
  'I am going to take a nap. Player 2, will you wake me when you win?'
]
const getRandomSentenceForOne = function () {
  const index = Math.floor(Math.random() * (oneArray.length - 1))
  const oneReply = oneArray[index]
  $('#robotText').text(oneReply)
}
const getRandomSentenceForTwo = function () {
  const index = Math.floor(Math.random() * (twoArray.length - 1))
  const twoReply = twoArray[index]
  $('#robotText').text(twoReply)
}

// Below is the logic for the game-board, which is also linked to the game-text
const turnLogic = function (event) {
  if (turnCounter % 2 === 0) {
    const value = $(event.target).text()
    if (value === '') {
      $(event.target).text('X')
      $('#game-text').text('Your move Player 2')
      turnCounter++
      checkWin()
      if (!gameActions.gameStatus.over) {
        getRandomSentenceForOne()
      }
      if ($('#game-board').hasClass('loggedIn')) {
        gameActions.getGameUpdates()
      }
    }
  } else {
    const value = $(event.target).text()
    if (value === '') {
      $(event.target).text('O')
      $('#game-text').text('Your move Player 1')
      if (turnCounter === 0) {
        $('#robotText').text('Player 1, this part requires a friend. You have one of those right?')
      }
      turnCounter++
      checkWin()
      if (!gameActions.gameStatus.over) {
        getRandomSentenceForTwo()
      }
      if ($('#game-board').hasClass('loggedIn')) {
        gameActions.getGameUpdates()
      }
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
  $('.game').on('click', turnLogic)
  $('#robotText').text('Now it is your turn Player 1. Try not to strain anything.')
  // this line updates the stat box
  if ($('#game-board').hasClass('loggedIn')) {
    gameActions.getStats()
    gameActions.createNewGame()
  }
}

module.exports = {
  turnCounter,
  checkWin,
  turnLogic,
  getNewGame
}
