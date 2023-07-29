var validator = require('validator');
const getNotes = require("./node.js");

const msg = getNotes();
console.log(msg);


console.log(validator.isURL('https:/mead.io')); //=> true