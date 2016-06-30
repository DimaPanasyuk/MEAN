const mongoose = require('mongoose');
const userModel = require('../models/User');
const coursesModel = require('../models/Course');

module.exports = function(config) {
  mongoose.connect(config.db);
  const db = mongoose.connection;
  db.on('error', (err) => {
    console.log('connection error!');
  });
  db.once('open', () => {
    console.log('database is open!');
  });
  userModel.createDefaultUsers();
  coursesModel.mockCourses();
};