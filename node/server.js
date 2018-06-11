const http = require('http');
const app = require('./app');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer(app.handleRequest);
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
