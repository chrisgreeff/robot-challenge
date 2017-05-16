var loggerService = require('./logger')
var moveService = require('./move')
var DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST']
var robot = {
  placed: false,
  x: null,
  y: null,
  direction: null
}

module.exports = {
  move: function () {
    if (!robot.placed) { return loggerService.notPlaced() }

    moveService.move(robot)
  },
  left: function () {
    if (!robot.placed) { return loggerService.notPlaced() }

    var current = DIRECTIONS.indexOf(robot.direction)
    robot.direction = current ? DIRECTIONS[(current - 1) % 4] : DIRECTIONS[3]
  },
  right: function () {
    if (!robot.placed) { return loggerService.notPlaced() }

    robot.direction = DIRECTIONS[(DIRECTIONS.indexOf(robot.direction) + 1) % 4]
  },
  report: function () {
    if (!robot.placed) { return loggerService.notPlaced() }

    console.log(robot.x + ',' + robot.y + ',' + robot.direction)
  },
  place: function (command) {
    var positions = command.substring(5).split(',')

    if (positions.length < 3) {
      return loggerService.error('You need to provide all three arguments. X, Y, F. Have another go!')
    }

    var newX = Number(positions[0])
    if (Number.isNaN(newX) || !Number.isInteger(newX)) {
      return loggerService.error('The first argument (X,y,f) must be an integer. Have another go!')
    } else if (newX < 0 || newX > 5) {
      return loggerService.error('The first argument (X,y,f) must be between 0 and 5. Have another go!')
    }

    var newY = Number(positions[1])
    if (Number.isNaN(newY) || !Number.isInteger(newY)) {
      return loggerService.error('The second argument (x,Y,f) must be an integer. Have another go!')
    } else if (newY < 0 || newY > 5) {
      return loggerService.error('The second argument (x,Y,f) must be between 0 and 5. Have another go!')
    }

    const direction = positions[2].trim()
    if (!DIRECTIONS.includes(direction)) {
      return loggerService.error('The third argument (x,y,F) must be either "NORTH", "EAST", "SOUTH", or "WEST". Have another go!')
    }

    // If we have got this far, we can accept all arguments.
    robot.x = newX
    robot.y = newY
    robot.direction = direction
    robot.placed = true

    console.log('Robot placed!')
    console.log()
    process.stdout.write('$ ')
  }
}
