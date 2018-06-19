class User {
  constructor(id, name) {
    this._id = id;
    this.name = name;
    this.articles = [];
    this.subscription = [];
    this.pushArticles = this.pushArticles.bind(this);
  }
  pushArticles(newInformation) {
    this.articles.push(newInformation[0]);
    this.addSubscription(newInformation[1]);
  }
  addSubscription(inform) {
    const flag = this.subscription.find(element => {
      if (element._id === inform._id) {
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
      if (element._id === idNews) {
        return false;
      }
      return true;
    });
  }
}
module.exports = User;
