'use strict'

var loggerService = {
  /**
   * Logs the intro output when the app is loaded.
   *
   * @method intro
   */
  intro: function () {
    loggerService.welcome()
    console.log()
    console.log('Please enter one of the following commands:')
    console.log()
    loggerService.commands()
  },

  /**
   * Logs the welcome ASCII banner.
   *
   * @method welcome
   */
  welcome: function () {
    console.log('__          __  _                          _ ')
    console.log('\\ \\        / / | |                        | |')
    console.log(' \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___| |')
    console.log('  \\ \\/  \\/ / _ \\ |/ __/ _ \\| \'_ ` _ \\ / _ \\ |')
    console.log('   \\  /\\  /  __/ | (_| (_) | | | | | |  __/_|')
    console.log('    \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___(_)')
  },

  /**
   * Logs the commands available to the user.
   *
   * @method commands
   */
  commands: function () {
    console.log('\x1b[36m%s\x1b[0m', 'PLACE X,Y,F')
    console.log('\x1b[36m%s\x1b[0m', 'MOVE')
    console.log('\x1b[36m%s\x1b[0m', 'LEFT')
    console.log('\x1b[36m%s\x1b[0m', 'RIGHT')
    console.log('\x1b[36m%s\x1b[0m', 'REPORT')
    console.log('\x1b[36m%s\x1b[0m', 'QUIT')
    console.log()
    loggerService.newInput()
  },

  /**
   * Logs an unknown command error.
   *
   * @method unknownCommand
   */
  unknownCommand: function () {
    loggerService.error('I\'m sorry, That\'s not something I can do yet :(. How about you try one of these?')
    loggerService.commands()
  },

  /**
   * Logs the not placed error message.
   *
   * @method notPlaced
   */
  notPlaced: function () {
    console.log('\x1b[31m%s\x1b[0m: ', 'Whoops, you haven\'t placed your robot yet! You should try this command first')
    console.log('\x1b[36m%s\x1b[0m', 'PLACE X,Y,F')
    loggerService.newInput()
  },

  /**
   * Logs an error.
   *
   * @method error
   * @param  {String} message
   *         The error to log.
   */
  error: function (message) {
    console.log('\x1b[31m%s\x1b[0m: ', message)
    loggerService.newInput()
  },

  /**
   * Logs the new input line. Indicating the user that they can start typing.
   *
   * @method newInput
   */
  newInput: function () {
    process.stdout.write('$ ')
  }
}

module.exports = loggerService
