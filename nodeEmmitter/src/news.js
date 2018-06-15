class News {
  constructor(id, title, eventEm) {
    this._idNews = id;
    this.title = title;
    this.articles = [];
    this._ev = eventEm;
    // this.addTitle(this._title);
  }

  pushNewNews(topic, message) {
    this.articles.push({ topic, message }); // тоже топикс

    this._ev.emit(this._idNews, [
      { topic, message, _idNews: this._idNews },
      { _idNews: this._idNews, title: this.title },
    ]); //  и тут
  }
}
module.exports = News;
