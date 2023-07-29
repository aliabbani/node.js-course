const fs = require('fs')

fs.writeFileSync("notes.txt", "my name is ali")

fs.appendFileSync("notes.txt", " i am appending");
