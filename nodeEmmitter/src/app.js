// const Control = require('./control');
const handleUrl = require('../path-to-regexp');
function handleRequest(request, response) {
  let { url } = request;
  const handle = handleUrl(url, response);
  if (handle === 'Not Found') {
    response.setHeader('Content-Type', 'application/json');
  } else {
    server(handle, response);
  }

  // response.setHeader('Content-Disposition', 'attachment; filename=Obect.json');
  // console.log(typeof handle);
  // // response.setHeader('Content-Type', 'application/json');
  // response.write(handle);
  // response.end();
}
module.exports = handleRequest;
function server(hand, response) {
  console.log(hand);
  console.log(response);
  response.end();
}
