var fs = require('fs');

var port = process.env.PORT || 3000;
var ip = process.env.IP || '127.0.0.1';
console.log(port, ip);

var http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text.plain'});
  if (req.url == '/file.txt') {
    fs.createReadStream(__dirname + '/file.txt').pipe(res);
  } else {
    res.end('Hello World');
  }
}).listen(port, ip);
console.log('Server running!');
