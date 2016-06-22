const express = require('express');
const bodyParser = require('body-parser');
const env = process.env.NODE_ENV || 'development';
const port = 8080;

const app = express();

app.set('views', `${__dirname}/server/views`);
app.set('view engine', 'jade');
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.render('index');
});

app.get('/partials/:partialName', (req, res) => {
  res.render(`partials/${req.params.partialName}`);
});

app.listen(port);
console.log(`Server is running on port ${port}`);