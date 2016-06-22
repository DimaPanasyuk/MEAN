const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const app = express();

app.set('views', `${__dirname}/server/views`);
app.set('view engine', 'jade');
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if (env === 'development') {
  mongoose.connect('mongodb://localhost/mean');
} else {
  mongoose.connect('mongodb://dima:dima@ds021694.mlab.com:21694/mean');
}
 
const db = mongoose.connection;
db.on('error', (err) => {
  console.log('connection error!');
});
db.once('open', () => {
  console.log('database is open!');
});

const messageSchema = mongoose.Schema({
  message: String
});
const Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec((err, messageDoc) => {
  mongoMessage = messageDoc.message;
})

app.get('/partials/:partialName', (req, res) => {
  res.render(`partials/${req.params.partialName}`);
});

app.get('*', (req, res) => {
  res.render('index', {
    mongoMessage: mongoMessage
  });
});


app.listen(port);
console.log(`Server is running on port ${port}`);