var logger = {
  intro: function () {
    logger.welcome()
    console.log()
    console.log('Please enter one of the following commands:')
    console.log()
    logger.commands()
  },
  welcome: function () {
    console.log('__          __  _                          _ ')
    console.log('\\ \\        / / | |                        | |')
    console.log(' \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___| |')
    console.log('  \\ \\/  \\/ / _ \\ |/ __/ _ \\| \'_ ` _ \\ / _ \\ |')
    console.log('   \\  /\\  /  __/ | (_| (_) | | | | | |  __/_|')
    console.log('    \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___(_)')
  },
  commands: function () {
    console.log('\x1b[36m%s\x1b[0m', 'PLACE X,Y,F')
    console.log('\x1b[36m%s\x1b[0m', 'MOVE')
    console.log('\x1b[36m%s\x1b[0m', 'LEFT')
    console.log('\x1b[36m%s\x1b[0m', 'RIGHT')
    console.log('\x1b[36m%s\x1b[0m', 'REPORT')
    console.log('\x1b[36m%s\x1b[0m', 'QUIT')
    console.log()
    process.stdout.write('$ ')
  },
  unknownCommand: function () {
    logger.error('I\'m sorry, That\'s not something I can do yet :(. How about you try one of these?')
    logger.commands()
  },
  notPlaced: function () {
    console.log('\x1b[31m%s\x1b[0m: ', 'Whoops, you haven\'t placed your robot yet! You should try this command first')
    console.log('\x1b[36m%s\x1b[0m', 'PLACE X,Y,F')
    console.log()
    process.stdout.write('$ ')
  },
  error: function (message) {
    console.log('\x1b[31m%s\x1b[0m: ', message)
    console.log()
    process.stdout.write('$ ')
  }
}

module.exports = logger
