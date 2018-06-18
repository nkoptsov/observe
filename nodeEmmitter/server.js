const http = require('http');
const handleRequest = require('./src/app');

// console.log(url);

http.createServer(handleRequest).listen(3000);
