const User = require('mongoose').model('User');
const encrypt = require('../utilities/encryption');

exports.getUsers = (req, res) => {
  User.find({}).exec((err, users) => {
    res.send({ users: users });
  });
};

exports.createUser = (req, res, next) => {
  const userData = req.body;
  userData.email = userData.email.toLowerCase();
  userData.token = encrypt.generateToken();
  userData.password = encrypt.generateHashPassword(userData.token, userData.password);
  User.create(userData, (err, user) => {
    if (err) {
      if (err.toString().indexOf('E11000') > -1) {
        err = 'User exists';
      }
      res.status(400);
      return res.send({ reason: err.toString() });
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      res.send({user: user});
    });
  });
};