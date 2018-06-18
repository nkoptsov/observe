const fs = require('fs');

function transformation(object) {
  const array = [object];
  return JSON.stringify(array);
}
function workFile() {}
function createFile(data, file = '../files/Obect.json') {
  console.log(typeof data, typeof file);
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) {
        throw reject;
      }
      console.log('hesaved');
      resolve;
    });
  });
}
function readFile(path = '../files/Obect.json', coding = 'Utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(path, coding, (err, data) => {
      if (err) return reject;
      return resolve;
    });
  });
}
module.exports = { transformation, createFile, readFile };
