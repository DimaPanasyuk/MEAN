const mongoose = require('mongoose');

module.exports = function(config) {
  mongoose.connect(config.db);
  const db = mongoose.connection;
  db.on('error', (err) => {
    console.log('connection error!');
  });
  db.once('open', () => {
    console.log('database is open!');
  });
  
  const userSchema = mongoose.Schema({
    email: String,
    password: String
  });
  const User = mongoose.model('User', userSchema);
  User.find({}).exec((err, collection) => {
    if (err) {
      console.log('Error while finding users')
    } else {
      if (collection.length === 0) {
        User.create({email: 'dima@ukr.net', password: '123'});
        User.create({email: 'user1@ukr.net', password: '321'});
        User.create({email: 'user2@ukr.net', password: '333'});
      }
    }
  })
}