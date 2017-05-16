'use strict'

var loggerService = require('./logger')
var moveService = require('./move')
var DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST']

var robotService = {
  _robot: {
    placed: false,
    x: null,
    y: null,
    direction: null
  },

  /**
   * Moves the robot 1 space in the direction it's facing without falling off the table.
   *
   * @method move
   */
  move: function () {
    if (!robotService._robot.placed) { return loggerService.notPlaced() }

    moveService.move(robotService._robot)
    loggerService.newInput()
  },

  /**
   * Rotates the robot 90 degrees anti-clockwise.
   *
   * @method left
   */
  left: function () {
    if (!robotService._robot.placed) { return loggerService.notPlaced() }

    var current = DIRECTIONS.indexOf(robotService._robot.direction)
    robotService._robot.direction = current ? DIRECTIONS[(current - 1) % DIRECTIONS.length] : DIRECTIONS[DIRECTIONS.length - 1]
    loggerService.newInput()
  },

  /**
   * Rotates the robot 90 degrees clockwise.
   *
   * @method right
   */
  right: function () {
    if (!robotService._robot.placed) { return loggerService.notPlaced() }

    robotService._robot.direction = DIRECTIONS[(DIRECTIONS.indexOf(robotService._robot.direction) + 1) % DIRECTIONS.length]
    loggerService.newInput()
  },

  /**
   * Reports the current position and direction of the robot.
   *
   * @method report
   */
  report: function () {
    if (!robotService._robot.placed) { return loggerService.notPlaced() }

    console.log('\x1b[32m%s\x1b[0m', robotService._robot.x + ',' + robotService._robot.y + ',' + robotService._robot.direction)
    loggerService.newInput()
  },

  /**
   * Places the robot on the table with the given position and direction entered by the user. Provided it's on the table..
   *
   * @method place
   * @param  {String} command
   *         The user entered command to parse the position and direction from.
   */
  place: function (command) {
    var positions = command.substring(5).split(',')

    if (positions.length < 3) {
      return loggerService.error('You need to provide all three arguments. X, Y, F. Have another go!')
    }

    var newX = Number(positions[0])
    if (Number.isNaN(newX) || !Number.isInteger(newX) || newX < 0 || newX > 5) {
      return loggerService.error('The first argument (X,y,f) if not a valid argument. Must be an integer between 0 and 5. Have another go!')
    }

    var newY = Number(positions[1])
    if (Number.isNaN(newY) || !Number.isInteger(newY) || newY < 0 || newY > 5) {
      return loggerService.error('The second argument (x,Y,f) if not a valid argument. Must be an integer between 0 and 5. Have another go!')
    }

    const direction = positions[2].trim()
    if (!DIRECTIONS.includes(direction)) {
      return loggerService.error('The third argument (x,y,F) must be either "NORTH", "EAST", "SOUTH", or "WEST". Have another go!')
    }

    robotService._robot.x = newX
    robotService._robot.y = newY
    robotService._robot.direction = direction
    robotService._robot.placed = true
    loggerService.newInput()
  },

  /**
   * Resets the state of the robot. This is primarily for testing purposes.
   *
   * @method reset
   */
  reset: function () {
    robotService._robot.placed = false
    robotService._robot.x = null
    robotService._robot.y = null
    robotService._robot.direction = null
  }
}

module.exports = robotService
