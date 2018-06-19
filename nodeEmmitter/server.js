const http = require('http');
const handleRequest = require('./src/app');

http.createServer(handleRequest).listen(3000);
