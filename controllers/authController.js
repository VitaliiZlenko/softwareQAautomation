const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.redirect('/register');
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

router.get('/profile', (req, res) => {
  res.render('profile', { user: req.user });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

