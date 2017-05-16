'use stict'

global.TESTING = true

var expect = require('chai').expect
var robotService = require('../../services/robot')

describe('Robot Service', function () {
  beforeEach(function () {
    robotService.reset()
    robotService.place('PLACE 0,0,NORTH')
  })

  describe('#move', function () {
    it('should not affect the robot if it has not been placed', function () {
      robotService.reset()
      robotService.move()

      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })

    it('should move 1 space in the direction it\'s facing, and maintain it\'s direction', function () {
      robotService.move()
      expect(robotService._robot.x).to.equal(0)
      expect(robotService._robot.y).to.equal(1)
      expect(robotService._robot.direction).to.equal('NORTH')

      robotService.right()
      robotService.move()
      expect(robotService._robot.x).to.equal(1)
      expect(robotService._robot.y).to.equal(1)
      expect(robotService._robot.direction).to.equal('EAST')

      robotService.right()
      robotService.move()
      expect(robotService._robot.x).to.equal(1)
      expect(robotService._robot.y).to.equal(0)
      expect(robotService._robot.direction).to.equal('SOUTH')

      robotService.right()
      robotService.move()
      expect(robotService._robot.x).to.equal(0)
      expect(robotService._robot.y).to.equal(0)
      expect(robotService._robot.direction).to.equal('WEST')
    })

    it('should not move off the table (i.e. allow a movement causing x or y to be less than 0, or greater than 5)', function () {
      robotService.place('PLACE 0,0,SOUTH')
      robotService.move()
      expect(robotService._robot.x).to.equal(0)
      expect(robotService._robot.y).to.equal(0)
      expect(robotService._robot.direction).to.equal('SOUTH')

      robotService.place('PLACE 0,0,WEST')
      robotService.move()
      expect(robotService._robot.x).to.equal(0)
      expect(robotService._robot.y).to.equal(0)
      expect(robotService._robot.direction).to.equal('WEST')

      robotService.place('PLACE 5,5,NORTH')
      robotService.move()
      expect(robotService._robot.x).to.equal(5)
      expect(robotService._robot.y).to.equal(5)
      expect(robotService._robot.direction).to.equal('NORTH')

      robotService.place('PLACE 5,5,EAST')
      robotService.move()
      expect(robotService._robot.x).to.equal(5)
      expect(robotService._robot.y).to.equal(5)
      expect(robotService._robot.direction).to.equal('EAST')
    })
  })

  describe('#left', function () {
    it('should not affect the robot if it has not been placed', function () {
      robotService.reset()
      robotService.left()

      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })

    it('should rotate the robot in an anti-clockwise direction continuously', function () {
      expect(robotService._robot.direction).to.equal('NORTH')
      robotService.left()
      expect(robotService._robot.direction).to.equal('WEST')
      robotService.left()
      expect(robotService._robot.direction).to.equal('SOUTH')
      robotService.left()
      expect(robotService._robot.direction).to.equal('EAST')
      robotService.left()
      expect(robotService._robot.direction).to.equal('NORTH')
    })
  })

  describe('#right', function () {
    it('should not affect the robot if it has not been placed', function () {
      robotService.reset()
      robotService.right()

      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })

    it('should rotate the robot in an clockwise direction continuously', function () {
      expect(robotService._robot.direction).to.equal('NORTH')
      robotService.right()
      expect(robotService._robot.direction).to.equal('EAST')
      robotService.right()
      expect(robotService._robot.direction).to.equal('SOUTH')
      robotService.right()
      expect(robotService._robot.direction).to.equal('WEST')
      robotService.right()
      expect(robotService._robot.direction).to.equal('NORTH')
    })
  })

  describe('#report', function () {
    it('should not affect the robot if it has not been placed', function () {
      robotService.reset()
      robotService.report()

      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })
  })

  describe('#place', function () {
    it('should not place the robot if less than 3 arguments are provided', function () {
      robotService.reset()
      robotService.place('PLACE')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok

      robotService.place('PLACE 0')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok

      robotService.place('PLACE 0,0')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })

    it('should not place the robot if the first argument is not an integer between 0 and 5', function () {
      robotService.reset()
      robotService.place('PLACE a,0,NORTH')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok

      robotService.place('PLACE -1,0,NORTH')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok

      robotService.place('PLACE 6,0,NORTH')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok

      robotService.place('PLACE 1.2,0,NORTH')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })

    it('should not place the robot if the second argument is not an integer between 0 and 5', function () {
      robotService.reset()
      robotService.place('PLACE 0,a,NORTH')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok

      robotService.place('PLACE 0,-1,NORTH')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok

      robotService.place('PLACE 0,6,NORTH')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok

      robotService.place('PLACE 0,1.2,NORTH')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })

    it('should not place the robot if the third argument is not "NORTH", "EAST", "SOUTH", or "WEST"', function () {
      robotService.reset()
      robotService.place('PLACE 0,0,derp')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok

      robotService.place('PLACE 0,01,northy')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok

      robotService.place('PLACE 0,0,0')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok

      robotService.place('PLACE 0,0,-1')
      expect(robotService._robot.placed).to.not.be.ok
      expect(robotService._robot.x).to.not.be.ok
      expect(robotService._robot.y).to.not.be.ok
      expect(robotService._robot.direction).to.not.be.ok
    })

    it('should place the robot if all 3 arguments are valid', function () {
      robotService.place('PLACE 0,0,NORTH')
      expect(robotService._robot.placed).to.equal(true)
      expect(robotService._robot.x).to.equal(0)
      expect(robotService._robot.y).to.equal(0)
      expect(robotService._robot.direction).to.equal('NORTH')

      robotService.place('PLACE 5,5,SOUTH')
      expect(robotService._robot.placed).to.equal(true)
      expect(robotService._robot.x).to.equal(5)
      expect(robotService._robot.y).to.equal(5)
      expect(robotService._robot.direction).to.equal('SOUTH')
    })
  })
})
