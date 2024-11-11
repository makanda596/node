const { log } = require('console');
const http = require('http'); //importing the code so as we can use it

const server = http.createServer((req, res) => {

    res.write("welcome to our home page")
    console.log(req)
    res.end() //Ends the response process, letting the server know the response is complete.
})

server.listen(5000)