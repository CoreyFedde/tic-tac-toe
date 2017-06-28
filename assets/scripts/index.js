'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const getFormFields = require('../../lib/get-form-fields.js')
const logic = require('./game/logic.js')
const ui = require('./game/ui.js')
const api = require('./game/api.js')

$(() => {
  setAPIOrigin(location, config)
  $('#game-board').on('click', logic.turnLogic)
  $('#new-game-button').on('click', logic.getNewGame)
  $('#signUpForm').on('submit', api.onSubmit)
  $('#signInForm').on('submit', api.onLogIn)
  $('#changePasswordForm').on('submit', api.onChangePassword)
  $('#sign-out-button').on('click', api.onLogOut)
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
