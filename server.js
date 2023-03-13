const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');

const app = express();

app.use('/users', userRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/get', (req, res) => {
  res.json({ message: 'Hi' });
});

app.listen(3000);