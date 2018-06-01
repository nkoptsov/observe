// import News from './News';
// import User from '.User.js';
class User {
  constructor(name) {
    this.name = name;
    this.openNewNews = this.openNewNews.bind(this);
  }
  openNewNews(data) {
    // console.log(this);
    console.log(this.name, data);
    // const t = data => {
    //   console.log(this.name, data);
    // };
    // return t;
  }
}

class News {
  constructor() {
    this.newsArray = [
      'Зидан покинул пост главного тренера Реала',
      'Официально: Матч Албания — Украина состоится 3 июня',
      'Венгер готов продолжить карьеру тренера и ждет "новых испытаний',
      'Винни пух',
      'talk is cheap show me the code',
    ];
  }
  feedNews() {
    const numberNews = Math.floor(Math.random() * this.newsArray.length);
    return this.newsArray[numberNews];
  }
}

class Observe {
  constructor() {
    this.array = [];
  }
  add(func) {
    this.array.push(func);
  }
  delete(func) {
    this.array = this.array.filter(element => {
      if (func !== element) {
        return true;
      }
      return false;
    });
  }
  pushNews(data) {
    this.array.forEach(element => {
      element(data);
    });
  }
}
const news = new News();

const user1 = new User('zasranec');
const user2 = new User('takoe');
const user3 = new User('goood');

const obs = new Observe();
obs.add(user1.openNewNews);
obs.add(user2.openNewNews);
obs.add(user3.openNewNews);
obs.pushNews(news.feedNews());

obs.delete(user3.openNewNews);
console.log('delete one user3');
obs.pushNews(news.feedNews());
obs.delete(user1.openNewNews);
console.log('delete one user1');
obs.pushNews(news.feedNews());
