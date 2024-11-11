const { log } = require('console');
const http = require('http'); //importing the code so as we can use it

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end("welcome to the page")
    }
    if (req.url === "/about") { //if the request is about then bring out the page
        res.end("hello there bro")
    }
    res.end( //curly braces because we are writing a html code it in
        `<h1>opps not page found</h1>
        <a href="/" >go back </a>`
    )
    // res.write("welcome to our home page")
    // console.log(req)
    // res.end() //Ends the response process, letting the server know the response is complete.
})

server.listen(5000)