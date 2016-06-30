const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  title: { type: String, required: '{PATH} is required!'},
  featured: { type: Boolean, required: '{PATH} is required'},
  published: {type: Date, required: '{PATH} is required'},
  tags: [String],
  id: Number
});

const Course = mongoose.model('Course', courseSchema);

exports.mockCourses = () => {
  Course.find({}).exec((err, courses) => {
    if (courses.length === 0) {
      Course.create({id: 1, title: 'title1', featured: true, published: new Date('11/10/1997'), tags: ['title']});
      Course.create({id: 2, title: 'title2', featured: true, published: new Date('1/1/1999'), tags: ['title']});
      Course.create({id: 3, title: 'title3', featured: false, published: new Date('15/4/2001'), tags: ['title']});
      Course.create({id: 4, title: 'title4', featured: true, published: new Date('13/6/2011'), tags: ['title']});
      Course.create({id: 5, title: 'title5', featured: false, published: new Date('12/8/2012'), tags: ['title']});
      Course.create({id: 6, title: 'title6', featured: true, published: new Date('9/1/2016'), tags: ['title']});
    }
  });
};