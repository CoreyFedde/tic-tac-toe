'use strict'
const hideButtons = function () {
// Hiding for the modals and button until logged in
  if ($('#game-board').hasClass('loggedIn')) {
    console.log('class is true')
    $('#sign-out-button').show()
    $('#change-password-button').show()
    $('#game-board').show()
  } else {
    console.log('class is false')
    $('#sign-out-button').hide()
    $('#change-password-button').hide()
    $('#game-board').hide()
  }
}
module.exports = {
  hideButtons
}
