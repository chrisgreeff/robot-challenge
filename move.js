var moveService = {
  move: function (robot) {
    moveService[robot.direction](robot)
  },
  NORTH: function (robot) {
    var newY = robot.y + 1

    if (newY <= 5) {
      robot.y = newY
    }
  },
  EAST: function (robot) {
    var newX = robot.x + 1

    if (newX <= 5) {
      robot.x = newX
    }
  },
  SOUTH: function (robot) {
    var newY = robot.y - 1

    if (newY >= 0) {
      robot.y = newY
    }
  },
  WEST: function (robot) {
    var newX = robot.x - 1

    if (newX >= 0) {
      robot.x = newX
    }
  }
}

module.exports = moveService
