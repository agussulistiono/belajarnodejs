var http =require('http');
var app =http.createServer(function(req,res){
    res.end("selamat datang di belajar npm");
})

app.listen(8000);
console.log("berjalan pada port 8000");