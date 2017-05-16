'use stict'

global.TESTING = true

var expect = require('chai').expect
var moveService = require('../../services/move')
var robotService = require('../../services/robot')

describe('Move Service', function () {
  beforeEach(function () {
    robotService.reset()
    robotService.place('PLACE 0,0,NORTH')
  })

  describe('#move', function () {
    it('should not affect the robot if it has not been placed', function () {
      robotService.reset()
      moveService.move(robotService._robot)

      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })

    it('should move 1 space in the direction it\'s facing, and maintain it\'s direction', function () {
      moveService.move(robotService._robot)
      expect(robotService._robot.x).to.equal(0)
      expect(robotService._robot.y).to.equal(1)
      expect(robotService._robot.direction).to.equal('NORTH')

      robotService.right()
      moveService.move(robotService._robot)
      expect(robotService._robot.x).to.equal(1)
      expect(robotService._robot.y).to.equal(1)
      expect(robotService._robot.direction).to.equal('EAST')

      robotService.right()
      moveService.move(robotService._robot)
      expect(robotService._robot.x).to.equal(1)
      expect(robotService._robot.y).to.equal(0)
      expect(robotService._robot.direction).to.equal('SOUTH')

      robotService.right()
      moveService.move(robotService._robot)
      expect(robotService._robot.x).to.equal(0)
      expect(robotService._robot.y).to.equal(0)
      expect(robotService._robot.direction).to.equal('WEST')
    })

    it('should not move off the table (i.e. allow a movement causing x or y to be less than 0, or greater than 5)', function () {
      robotService.place('PLACE 0,0,SOUTH')
      moveService.move(robotService._robot)
      expect(robotService._robot.x).to.equal(0)
      expect(robotService._robot.y).to.equal(0)
      expect(robotService._robot.direction).to.equal('SOUTH')

      robotService.place('PLACE 0,0,WEST')
      moveService.move(robotService._robot)
      expect(robotService._robot.x).to.equal(0)
      expect(robotService._robot.y).to.equal(0)
      expect(robotService._robot.direction).to.equal('WEST')

      robotService.place('PLACE 5,5,NORTH')
      moveService.move(robotService._robot)
      expect(robotService._robot.x).to.equal(5)
      expect(robotService._robot.y).to.equal(5)
      expect(robotService._robot.direction).to.equal('NORTH')

      robotService.place('PLACE 5,5,EAST')
      moveService.move(robotService._robot)
      expect(robotService._robot.x).to.equal(5)
      expect(robotService._robot.y).to.equal(5)
      expect(robotService._robot.direction).to.equal('EAST')
    })
  })

  describe('#NORTH', function () {
    it('should not affect the robot if it has not been placed', function () {
      robotService.reset()
      moveService.NORTH(robotService._robot)

      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })

    it('should increase the y property of the robot by 1, but not exceed 5', function () {
      expect(robotService._robot.y).to.equal(0)
      moveService.NORTH(robotService._robot)
      expect(robotService._robot.y).to.equal(1)
      moveService.NORTH(robotService._robot)
      expect(robotService._robot.y).to.equal(2)
      moveService.NORTH(robotService._robot)
      expect(robotService._robot.y).to.equal(3)
      moveService.NORTH(robotService._robot)
      expect(robotService._robot.y).to.equal(4)
      moveService.NORTH(robotService._robot)
      expect(robotService._robot.y).to.equal(5)
      moveService.NORTH(robotService._robot)
      expect(robotService._robot.y).to.equal(5)
    })
  })

  describe('#EAST', function () {
    it('should not affect the robot if it has not been placed', function () {
      robotService.reset()
      moveService.EAST(robotService._robot)

      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })

    it('should increase the x property of the robot by 1, but not exceed 5', function () {
      expect(robotService._robot.x).to.equal(0)
      moveService.EAST(robotService._robot)
      expect(robotService._robot.x).to.equal(1)
      moveService.EAST(robotService._robot)
      expect(robotService._robot.x).to.equal(2)
      moveService.EAST(robotService._robot)
      expect(robotService._robot.x).to.equal(3)
      moveService.EAST(robotService._robot)
      expect(robotService._robot.x).to.equal(4)
      moveService.EAST(robotService._robot)
      expect(robotService._robot.x).to.equal(5)
      moveService.EAST(robotService._robot)
      expect(robotService._robot.x).to.equal(5)
    })
  })

  describe('#SOUTH', function () {
    it('should not affect the robot if it has not been placed', function () {
      robotService.reset()
      moveService.SOUTH(robotService._robot)

      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })

    it('should decrease the y property of the robot by 1, but not go below 0', function () {
      robotService.place('PLACE 5,5,SOUTH')
      expect(robotService._robot.y).to.equal(5)
      moveService.SOUTH(robotService._robot)
      expect(robotService._robot.y).to.equal(4)
      moveService.SOUTH(robotService._robot)
      expect(robotService._robot.y).to.equal(3)
      moveService.SOUTH(robotService._robot)
      expect(robotService._robot.y).to.equal(2)
      moveService.SOUTH(robotService._robot)
      expect(robotService._robot.y).to.equal(1)
      moveService.SOUTH(robotService._robot)
      expect(robotService._robot.y).to.equal(0)
      moveService.SOUTH(robotService._robot)
      expect(robotService._robot.y).to.equal(0)
    })
  })

  describe('#WEST', function () {
    it('should not affect the robot if it has not been placed', function () {
      robotService.reset()
      moveService.WEST(robotService._robot)

      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })

    it('should decrease the x property of the robot by 1, but not go below 0', function () {
      robotService.place('PLACE 5,5,WEST')
      expect(robotService._robot.x).to.equal(5)
      moveService.WEST(robotService._robot)
      expect(robotService._robot.x).to.equal(4)
      moveService.WEST(robotService._robot)
      expect(robotService._robot.x).to.equal(3)
      moveService.WEST(robotService._robot)
      expect(robotService._robot.x).to.equal(2)
      moveService.WEST(robotService._robot)
      expect(robotService._robot.x).to.equal(1)
      moveService.WEST(robotService._robot)
      expect(robotService._robot.x).to.equal(0)
      moveService.WEST(robotService._robot)
      expect(robotService._robot.x).to.equal(0)
    })
  })
})
