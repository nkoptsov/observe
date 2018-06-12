const fs = require('fs');
const qs = require('querystring');
const path = require('path');

module.exports = {
  handleRequest(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    let wridable;
    let body = '';
    // let par;
    switch (request.method) {
      case 'GET':
        fs.createReadStream(path.normalize('./form.html')).pipe(response);
        break;
      case 'POST':
        wridable = fs.createWriteStream(path.normalize('./base.json'), {
          flags: 'a',
        });

        request.on('data', chunk => {
          body += chunk;
        });

        request.on('end', () => {
          body = JSON.stringify(qs.parse(body));
          wridable.write(body);
          fs.createReadStream(path.normalize('./form.html')).pipe(response);
        });
        break;
      default:
        request.statusCode = 404;
        response.write('Router not defined');
        response.end();
    }
  },
};
