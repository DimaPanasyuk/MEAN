const auth = require('./auth');

module.exports = function(app) {
  app.get('/:partialFolder/:partialName', (req, res) => {
    res.render(`../../public/app/${req.params.partialFolder}/${req.params.partialName}`);
  });

  app.post('/signin', auth);

  app.post('/signout', (req, res) => {
    req.logout();
    res.send({
      status: true
    });
  });

  app.get('*', (req, res) => {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
};
