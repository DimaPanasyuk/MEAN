const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

module.exports = function(app, rootPath) {
  app.set('views', `${rootPath}/server/views`);
  app.set('view engine', 'jade');
  app.use(express.static(`${rootPath}/public`));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(session({secret: 'mean', resave: false, saveUnitialized: false}));
  app.use(passport.initialize()); 
  app.use(passport.session());
};

