const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = function(app, path) {
  app.set('views', `${path}/server/views`);
  app.set('view engine', 'jade');
  app.use(express.static(`${path}/public`));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(session({secret: 'mean stack', resave: false, saveUnitialized: false}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(bodyParser.json());
}