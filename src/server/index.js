const fs = require('fs');
const util = require('util');

const path = require('path');

const filePath = path.join(__dirname, 'db.json');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile(filePath, 'utf8').then(file => console.log(file));