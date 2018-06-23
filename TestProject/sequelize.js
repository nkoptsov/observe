const Sequelize = require('sequelize');
const path = require('path');
const express = require('express');

const app = express();
// const Op = Sequelize.Op;
// const sequelize = new Sequelize('postgres://localhost:5432/nikita');

const sequelize = new Sequelize('nikita', 'nikita', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    const User = sequelize.define('user', {
      firstName: {
        type: Sequelize.STRING,
      },
    });
    User.sync().then(() => {
      User.create({ firstName: 'John' });
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// User.sync({ force: true }).then(() => {
//   return User.create;
// });

// User.findAll().then(users => {
//   console.log(users);
// });
app.listen(3000, () => {
  console.log('start server');
});
