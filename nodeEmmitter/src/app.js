const Control = require('./control');

module.exports = {
  hendlRequest(request, response) {
    let { url } = request;
    url = url.toLowerCase();
    const array = url.split('/');
    switch (array[1]) {
      case 'user':
        if (array.length > 4) {
          response.statusCode = 404;
          response.setHeader('Content-Type', 'text/html');
          response.write('check url');
          response.end();
          break;
        }
        if (array.indexOf('subscription')) {
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/html');
          Control.getUserSubscription(array[2]);
          response.end();
          break;
        } else if (array.indexOf('export')) {
          ///
        } else {
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/html');
          Control.getUser(array[2]);
          response.end();
          break;
        }
        break;
      case 'news':
        if (array.length > 5) {
          response.statusCode = 404;
          response.setHeader('Content-Type', 'text/html');
          response.write('check url');
          response.end();
          break;
        }
        if (array.indexOf('subscribe')) {
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/html');
          Control.subscription(array[2], array[4]);
          response.end();
          break;
        } else if (array.indexOf('unsubscribe')) {
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/html');
          Control.unsubscribe(array[2], array[4]);
          response.end();
          break;
        } else {
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/html');
          Control.getNews(array[2]);
          response.end();
          break;
        }
      default:
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('check url');
        response.end();
        break;
    }
  },
};
