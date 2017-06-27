'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

$('#game-board').on('click', function (event) {
  const value = $(event.target).text()
  console.log(value)
  // console.log('this is the event: ', event)
  // console.log('this is the event.target: ', event.target)
  if (value === '') {
    $(event.target).text('X')
  }
})
