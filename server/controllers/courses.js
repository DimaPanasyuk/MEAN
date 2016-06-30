const Course = require('mongoose').model('Course');

exports.returnCourses = (req, res, next) => {
  Course.find({}).exec((err, courses) => {
    res.send(courses);
  });
};

exports.returnCourseInfo = (req, res, next) => {
  const courseId = req.params.id;
  Course.findOne({_id: courseId}).exec((err, course) => {
    if (err) {
      res.status(403);
      res.end();
    } else {
      res.send(course);
    }
  });
};