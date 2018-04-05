let http = require('http');
var handler = require('./handler');
let server = http.createServer(handler);
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`this server listens on port: ${port}`);
});
