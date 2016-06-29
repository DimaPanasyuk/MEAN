const auth = require('./auth');
const mongoose = require('mongoose');
const users = require('../controllers/users');
const User  = mongoose.model('User');

module.exports = function(app) {
  
  app.get('/api/users', auth.requireApiLogin, auth.requireRole('Admin'), users.getUsers);
  app.post('/api/users', users.updateUser);
  app.post('/signup', users.createUser);
  app.post('/signin', auth.auth);
  app.post('/signout', (req, res) => {
    req.logout();
    res.send({
      status: true
    });
  });
  
  app.get('/:partialFolder/:partialName', (req, res) => {
    res.render(`../../public/app/${req.params.partialFolder}/${req.params.partialName}`);
  });

  app.get('*', (req, res) => {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
  
};
