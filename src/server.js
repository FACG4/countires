const http = require('http');
const handler = require('./handler');
const server = http.createServer(handler);
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`this server listens on port: ${port}`);
});
