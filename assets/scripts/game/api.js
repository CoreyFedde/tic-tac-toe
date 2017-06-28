'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
// API
const signUp = function (data) {
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com' + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com' + '/sign-in/',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com' + '/change-password/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const logOut = function (id) {
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com' + `/sign-out/` + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log(getFormFields(event.target))
  const data = getFormFields(this)
  signUp(data)
    .then(console.log('Success'))
    .catch(console.log('Nope'))
}

const onLogIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log(data)
  signIn(data)
    .then(console.log('Success'))
    .catch(console.log('Nope'))
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('this is getFormFields data: ', data)
  changePassword(data)
  .then(console.log('Success'))
  .catch(console.log('Nope'))
}

const onLogOut = function (event) {
  event.preventDefault()
  logOut()
    .then(console.log('Success'))
    .catch(console.log('Nope'))
}

const onSubmit = function (event) {
  event.preventDefault()
  console.log('submitted')
}

module.exports = {
  onSignUp,
  onSubmit,
  onLogIn,
  onChangePassword,
  onLogOut
}
