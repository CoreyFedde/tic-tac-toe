'use strict'
const hideButtons = function () {
// Hiding for the modals and button until logged in
  if ($('#game-board').hasClass('loggedIn')) {
    $('#sign-out-button').show()
    $('#change-password-button').show()
    $('#game-board').show()
    $('#new-game-button').show()
    $('.game-text-box').show()
    $('#sign-in-button').hide()
    $('#sign-up-button').hide()
  } else {
    $('#sign-out-button').hide()
    $('#change-password-button').hide()
    $('#game-board').hide()
    $('#new-game-button').hide()
    $('.game-text-box').hide()
    $('#sign-in-button').show()
    $('#sign-up-button').show()
  }
}
module.exports = {
  hideButtons
}
