var http = require('http');
var url =require('url');

var server = http.createServer(function(req,res){
    var page =url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200,{"content-type":"text/plan"});
    res.write('well Hello');
    res.end();
});
server.listen(8080);