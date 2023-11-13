const path = require('path');  // built-in module

console.log(path.sep) // tells about the file path seperator(/)

const filePath = path.join('/content/','subfolder','test.txt');
console.log(filePath);

const base = path.basename(filePath); // returns the last portion of the path
console.log(base);

const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolutePath);