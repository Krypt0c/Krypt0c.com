var http = require('http');
var dt = require('./module');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currently: " + dt.myDateTime());
  res.end();
}).listen(8080);

console.log('Server Running...');
console.log('Listening on: ' + '8080' );