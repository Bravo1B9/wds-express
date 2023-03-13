const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ users: 'All users' });
});

router.get('/new', (req, res) => {
  res.json({ users: 'New user form' });
});

module.exports = router;