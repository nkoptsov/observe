const newsFlow = [1, 2, 3];
const newsSport = [
  'Зидан покинул пост главного тренера Реала',
  'Официально: Матч Албания — Украина состоится 3 июня',
  'Венгер готов продолжить карьеру тренера и ждет "новых испытаний',
  'старт чм ',
  'первый куруг чм англи по футболу Сити-Арсенал',
];
const newsTop = [
  'New York sues Trump Foundation, alleging  lawbreaking',
  'IMF: US tariffs could undermine global trade',
  'Mars Opportunity: Rover should ride out storm',
  'Antarctica loses three trillion tonnes of ice in 25 years',
  'AC/DC, Muse,Beatles',
];
const topicsBbcSport = ['football', 'hockey', 'golf'];
const topicsNews = ['culture', 'Busines', 'science'];
const topics = [topicsBbcSport, topicsNews];
const news = [newsSport, newsTop];
function rundomNews(newsFlow, arrayTopics, news) {
  const number = Math.floor(Math.random() * newsFlow.length);

  if (number === 2) {
    const topic = Math.floor(Math.random() * arrayTopics[0].length);
    const rundomMessage = Math.floor(Math.random() * news[0].length);
    return [arrayTopics[0][topic], news[0][rundomMessage]];
  }
  const topic = Math.floor(Math.random() * arrayTopics[1].length);
  const rundomMessage = Math.floor(Math.random() * news[1].length);
  return [arrayTopics[1][topic], news[1][rundomMessage]];
}
console.log(rundomNews(newsFlow, topics, news));
