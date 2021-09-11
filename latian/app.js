var http= require('http');
var server= http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("hello saya sedang belajar <b>javascrip <b>");
    res.end();
});

server.listen(8000);
console.log("saya berjalan pada dport 8000");