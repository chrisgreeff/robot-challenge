'use strict'

var moveService = {
  /**
   * Moves the robot 1 space in the direction it's facing.
   *
   * @method move
   * @param  {Object} robot
   *         The robot to move.
   */
  move: function (robot) {
    if (!robot.direction) { return }

    moveService[robot.direction](robot)
  },

  /**
   * Moves the robot 1 space north.
   *
   * @method NORTH
   * @param  {Object} robot
   *         The robot to move.
   */
  NORTH: function (robot) {
    if (!robot.direction) { return }

    var newY = robot.y + 1

    if (newY <= 5) {
      robot.y = newY
    }
  },

  /**
   * Moves the robot 1 space east.
   *
   * @method EAST
   * @param  {Object} robot
   *         The robot to move.
   */
  EAST: function (robot) {
    if (!robot.direction) { return }

    var newX = robot.x + 1

    if (newX <= 5) {
      robot.x = newX
    }
  },

  /**
   * Moves the robot 1 space south.
   *
   * @method SOUTH
   * @param  {Object} robot
   *         The robot to move.
   */
  SOUTH: function (robot) {
    if (!robot.direction) { return }

    var newY = robot.y - 1

    if (newY >= 0) {
      robot.y = newY
    }
  },

  /**
   * Moves the robot 1 space west.
   *
   * @method WEST
   * @param  {Object} robot
   *         The robot to move.
   */
  WEST: function (robot) {
    if (!robot.direction) { return }

    var newX = robot.x - 1

    if (newX >= 0) {
      robot.x = newX
    }
  }
}

module.exports = moveService
