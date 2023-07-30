const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require("./node.js");

// create an add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function () {
        console.log('Adding a new note')
    }
})

// create a remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function () {
        console.log('Removing a new note')
    }
})

// create a list command
yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler: function () {
        console.log('Listing a new note')
    }
})

// create a read command
yargs.command({
    command: 'read',
    describe: 'read a new note',
    handler: function () {
        console.log('Reading a new note')
    }
})

console.log(yargs.argv);