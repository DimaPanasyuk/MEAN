const gulp = require('gulp');
const concat = require('gulp-concat');

const settings = {
  js: './public/app/**/*.js',
  views: './public/app/**/*.jade',
  js_src: './public',
  viewsDest: './server/views/partials'
};

gulp.task('js', () => {
  return gulp.src(settings.js)
             .pipe(concat('build.js'))
             .pipe(gulp.dest(settings.js_src));
});

gulp.task('views', () => {
  return gulp.src(settings.views)
             .pipe(gulp.dest(settings.viewsDest));
})

gulp.task('watch', ['js', 'views'], () => {
  gulp.watch(settings.js, ['js']);
  gulp.watch(settings.views, ['views'])
});

gulp.task('default', ['watch']);