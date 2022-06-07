const fs = require('fs').promises;

function read() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((file) => JSON.parse(file));
}

function write(newFile) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newFile))
}

module.exports = { read, write }