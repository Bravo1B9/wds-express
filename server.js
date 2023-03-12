const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

let users = [];

app.post('/create', (req, res) => {
  let newUser = { email, password };
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  users.push(newUser);
});

app.get('/get', (req, res) => {
  res.send(users[0]);
});

app.listen(3000)