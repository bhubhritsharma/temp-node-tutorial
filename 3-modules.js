// CommonJs, every file is a module (by default)
// Modules - Encapsulated code (only share what we want)

const names = require('./4-names');
const sayHi = require('./5-utils');

const data = require('./6-alternative-flavor');
console.log(data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);