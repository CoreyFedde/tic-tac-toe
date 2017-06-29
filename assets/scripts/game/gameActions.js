'use strict'
const store = require('../store.js')
const config = require('../config.js')
const save = require('../save.js')

const gameStatus = {
  over: false
}

const newGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const stats = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameUpdates = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + save.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getStats = function (event) {
  stats()
  .then(function (data) {
    $('#gamesDisplay').text(data.games.length)
  })
  .catch(function (data) {
  })
}

const createNewGame = function (event) {
  event.preventDefault()
  newGame()
  .then(function (data) {
    save.game = data.game
  })
  .catch(function (data) {
  })
}

const getGameUpdates = function () {
  event.preventDefault()
  const currIndex = $('.game').index(event.target)
  const newValue = $(event.target).text()
  const data = {
    'game': {
      'cell': {
        'index': currIndex,
        'value': newValue
      },
      'over': gameStatus.over
    }
  }
  gameUpdates(data)
    .then(function (data) {
    })
    .catch(function (data) {
    })
}

module.exports = {
  createNewGame,
  getStats,
  getGameUpdates,
  gameStatus
}
