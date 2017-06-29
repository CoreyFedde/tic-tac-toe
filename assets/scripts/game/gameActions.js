'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const config = require('../config.js')
const ui = require('./ui.js')
const save = require('../save.js')

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


module.exports = {
  createNewGame
}
