// const Control = require('./control');
const handleUrl = require('../path-to-regexp');

function handleRequest(request, response) {
  const { url } = request;

  handleUrl(url, response);
}
module.exports = handleRequest;
