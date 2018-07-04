class User {
  constructor(id, name) {
    this._id = id;
    this.name = name;
    this.articles = [];
    this.subscription = [];
    this.pushArticles = this.pushArticles.bind(this);
    // this.openNewNews = this.openNewNews.bind(this);
  }
  pushArticles(newInformation) {
    // console.log(newArticles.topic);
    this.articles.push(newInformation[0]);
    this.addSubscription(newInformation[1]);
  }
  addSubscription(inform) {
    const flag = this.subscription.find(element => {
      if (element._idNews === inform._idNews) {
        return true;
      }
      return false;
    });
    if (!flag) {
      this.subscription.push(inform);
    }
  }
  removeSubscription(idNews) {
    this.subscription = this.subscription.filter(element => {
      if (element._idNews === idNews) {
        return false;
      }
      return true;
    });
  }
  // openNewNews(topicName, data) {

  //   console.log(this._name, topicName, data);
  // }
}

class News {
  constructor(id, title, eventEm) {
    this._idNews = id;
    this.title = title;
    this.articles = [];
    this._ev = eventEm;
    // this.addTitle(this._title);
  }
  // get title() {
  //   return this._title;
  // }
  // set title(newTitle) {
  //   this._title = newTitle;
  //   this.addTitle(this._title);
  // }
  pushNewNews(topic, message) {
    this.articles.push({ topic, message }); // тоже топикс
    // this._ev.emit(this._title, {
    //   // idNews
    //   topic,
    //   message,
    //   news_id: this._idNews,
    //   name: this._title,
    // });
    this._ev.emit(this._idNews, [
      { topic, message, _idNews: this._idNews },
      { _idNews: this._idNews, title: this.title },
    ]); //  и тут
  }
  // addTitle(title) {
  //   this._ev.addEvents(title);
  // this.title.push(title);
  // if (!this._articles[title]) {
  //   this._articles[title] = [];
  // }
  // can i do this?
  // this._ev.addEvents(title);
  // }
  // feedNews() {
  //   const numberNews = this.randomiser(this.newsArray);
  //   const numberTopic = this.randomiser(this.articles);

  //   this._ev.emit(this._topics[numberTopic], this.newsArray[numberNews]);
  // }
  // randomiser(maxLength) {
  //   const randomNumber = Math.floor(Math.random() * maxLength.length);
  //   return randomNumber;
  // }
}

class EventEmitter {
  constructor() {
    this._events = Object.create(null);
    this._subsribs = Object.create(null);
  }
  addEvents(nametitle) {
    if (!this._events[nametitle]) {
      this._events[nametitle] = [];
    }
  }

  on(name, fn) {
    if (!this._events[name]) {
      this._events[name] = [];
      // this._events[name].push(fn);
    }
    this._events[name].push(fn);
    // console.log(fn);
  }
  remove(name, fn) {
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
    } else {
      return; // if not proprety
    }
  }

  emit(name, data) {
    if (this._events[name]) {
      this._events[name].forEach(func => {
        // func(data);
        func.call(null, data);
      });
    }
  }
}

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
// const Users = [];
// const newsFlow = [];
// const eventEmitter = new EventEmitter();

// function createUser(id, name, array) {
//   const user = new User(id, name);
//   array.push(user);
// }
// function createNews(id,title,eventem,array){
//   const news = new News(id, title,eventem);
//   array.push(news);
// }

// createUser('1', 'Vlad', Users);
// createUser('2', 'Ksenia', Users);
// createUser('3', 'Valera', Users);
// createNews('1', 'cnn', eventEmitter,newsFlow)
// createNews('2', 'bbc-sport', eventEmitter,newsFlow)
// createNews('3', 'bbc-news', eventEmitter)

// const user1 = new User('1', 'Vlad');
// const user2 = new User('2', 'Ksenia');
// const user3 = new User('3', 'Valera');
// Users.push(user1);
// Users.push(user2);
// Users.push(user3);

// const news1 = new News('1', 'cnn', eventEmitter);
// const news2 = new News('2', 'bbc-sport', eventEmitter);
// const news3 = new News('3', 'bbc-news', eventEmitter);
// newsFlow.push(news1);
// newsFlow.push(news2);
// newsFlow.push(news3);
// Control.subscription('2', '1'); //idnews id_user
// Control.subscription('3', '1');
// Control.subscription('3', '2');
// Control.subscription('3', '3');
// Control.subscription('1', '3');

// news3.pushNewNews('goodDay', ' me please my coode');
// news2.pushNewNews(
//   'football',
//   'Официально: Матч Албания — Украина состоится 3 июня',
// );
// news1.pushNewNews('ggggg', 'sdffsddsd');
// news2.pushNewNews('hokey', 'Ovechkin winned stanley cup');
// Control.unsubscribe('1', '3');
// news1.pushNewNews('fuck', 'fuck');
// console.dir(Users);
// console.log(Control.getUserSubscription('1'));
// console.log(Control.getUser('1'));
// console.log(Control.getNews('1'));
// console.log(Control.getUser('3'));
// console.log(Control.getUserSubscription('3'));
module.exports = {
  User,
  News,
  Control,
  EventEmitter,
};
