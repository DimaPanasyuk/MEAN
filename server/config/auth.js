const passport = require('passport');

exports.auth = (req, res, next) => {
  const auth = passport.authenticate('local', (err, user) => {
    if (err) next(err);
    if (!user) {
      res.send({status: false});
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      res.send({
        status: true,
        user: {
          email: user.email,
          id: user._id,
          roles: user.roles
        }
      });
    });
  });
  auth(req, res, next);
};

exports.requireApiLogin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(403);
    res.end();
  } else{
    next();
  }
};

exports.requireRole = (role) => {
  return function(req, res, next) {
    if (!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
      res.status(403);
      res.end();
    } else {
      next();
    }
  };
}; 
