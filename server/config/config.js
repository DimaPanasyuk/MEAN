const path = require('path');
const rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    env: 'development',
    db: 'mongodb://localhost/mean',
    port: process.env.PORT || 3000,
    rootPath: rootPath,
  },
  production: {
    env: 'production',
    db: 'mongodb://dima:dima@ds021694.mlab.com:21694/mean',
    port: process.env.PORT || 3000,
    rootPath: rootPath,
  }
}