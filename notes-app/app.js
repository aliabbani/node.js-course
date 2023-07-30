const chalk = require('chalk');

const getNotes = require("./node.js");

const msg = getNotes();
console.log(msg);

const text = "Success!"
console.log(chalk.green.bold.inverse(text));
