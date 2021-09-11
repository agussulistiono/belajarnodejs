var http = require('http');
var moment = require('moment');
var salam = require("./salam");
var server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(salam.salamPagi()+" saya belajar moment js module <br> sekarang tanggal"+moment().format('D MMMM YYYY, h:mm:ss a'));
    res.end();
})


//menggunakan module momentjs
server.listen(8000);
console.log('Berjalan pada port :8000');