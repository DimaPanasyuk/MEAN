const mongoose = require('mongoose');
const crypto = require('crypto');

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
    password: String,
    token: String,
    roles: [String]
  });
  
  userSchema.methods = {
    authenticate: function(passwordToCheck) {
      return generateHashPassword(this.token, passwordToCheck) === this.password;
    }
  }
  
  const User = mongoose.model('User', userSchema);
  User.find({}).exec((err, collection) => {
    if (err) {
      console.log('Error while finding users')
    } else {
      if (collection.length === 0) {
        var token, password;
        token = generateToken();
        password = generateHashPassword(token, '123');
        User.create({email: 'dima@ukr.net', password: password, token: token, roles: ['Admin']});
        token = generateToken();
        password = generateHashPassword(token, '321');
        User.create({email: 'user1@ukr.net', password: password, token: token, roles: []});
        token = generateToken();
        password = generateHashPassword(token, '123');
        User.create({email: 'user2@ukr.net', password: password, token: token, roles: []});
      }
    }
  });
  
  function generateToken() {
    return crypto.randomBytes(255).toString('base64');
  }
  
  function generateHashPassword(token, password) {
    var hmac = crypto.createHmac('sha1', token);
    hmac.setEncoding('hex');
    hmac.write(password);
    hmac.end();
    return hmac.read();
  }
}