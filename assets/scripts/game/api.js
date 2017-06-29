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
  console.log(getFormFields(event.target))
  const data = getFormFields(event.target)
  signUp(data)
    .then(function (data) {
      console.log('Success')
      $('#sign-in-modal').modal('hide')
    })
    .catch(function (data) {
      console.log('Nope')
    })
}

const onLogIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  signIn(data)
  .then(function (data) {
    console.log('Success')
    store.user = data.user
    console.log('this is the data.user: ', store.user)
    $('#sign-in-modal').modal('hide')
    $('#game-board').addClass('loggedIn')
    ui.hideButtons()
  })
  .catch(function (data) {
    console.log('Nope')
  })
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('this is getFormFields data: ', data)
  changePassword(data)
    .then(function (data) {
      console.log('Success')
      $('#change-password-modal').modal('hide')
    })
    .catch(function (data) {
      console.log('Nope')
    })
}

const onLogOut = function (event) {
  event.preventDefault()
  logOut()
  .then(function () {
    console.log('Success')
    $('#game-board').removeClass('loggedIn')
    ui.hideButtons()
  })
  .catch(function () {
    console.log('Nope')
  })
}

// const onSubmit = function (event) {
//   event.preventDefault()
//   console.log('submitted')
// }

module.exports = {
  onSignUp,
  onLogIn,
  onChangePassword,
  onLogOut
}
