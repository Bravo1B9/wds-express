const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
const req = require('express/lib/request');

const app = express();

app.use('/users', userRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = [];

class User {
  constructor(email, password) {
    this.email;
    this.password;
  }
}

app.post('/create', (req, res) => {
  let email = req.body.emaill;
  let password = req.body.password;
  let newUser = new User(email, password);
  users.push(newUser);
  res.json(users[0]);
});

app.get('/get', (req, res) => {
  res.send(users[0]);
});

app.listen(3000);