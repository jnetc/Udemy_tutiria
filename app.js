const validator = require('validator').default
const getnotes = require('./notes')
const chalk = require('chalk')

console.log(validator.isURL('https://mead.io'));
console.log(chalk.black.bgGreen(' Success! '));

