const Control = require('./src/Control');

// /^(\/user\/\w+)$/  -> '/user/id'
// ^((\/news\/\w+)|(\/user\/\w+))$ -> '/user/id' and '/news/id'
// ^\/subscription$ ->  '/subscription'
// ^((\/export)|(\/subscription))$ - /subscription and '/export'
// ^((\/unsubscribe\/\w+)|(\/subscribe\/\w+))$

const arrayRegExp = [
  {
    reg: /^(\/news\/[^\/]+)$/g, //  /^(\/news\/\w+)$/g,
    method: Control.getNews,
  },
  {
    reg: /^(\/user\/[^\/]+)$/g,
    method: Control.getUser,
  },
  {
    reg: /^(\/user\/[^\/]+)\/subscription$/g,
    method: Control.getUserSubscription,
  },
  {
    reg: /^(\/user\/[^\/]+)\/export$/g,
    method: Control.getUserJSON,
  },
  {
    reg: /^(\/news\/[^\/]+)\/unsubscribe\/[^\/]+$/g,
    method: Control.unsubscription,
  },
  {
    reg: /^(\/news\/[^\/]+)\/subscribe\/[^\/]+$/g,
    method: Control.subscription,
  },
];
function handleUrl(str) {
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
    return trush.method(...arr);
  }
  return 'Not Found';
}
module.exports = handleUrl;
