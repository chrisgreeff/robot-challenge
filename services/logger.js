'use strict'

var loggerService = {
  /**
   * Logs the intro output when the app is loaded.
   *
   * @method intro
   */
  intro: function () {
    if (global.TESTING) { return }

    loggerService.welcome()
    console.log()
    console.log('Here are the commands you have at your disposal!')
    console.log()
    loggerService.commands()
    loggerService.newInput()
  },

  /**
   * Logs the welcome ASCII banner.
   *
   * @method welcome
   */
  welcome: function () {
    if (global.TESTING) { return }

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
    if (global.TESTING) { return }

    console.log('\x1b[36m%s\x1b[0m', 'PLACE X,Y,F')
    console.log('\x1b[36m%s\x1b[0m', 'MOVE')
    console.log('\x1b[36m%s\x1b[0m', 'LEFT')
    console.log('\x1b[36m%s\x1b[0m', 'RIGHT')
    console.log('\x1b[36m%s\x1b[0m', 'REPORT')
    console.log('\x1b[36m%s\x1b[0m', 'QUIT')
    console.log()
  },

  /**
   * Logs an unknown command error.
   *
   * @method unknownCommand
   */
  unknownCommand: function () {
    if (global.TESTING) { return }

    loggerService.error('I\'m sorry, That\'s not something I can do yet :(')
  },

  /**
   * Logs the not placed error message.
   *
   * @method notPlaced
   */
  notPlaced: function () {
    if (global.TESTING) { return }

    console.log('\x1b[31m%s\x1b[0m: ', 'Whoops, you haven\'t placed your robot yet! You should try this command first')
    console.log('\x1b[36m%s\x1b[0m', 'PLACE X,Y,F')
  },

  /**
   * Logs an error.
   *
   * @method error
   * @param  {String} message
   *         The error to log.
   */
  error: function (message) {
    if (global.TESTING) { return }

    console.log('\x1b[31m%s\x1b[0m: ', message)
  },

  /**
   * Logs the new input line. Indicating the user that they can start typing.
   *
   * @method newInput
   */
  newInput: function () {
    if (global.TESTING) { return }

    process.stdout.write('$ ')
  }
}

module.exports = loggerService
