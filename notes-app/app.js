const chalk = require('chalk');
const getNotes = require("./node.js");

const command = process.argv[2];

console.log(process.argv)


if(command === "add"){
    console.log("add note")
} else if(command === "remove") {
    console.log("remove note")
}
