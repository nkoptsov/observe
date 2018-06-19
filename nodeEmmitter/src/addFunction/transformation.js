const fs = require('fs');
const path = require('path');

function transformation(object) {
  const array = [object];
  return JSON.stringify(array);
}

function createFile(data, file = path.normalize('./obect.json')) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) {
        // console.log(err);
        throw reject;
      }
      resolve();
      // resolve;
    });
  });
}

function readFile(file = path.normalize('./obect.json'), coding = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(file, coding, (err, data) => {
      if (err) return reject;
      return resolve(data);
    });
  });
}

module.exports = { transformation, createFile, readFile };
