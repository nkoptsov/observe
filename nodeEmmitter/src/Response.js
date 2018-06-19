const {
  transformation,
  createFile,
  readFile,
} = require('./addFunction/transformation');

class Response {
  static sendJSON(ans, respObj) {
    const obj = transformation(respObj);
    ans.writeHeader(200, { 'Content-Type': 'application/json' });
    ans.end(obj);
  }

  static sendOk(ans) {
    ans.writeHeader(200);
    ans.end('ok');
  }

  static sendBad(ans) {
    ans.writeHeader(404, { 'Content-type': 'text/plain' });
    ans.end('404');
  }

  static sendFile(ans, respObj) {
    const obj = transformation(respObj);

    createFile(obj)
      .then(() => readFile())
      .then(
        value => {
          const date = new Date();
          ans.writeHeader(200, {
            'Content-Disposition': `attachment; filename= User:${
              respObj.id
            }_time:(${date.toLocaleTimeString()}).json`, // Data
          });
          ans.end(value);
        },
        err => {
          console.log(err);
          ans.end('404');
        },
      );
  }
}
module.exports = Response;
