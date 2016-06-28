const mongoose = require('mongoose');
const encrypt = require('../utilities/encryption');


const userSchema = mongoose.Schema({
  email: {type: String, required: '{PATH} is required!', unique: true},
  password: {type: String, required: '{PATH} is required!'},
  token: {type: String, required: '{PATH} is required!'},
  roles: [String]
});

userSchema.methods = {
  authenticate: function(passwordToCheck) {
    return encrypt.generateHashPassword(this.token, passwordToCheck) === this.password;
  }
};

const User = mongoose.model('User', userSchema);
function createDefaultUsers() {
  User.find({}).exec((err, collection) => {
    if (err) {
      console.log('Error while finding users')
    } else {
      if (collection.length === 0) {
        var token, password;
        token = encrypt.generateToken();
        password = encrypt.generateHashPassword(token, '123');
        User.create({email: 'dima@ukr.net', password: password, token: token, roles: ['Admin']});
        token = encrypt.generateToken();
        password = encrypt.generateHashPassword(token, '321');
        User.create({email: 'user1@ukr.net', password: password, token: token, roles: []});
        token = encrypt.generateToken();
        password = encrypt.generateHashPassword(token, '123');
        User.create({email: 'user2@ukr.net', password: password, token: token, roles: []});
      }
    }
  });
}

exports.createDefaultUsers = createDefaultUsers;