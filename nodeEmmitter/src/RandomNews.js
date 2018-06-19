class RandomNews {
  constructor() {
    this.news = [
      [
        'Зидан покинул пост главного тренера Реала',
        'Официально: Матч Албания — Украина состоится 3 июня',
        'Венгер готов продолжить карьеру тренера и ждет "новых испытаний',
        'старт чм ',
        'первый куруг чм англи по футболу Сити-Арсенал',
      ],
      [
        'New York sues Trump Foundation, alleging  lawbreaking',
        'IMF: US tariffs could undermine global trade',
        'Mars Opportunity: Rover should ride out storm',
        'Antarctica loses three trillion tonnes of ice in 25 years',
        'AC/DC, Muse,Beatles',
      ],
    ];
    this.topics = [
      ['football', 'hockey', 'golf'],
      ['culture', 'Busines', 'science'],
    ];
  }
  rundom(newsFlow) {
    const number = Math.floor(Math.random() * newsFlow.length);

    if (number === 2) {
      const topic = Math.floor(Math.random() * this.topics[0].length);
      const rundomMessage = Math.floor(Math.random() * this.news[0].length);
      return [number, this.topics[0][topic], this.news[0][rundomMessage]];
    }
    const topic = Math.floor(Math.random() * this.topics[1].length);
    const rundomMessage = Math.floor(Math.random() * this.news[1].length);
    return [number, this.topics[1][topic], this.news[1][rundomMessage]];
  }
}

module.exports = RandomNews;
