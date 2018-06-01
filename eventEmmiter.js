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

class EventEmitter {
  constructor() {
    this.events = Object.create(null);
  }
  on(name, fn) {
    // const arrayEvents = Object.keys(this.events);
    // const index = arrayEvents.includes(name);
    // if(index){
    //   this.events[name] =
    // }
    if (!this.events[name]) {
      this.events[name] = [];
      this.events[name].push(fn);
    } else {
      this.events[name].push(fn);
    }
  }
  del(name, fn) {
    if (this.events[name]) {
      this.events[name] = this.events[name].filter(el => {
        if (el !== fn) {
          return true;
        }
        return false;
      });
    }
  }
  once(name, fn) {
    // add function
    // how delete function after first using
  }

  emit(name, data) {
    if (this.events[name]) {
      this.events[name].forEach(func => {
        func(data);
        func.call(null, data);
      });
    }
  }
}
const news = new News();
const user1 = new User('zasranec');
const user2 = new User('takoe');
const user3 = new User('goood');

const eventEmitter = new EventEmitter();
eventEmitter.on(user1.name, user1.openNewNews);
eventEmitter.on(user2.name, user1.openNewNews);
function c() {
  console.log(this.name);
}
eventEmitter.on(user1.name, c);

eventEmitter.emit(user1.name, news.feedNews());
eventEmitter.del(user1.name, c);
eventEmitter.emit(user1.name, news.feedNews());
