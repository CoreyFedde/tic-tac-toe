'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const config = require('../config.js')
const ui = require('./ui.js')
// API
const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const logOut = function () {
  return $.ajax({
    url: config.apiOrigin + `/sign-out/` + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('getFormFields', event.target)
  console.log('data', data)
  signUp(data)
    .then(function (data) {
      $('#sign-up-modal').modal('hide')
      $('#robotText').text('SIGN UP WORKED!')
    })
    .catch(function (data) {
      $('#robotText').text('Weird. That username was taken. Try it again!')
    })
}

const onLogIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  signIn(data)
  .then(function (data) {
    store.user = data.user
    $('#sign-in-modal').modal('hide')
    $('#game-board').addClass('loggedIn')
    ui.hideButtons()
    $('#robotText').text('Nice! You logged in! Now click on New Game to start a game!')
  })
  .catch(function (data) {
    $('#robotText').text('Ooops! Something went wrong with the login. Remember to sign up first and try again')
  })
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  changePassword(data)
    .then(function (data) {
      $('#change-password-modal').modal('hide')
      $('#robotText').text('Changing your password, huh? Good. The last one was garbage.')
    })
    .catch(function (data) {
      $('#robotText').text('That change password attempt did not work.')
    })
}

const onLogOut = function (event) {
  event.preventDefault()
  logOut()
  .then(function () {
    $('#game-board').removeClass('loggedIn')
    ui.hideButtons()
    $('#robotText').text('Bye forever...')
    $('.form-control').val('')
  })
  .catch(function () {
  })
}

module.exports = {
  onSignUp,
  onLogIn,
  onChangePassword,
  onLogOut
}
