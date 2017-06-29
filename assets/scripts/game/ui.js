'use strict'
const hideButtons = function () {
// Hiding for the modals and button until logged in
  if ($('#game-board').hasClass('loggedIn')) {
    $('#sign-out-button').show()
    $('#change-password-button').show()
    $('#game-board').show()
  } else {
    $('#sign-out-button').hide()
    $('#change-password-button').hide()
    $('#game-board').hide()
  }
}
module.exports = {
  hideButtons
}
