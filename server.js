var http = require('http');
var url =require('url');

var server = http.createServer(function(req,res){
    var page =url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200,{"content-type":"text/plan"});
    res.write('Hello welcome to dancejoint ');
    res.write('We are under maintainance ');
    res.write("We'll be live soon" );
    res.end();
});
server.listen(4200);
