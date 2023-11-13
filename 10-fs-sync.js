const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first +"\n"+second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result text file for first and second text file \n${first}\n${second}`,
    {flag:'a'}
);
// If there is no result-sync.txt file in the content folder then the node will create it and if there is the result-sync.txt file then the node will override all the value of the file.
// OR
// const result = `If there is no result-sync.txt file in the content folder then the node will create it and if there is the result-sync.txt file then the node will override all the value of the file. \n${first} \n${second} \nThis the result file for the fist and the second text file.`;
// writeFileSync("./content/result-sync.txt",result);