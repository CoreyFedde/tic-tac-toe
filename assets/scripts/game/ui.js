'use strict'
const hideButtons = function () {
// Hiding for the modals and button until logged in
  if ($('#game-board').hasClass('loggedIn')) {
    $('#sign-out-button').show()
    $('#change-password-button').show()
    // $('#game-board').show()
    // $('#gameCounter').show()
    // $('#new-game-button').show()
  } else {
    $('#sign-out-button').hide()
    $('#change-password-button').hide()
    // $('#game-board').hide()
    // $('#gameCounter').hide()
    // $('#new-game-button').hide()
  }
}
module.exports = {
  hideButtons
}
