const crypto = require('crypto');

exports.generateToken = function generateToken() {
  return crypto.randomBytes(255).toString('base64');
}

exports.generateHashPassword = function generateHashPassword(token, password) {
  var hmac = crypto.createHmac('sha1', token);
  hmac.setEncoding('hex');
  hmac.write(password);
  hmac.end();
  return hmac.read();
}