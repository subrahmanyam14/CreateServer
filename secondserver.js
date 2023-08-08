var http=require('http');
var imp=require('./secondmodule');
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(imp.message());
      res.write("hello ");
      res.end();
}).listen(8080);
console.log(imp.message());