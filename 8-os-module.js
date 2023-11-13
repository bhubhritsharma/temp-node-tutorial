const os = require('os');  // built-in module

//info about current user
const user = os.userInfo();
console.log(user)

//method to return the uptime of the system is seconds
console.log(`The uptime of this system is ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);