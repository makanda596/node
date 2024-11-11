const os = require('os') //we are importing the os module

//info about current user
// const user = os.userInfo()
console.log(os.userInfo()) //when making your lines too easy


//method returns the sustem uptime in seconds
console.log(`your machine is ${os.uptime()} seconds`)

const current = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(current)