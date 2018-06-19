const Control = require('./src/Control');
const Response = require('./src/Response');

const arrayRegExp = [
  {
    reg: /^(\/news\/[^\/]+)$/g, //  /^(\/news\/\w+)$/g,
    method: Control.getNews,
    response: Response.sendJSON,
  },
  {
    reg: /^(\/user\/[^\/]+)$/g,
    method: Control.getUser,
    response: Response.sendJSON,
  },
  {
    reg: /^(\/user\/[^\/]+)\/subscription$/g,
    method: Control.getUserSubscription,
    response: Response.sendJSON,
  },
  {
    reg: /^(\/user\/[^\/]+)\/export$/g,
    method: Control.getUserJSON,
    response: Response.sendFile,
  },
  {
    reg: /^(\/news\/[^\/]+)\/unsubscribe\/[^\/]+$/g,
    method: Control.unsubscription,
    response: Response.sendOk,
  },
  {
    reg: /^(\/news\/[^\/]+)\/subscribe\/[^\/]+$/g,
    method: Control.subscription,
    response: Response.sendOk,
  },
];
function handleUrl(str, ans) {
  const trush = arrayRegExp.find(elem => {
    if (str.match(elem.reg)) {
      return true;
    }
    return false;
  });
  if (trush) {
    let arr = str.split('/');
    arr = arr.filter((elem, index) => {
      if (index !== 0 && index % 2 === 0) {
        return true;
      }
      return false;
    });
    const objResp = trush.method(...arr);
    if (objResp) {
      trush.response(ans, objResp);
    } else {
      return Response.sendBad(ans);
    }
  } else {
    return Response.sendBad(ans);
  }
}
module.exports = handleUrl;
