const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function() {
  const User = mongoose.model('User');

  passport.use(new LocalStrategy((email, password, done) => {
    User.findOne({email: email}).exec((err, user) => {
      if (user && user.authenticate(password)) { 
        return done(null, user);
      }
      if (!user || (user && !user.authenticate(password))) {
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
}