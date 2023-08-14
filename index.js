var http = require('http')

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello World! -> Green deployment.')
})

var port = 80
server.listen(port)

console.log('Server running at http://localhost:%d', port)
