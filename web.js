var sys=require("sys"), fs = require('fs');

var infileBuf = fs.readFile("index.html")

var infileBufLen = infileBuf.length

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('lalala');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
