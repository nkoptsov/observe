// import News from './News';
// import User from '.User.js';

// class News {
//   constructor() {
//     this._url = [];
//     this._news = {};
//   }

//   get url() {
//     return this._url;
//   }

//   set url(newUrl) {
//     if (typeof newUrl === 'string') {
//       const url = new URL(newUrl);
//       this._url.push(url);
//       console.log(url.search);
//       const a = new URLSearchParams(url.search);
//       console.log(a.get('sources'));
//       this._news[url.get('sources')];
//     }
//     Error('not a string');
//   }

//   // refreshNews() {
//   //   // maybe this.url
//   //   this._url.forEach(url => {
//   //     if (this._news.)
//   //   });
//   // }

//   n(newObserve) {
//     this.feedNews(newObserve());
//   }
// }

class User {
  constructor(name) {
    this.name = name;
    this.openNewNews = this.openNewNews.bind(this);
  }

  openNewNews(data) {
    // let _this = this;
    // console.log(this);
    console.log(this.name, data);
    // _this.t = data => {
    //   console.log(this);
    //   console.log(_this.name, data);
    // };
    // return _this.t;
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
    this.onceArray = [];
  }
  add(cb) {
    this.array.push(cb);
  }
  count() {
    return this.array.length;
  }

  removeAll() {
    this.array.length = 0;
  }

  once(cb) {
    this.array.push(cb);
    this.onceArray.push(this.array.length - 1);
  }

  remove(func) {
    this.array = this.array.filter(cb => {
      if (func !== cb) {
        return true;
      }
      return false;
    });
  }

  // splice
  // remove(func) {once
  //   this.array.some((cb, index) => {
  //     if (cb === func) {
  //       this.array.splice(index, 1);
  //       return true;
  //     }
  //     return false;
  //   });
  // }

  pushNews(data) {
    this.array.forEach(element => {
      element(data);
    });
    if (this.onceArray.length) {
      this.onceArray.forEach(element => {
        this.array.splice(element, 1);
      });
      this.onceArray.length = 0;
    }
  }
}
const news = new News();
// news.url =
//   'https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=80395f2ed96940a497318480fc9fa9a4';

// news.url =
//   'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=80395f2ed96940a497318480fc9fa9a4';

const user1 = new User('zasranec');
const user2 = new User('takoe');
const user3 = new User('goood');

const obs = new Observe();
obs.add(user1.openNewNews);
obs.add(user2.openNewNews);
obs.add(user3.openNewNews);
obs.once(user3.openNewNews);
obs.pushNews(news.feedNews());
// news.n(obs);

obs.remove(user2.openNewNews);
console.log('delete one user3');
obs.pushNews(news.feedNews());
obs.remove(user1.openNewNews);
console.log('delete one user1');
obs.pushNews(news.feedNews());
