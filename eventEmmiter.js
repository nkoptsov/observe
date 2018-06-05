class User {
  constructor(name) {
    this._name = name;
    this.openNewNews = this.openNewNews.bind(this);
  }
  openNewNews(topicName, data) {
    console.log(this._name, topicName, data);
  }
}

class News {
  constructor(eventEm) {
    this.newsArray = [
      'Зидан покинул пост главного тренера Реала',
      'Официально: Матч Албания — Украина состоится 3 июня',
      'Венгер готов продолжить карьеру тренера и ждет "новых испытаний',
      'Винни пух',
      'talk is cheap show me the code',
    ];
    this._topics = ['it', 'sport', 'garden'];
    this._ev = eventEm;
  }
  feedNews() {
    const numberNews = this.randomiser(this.newsArray);
    const numberTopic = this.randomiser(this._topics);
    this._ev.emit(this._topics[numberTopic], this.newsArray[numberNews]);
  }
  randomiser(maxLength) {
    const randomNumber = Math.floor(Math.random() * maxLength.length);
    return randomNumber;
  }
}

class EventEmitter {
  constructor() {
    this._events = Object.create(null);
  }
  on(name, fn) {
    if (!this._events[name]) {
      this._events[name] = [];
      this._events[name].push(fn);
    } else {
      this._events[name].push(fn);
    }
  }
  del(name, fn) {
    if (this._events[name]) {
      this._events[name] = this._events[name].filter(el => {
        if (el !== fn) {
          return true;
        }
        return false;
      });

      if (!this._events[name].length) {
        delete this._events[name];
      }
    }
  }
  // once(name, fn) {
  // -- add function
  // -- how delete function after first using
  // }

  emit(name, data) {
    if (this._events[name]) {
      this._events[name].forEach(func => {
        // func(data);
        func.call(null, name, data);
      });
    }
  }
}

const user1 = new User('zasranec');
const user2 = new User('takoe');
const user3 = new User('goood');

const eventEmitter = new EventEmitter();
eventEmitter.on('sport', user1.openNewNews);
eventEmitter.on('it', user1.openNewNews);
eventEmitter.on('it', user2.openNewNews);
eventEmitter.on('it', user3.openNewNews);
eventEmitter.on('garden', user3.openNewNews);
eventEmitter.on('garden', user1.openNewNews);
const news = new News(eventEmitter);
// const news2 = new News('sport', eventEmitter);
news.feedNews();
news.feedNews();

eventEmitter.del('sport', user1.openNewNews);
eventEmitter.del('garden', user1.openNewNews);
news.feedNews();
