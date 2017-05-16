'use strict'

var robotService = require('./services/robot')
var loggerService = require('./services/logger')

loggerService.intro()

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', function (text) {
  var command = text.toUpperCase().trim()

  if (command === 'QUIT') {
    console.log('It\'s been fun! See you next time!')
    process.exit()
  } else if (command === 'MOVE') {
    robotService.move()
  } else if (command === 'LEFT') {
    robotService.left()
  } else if (command === 'RIGHT') {
    robotService.right()
  } else if (command === 'REPORT') {
    robotService.report()
  } else if (command.indexOf('PLACE') === 0) {
    robotService.place(command)
  } else {
    loggerService.unknownCommand()
  }

  loggerService.newInput()
})
