const passport = require('passport');

module.exports = (req, res, next) => {
    const auth = passport.authenticate('local', (err, user) => {
      if (err) next(err);
      if (!user) {
        res.send({status: false});
      }
      req.logIn(user, (err) => {
        if (err) return next(err);
        res.send({
          status: true,
          user: user
        });
      });
    });
    auth(req, res, next);
}