const { Console } = require("console");
const fs = require("fs");
const book = {
  title: "ego is the enemy",
  author: "Ryan Holiday",
};

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON)
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// console.log(dataJSON)

// const data = JSON.parse(dataJSON);
// console.log(data.title)

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData)



// challenge

// load and parse given json data
// change the name and age property using your info
// stringify the changed object and overwrite the original data
// test your work by viewing data in the JSON file

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
// console.log(dataJSON);
const data = JSON.parse(dataJSON);

data.name = "Ali";
data.age = 31;
// console.log(data);
const stringData = JSON.stringify(data)
console.log(stringData)
fs.writeFileSync('1-json.json', stringData);