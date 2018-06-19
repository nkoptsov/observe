class News {
  constructor(id, title, eventEm) {
    this._id = id;
    this.title = title;
    this.articles = [];
    this._ev = eventEm;
    // this.addTitle(this._title);
  }

  pushNewNews(topic, message) {
    this.articles.push({ topic, message }); // тоже топикс

    this._ev.emit(this._id, [
      { topic, message, _id: this._id },
      { _id: this._id, title: this.title },
    ]); //  и тут
  }
}
module.exports = News;
