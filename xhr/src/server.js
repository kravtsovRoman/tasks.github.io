var http = require('http');
var static = require('node-static');

const file = new static.Server('.');



const accept = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache'
    });

    res.end('Ok');
}

http.createServer(accept).listen(8080);