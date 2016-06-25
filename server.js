const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require('./server/config/config')[env];

const app = express();

const LocalStrategy = require('passport-local').Strategy;

require('./server/config/express')(app, config.rootPath);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);

const User = mongoose.model('User');
passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({userName: username}).exec((err, user) => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }
));

passport.serializeUser((user, done) => {
  if (user) {
    done(null, user._id);
  }
});

passport.deserializeUser((id, done) => {
  User.findOne({_id: id}).exec((err, user) => {
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

app.listen(config.port);
console.log(`Server is running on port ${config.port}`);