const fs = require('fs');
// const qs = require('querystring');

module.exports = {
  handleRequest(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    let readable;
    let wridable;
    // let body = '';
    // let par;
    switch (request.method) {
      case 'GET':
        readable = fs.createReadStream('./form.html');
        readable.on('data', chunk => {
          // console.log(chunk);
        });
        // console.log(a);
        readable.pipe(response);
        break;
      case 'POST':
        request.on('data', chunk => {
          // body += chunk;
          // par = JSON.stringify(body);
          // body.push(data);
          // console.log(par);
          // body = qs.parse(body);
        });

        wridable = fs.createWriteStream('./base.json', { flags: 'a' });
        request.pipe(wridable);
        request.pipe(response);
        break;
      default:
        request.statusCode = 404;
        response.write('Router not defined');
        response.end();
    }
  },
};
