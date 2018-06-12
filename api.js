const url =
  'https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=80395f2ed96940a497318480fc9fa9a4';
const req = new Request(url);
// fetch(req).then(response => {
//   console.log(JSON.parse(response));
// });
function getNews() {
  return fetch(req);
}
getNews(req)
  .then(response =>
    // console.log(response.json());
    response.json(),
  )
  .then(prom => {
    console.log(typeof prom);
  });
