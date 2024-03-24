const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
  res.send('List of posts');
});

router.get('/new', (req, res) => {
  res.send('Create a new post');
});

module.exports = router;
