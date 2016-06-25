const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const env = process.env.NODE_ENV || 'development';
const config = require('./server/config/config')[env];

const app = express();

require('./server/config/express')(app, config.rootPath);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);

const User = mongoose.model('User');
passport.use(new LocalStrategy((email, password, done) => {
  User.findOne({email: email}).exec((err, user) => {
    if (user && user.authenticate(password)) { 
      return done(null, user);
    }
    if (!user) {
      return done(null, false);
    }
  });
}));
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