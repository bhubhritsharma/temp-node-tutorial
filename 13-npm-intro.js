// npm - global command - comes with node
// npm --version

// local dependency - if we want to use it in this particular project only
// npm i <packageName>

// global dependency - If we want to use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important information about project/package)
// manual approach - (create package.json in the root, create properties etc.)
// npm init (step by step - press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello people !!")

// npm i nodemon -D (dev dependencies)

// npm start - this will run the command node app.js(which has been defined as "start" in scripts in package.json folder)
// npm run dev - this will run the command nodemon app.js(which has been defined as "dev" in scripts in package.json folder) - This will restart the npm everytime we make changes to any file in the repository. This saves us from running "npm start" everytime we make changes to any file.
// npm uninstall <packageName> (This removes the dependencies from node_modules folder)
// There is also a nuclear approach for removing dependencies form the node_modules folder. Remove the dependency from the package.json file and then run "npm install" in the terminal.