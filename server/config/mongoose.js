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
  
  const usersSchema = mongoose.Schema({
    fistName: String,
    lastName: String,
    userName: String
  });
  const User = mongoose.model('User', usersSchema);
  User.find({}).exec((err, collection) => {
      User.create({ fistName: 'Dima', lastName: 'Panasyuk', userName: 'dimas'});
      User.create({ fistName: 'Nazar', lastName: 'Shimko', userName: 'nazya'});
      User.create({ fistName: 'Anya', lastName: 'Kushik', userName: 'anya'});
  });
}