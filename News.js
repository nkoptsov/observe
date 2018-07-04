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
    const numberNews = Math.random() * (1 - 5) + this.newsArray.length - 1;
    return this.newsArray[numberNews];
  }
}
export default News;
