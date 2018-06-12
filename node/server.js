const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const app = require('./app');

const host = '127.0.0.1';
const port = 3000;
// let time1 = new Date();
// const server = http.createServer((request, response) => {
//   if (request.method === 'GET') {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/html');
//     const readable = fs.createReadStream('./form.html');
//     // c.on('open',()=)
//     // const b = [];

//     readable.on('data', chunk => {
//       // b.push(chunk);
//       let time2 = new Date();
//       console.log(time2 - time1);
//     });
//     readable.pipe(response);

//     // c.on('end', () => {
//     //   console.log(b);
//     //   // response.write(b[0]);
//     //   response.end();
//     // });

//     // console.log(c);
//     // c.pipe(response.write);

//     // fs.readFile('./form.html', 'utf8', (err, data) => {
//     //   response.write(data);
//     //   response.end();
//     // });
//   } else {
//     let body = '';

//     request.on('data', data => {
//       body += data;
//       body = qs.parse(body);
//     });
//     const write = fs.createWriteStream('./base.txt', { flags: 'a' });
//     //   // console.log(data._readableState.buffer);
//     //   request.on('end', () => {
//     //     let post = qs.parse(body);
//     //     // use post['blah'], etc.
//     //     console.log(typeof post);
//     //     post = JSON.stringify(post);
//     //     fs.writeFile('./base.txt', post, err => {
//     //       console.log(err);
//     //     });
//     //   });
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'application/json');
//     request.pipe(write);
//     request.pipe(response);
//   }
// });
const server = http.createServer(app.handleRequest);
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
