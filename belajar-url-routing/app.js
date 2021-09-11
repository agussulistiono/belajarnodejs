var http = require('http');
var app = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);
    res.end()
});

app.listen(8000);
console.log('berjalan pada port 8000');