let http = require('http');
var handler = require('./handler');
let server = http.createServer(handler);
const port = 4000;

server.listen(port, function(){
  console.log(port);
});
