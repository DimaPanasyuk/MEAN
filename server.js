const express = require('express');

const env = process.env.NODE_ENV || 'development';
const config = require('./server/config/config')[env];

const app = express();

require('./server/config/express')(app, config.rootPath);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);


app.listen(config.port);
console.log(`Server is running on port ${config.port}`);