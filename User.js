class User {
  constructor(name) {
    this.name = name;
  }
  openNewNews(data) {
    console.log(this.name, data);
  }
}
export default User;
