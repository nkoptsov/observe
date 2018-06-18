const User = require('./User');
const News = require('./News');
const EventEmitter = require('./EventEmitter');
const {
  transformation,
  createFile,
  readFile,
} = require('./addFunction/transformation');
const findElement = require('./addFunction/findElement');

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

news3.pushNewNews('goodDay', ' me please my coode');
news2.pushNewNews(
  'football',
  'Официально: Матч Албания — Украина состоится 3 июня',
);
news1.pushNewNews('ggggg', 'sdffsddsd');
news2.pushNewNews('hokey', 'Ovechkin winned stanley cup');
news1.pushNewNews('fuck', 'fuck');

class Control {
  // constructor() {
  //   this.getUser = this.getUser.bind(this);
  //   this.getUserSubscription = this.getUserSubscription.bind(this);
  //   this.getUserJSON = this.getUserJSON.bind(this);
  //   this.unsubscribe = this.unsubscribe.bind(this);
  //   this.subscribe = this.subscribe.bind(this);
  // }
  //   static find(arraySearch, elementSearch) {
  //   const result = arraySearch.find(element => {
  //     if (element._id === userId) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   return result;
  // }
  static getUser(userId) {
    const result = findElement(Users, userId);
    return transformation({
      id: result._id,
      name: result.name,
      articles: result.articles,
    });
  }
  static getUserSubscription(userId) {
    const arr = findElement(Users, userId);
    if (arr) {
      return transformation(arr.subscription);
    }
    return 'not subscribes';
  }

  static getUserJSON(userId) {
    let result = findElement(Users, userId);
    result = transformation({
      id: result._id,
      name: result.name,
      articles: result.articles,
    });
    return createFile(result)
      .then(data => {
        console.log(data);
        return readFile();
      })
      .then(res => {
        console.log(res);
      });
  }
  static getNews(newsId) {
    const result = findElement(newsFlow, newsId);
    return transformation({
      idNews: result._idNews,
      title: result.title,
      articles: result.articles,
    });
  }
  static subscription(newsId, userId) {
    const user = findElement(Users, userId);
    eventEmitter.on(newsId, user.pushArticles);
    // return ?
  }
  static unsubscribe(newsId, userId) {
    const user = findElement(Users, userId);
    user.removeSubscription(newsId);
    eventEmitter.remove(newsId, user.pushArticles);
    // return ?
  }
}
Control.subscription('2', '1'); //idnews id_user
Control.subscription('3', '1');
Control.subscription('3', '2');
Control.subscription('3', '3');
Control.subscription('1', '3');
module.exports = Control;
