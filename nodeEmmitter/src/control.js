const User = require('./User');
const News = require('./News');
const EventEmitter = require('./EventEmitter');
const findElement = require('./addFunction/findElement');
const RandomNews = require('./RandomNews');

const rand = new RandomNews();
const Users = [];
const newsFlow = [];
const eventEmitter = new EventEmitter();
const user1 = new User('1', 'Vlad');
const user2 = new User('2', 'Ksenia');
const user3 = new User('3', 'Valera');
Users.push(user1);
Users.push(user2);
Users.push(user3);

const news1 = new News('1', 'cnn', eventEmitter);
const news2 = new News('2', 'bbc-sport', eventEmitter);
const news3 = new News('3', 'bbc-news', eventEmitter);
newsFlow.push(news1);
newsFlow.push(news2);
newsFlow.push(news3);
const interval = setInterval(() => {
  const obj = rand.rundom(newsFlow);
  newsFlow[obj[0]].pushNewNews(obj[1], obj[2]);
}, 5000);
setTimeout(() => {
  clearInterval(interval);
}, 120000);

class Control {
  static getUser(userId) {
    const result = findElement(Users, userId);
    if (result) {
      return {
        id: result._id,
        name: result.name,
        articles: result.articles,
      };
    }
    return false;
  }
  static getUserSubscription(userId) {
    const arr = findElement(Users, userId);
    if (arr) {
      return arr.subscription;
    }
    return false;
  }

  static getUserJSON(userId) {
    const result = findElement(Users, userId);
    if (result) {
      return {
        id: result._id,
        name: result.name,
        articles: result.articles,
      };
    }
    return false;
  }
  static getNews(newsId) {
    const result = findElement(newsFlow, newsId);
    if (result) {
      return {
        id: result._id,
        name: result.name,
        articles: result.articles,
      };
    }
    return false;
  }
  static subscription(newsId, userId) {
    const user = findElement(Users, userId);
    const news = findElement(newsFlow, newsId);
    if (user && news) {
      eventEmitter.on(news._id, user.pushArticles);
      return true;
    }
    return false;
  }
  static unsubscription(newsId, userId) {
    const user = findElement(Users, userId);
    const news = findElement(newsFlow, newsId);
    if (user && news) {
      if (eventEmitter.off(news._id, user.pushArticles)) {
        user.removeSubscription(newsId);
        return true;
      }
    }
    return false;
  }
}

Control.subscription('2', '1');
Control.subscription('3', '1');
Control.subscription('3', '2');
Control.subscription('3', '3');
Control.subscription('1', '3');

module.exports = Control;
