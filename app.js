var util = require('util')
var robot = require('./robot')
var logger = require('./logger')

logger.intro()

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', function (text) {
  var command = text.toUpperCase().trim()

  if (command === 'QUIT') {
    console.log('It\'s been fun! See you next time!')
    process.exit()
  } else if (command === 'MOVE') {
    robot.move()
  } else if (command === 'LEFT') {
    robot.left()
  } else if (command === 'RIGHT') {
    robot.right()
  } else if (command === 'REPORT') {
    robot.report()
  } else if (command.indexOf('PLACE') === 0) {
    robot.place(command)
  } else {
    logger.unknownCommand()
  }
})
