// Os modules 

const os = require('os')

// info about current User
const user = os.userInfo()
console.log(user);

// method returns the sys uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);