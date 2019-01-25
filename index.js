var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("It's so cold in Minnesota in January! You betcha!!!");

});

var port = process.env.PORT || 8085;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
