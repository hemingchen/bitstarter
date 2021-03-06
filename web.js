var sys=require('sys'), fs = require('fs');

var infileBuf = fs.readFileSync('index.html','utf8');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(infileBuf);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
