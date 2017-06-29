'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const config = require('../config.js')
const ui = require('./ui.js')
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
  event.preventDefault()
  stats()
  .then(function (data) {
    console.log('success')
    console.log(data.games.length)
  })
  .catch(function (data) {
    console.log('Nope')
  })
}

const createNewGame = function (event) {
  event.preventDefault()
  newGame()
  .then(function (data) {
    console.log('Success')
    save.game = data.game
    console.log('this is the data.game: ', data)
    console.log('this is the data.game.id: ', data.game.id)
    console.log('this is the save.game ', save.game)
    console.log('this is the save.game.id ', save.game.id)
  })
  .catch(function (data) {
    console.log('Nope')
  })
}

const getGameUpdates = function () {
  event.preventDefault()
  console.log(save.game.id)
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
      console.log('Success')
      console.log(data)
    })
    .catch(function (data) {
      console.log('Nope')
    })
}

module.exports = {
  createNewGame,
  getStats,
  getGameUpdates,
  gameStatus
}
