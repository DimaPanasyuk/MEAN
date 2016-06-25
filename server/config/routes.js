const auth = require('./auth');

module.exports = function(app) {
  app.get('/:partialFolder/:partialName', (req, res) => {
    res.render(`../../public/app/${req.params.partialFolder}/${req.params.partialName}`);
  });

  app.post('/signin', auth);

  app.get('*', (req, res) => {
    res.render('index');
  });
}