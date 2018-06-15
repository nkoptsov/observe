const User = require('./user');
const News = require('./news');
const EventEmitter = require('./eventEmitter');

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

class Control {
  // constructor() {}
  static getUser(userId) {
    const result = Users.find(element => {
      if (element._id === userId) {
        return true;
      }
      return false;
      // not found
    });
    return { _id: result._id, name: result.name, articles: result.articles };
  }
  static getUserSubscription(userId) {
    const arr = Users.find(element => {
      if (element._id === userId) {
        return true;
      }
      return false;
    });
    if (arr) {
      return arr.subscription;
    }
    return 'not subscribes';
  }

  getUserJN(userId) {}
  static getNews(newsId) {
    const result = newsFlow.find(element => {
      if (element._idNews === newsId) {
        return true;
      }
      return false;
      // not found
    });
    return {
      _idNews: result._idNews,
      title: result.title,
      articles: result.articles,
    };
  }
  static subscription(newsId, userId) {
    const user = Users.find(element => {
      if (element._id === userId) {
        return true;
      }
      return false;
    });
    eventEmitter.on(newsId, user.pushArticles);
  }
  static unsubscribe(newsId, userId) {
    const user = Users.find(element => {
      if (element._id === userId) {
        return true;
      }
      return false;
    });
    user.removeSubscription(newsId);
    eventEmitter.remove(newsId, user.pushArticles);
  }
}

module.exports = Control;
