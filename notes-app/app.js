const chalk = require('chalk');

const getNotes = require("./node.js");

const msg = getNotes();
console.log(msg);

const text = "Error!"
console.log(chalk.red.bold.inverse(text));
