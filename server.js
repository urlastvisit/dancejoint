var http = require('http');
var instructionsNewVisitor = http.createServer(function(req, res){
 res.writeHead(200);
 res.end('Hi welcome to danceJoint');
});
var server=http.createServer(instructionsNewVisitor);
server.listen(8080);