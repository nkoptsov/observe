const http = require('http');
const app = require('./src/app');

// console.log(url);

http.createServer(app.hendlRequest).listen(3000);
