var http = require('http')

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    // err tslint
    res.end('Hello World! -> Capstone project.')
})

var port = 80
server.listen(port)

console.log('Server running at http://localhost:%d', port)
