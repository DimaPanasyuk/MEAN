var gulp = require('gulp');
var concat = require('gulp-concat');

var settings = {
  js: './public/app/**/*.js',
  js_src: './public'
};

gulp.task('js', function() {
  return gulp.src(settings.js)
             .pipe(concat('build.js'))
             .pipe(gulp.dest(settings.js_src));
});

gulp.task('watchJs', ['js'], function() {
  gulp.watch(settings.js, ['js']);
});

gulp.task('default', ['watchJs']);