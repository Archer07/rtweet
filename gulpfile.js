const gulp = require('gulp');
const browserify = require('gulp-browserify');
const plumber = require('gulp-plumber');
const concaten = require('gulp-concat');


gulp.task('browserify', function() {
  gulp.src('scr/main.js')   // starting point
    .pipe(plumber())
    .pipe(browserify({transform: reactify, debug:true}))
    .pipe(concaten('main.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['browserify']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
})
