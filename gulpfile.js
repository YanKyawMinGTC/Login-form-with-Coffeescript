const gulp = require('gulp');// for gulp command

const imagemin = require('gulp-imagemin');// for minified img

const browserSync = require('browser-sync').create(); // for browser port

var coffee = require('gulp-coffee'); // coffee js declare

var stylus = require('gulp-stylus');// gulp stylus declare

var pugtohtml = require('gulp-pug'); // gulp pug declare

// testing gulp 
// gulp.task('hello', function (done) {
//   return console.log('Gulp is running....');
//   done();
// });

// pug 
gulp.task('pugtohtml', function () {
  return gulp.src('src/*.pug')
    .pipe(pugtohtml())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
});
// for img
gulp.task('image', function () {
  return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream())
});

// for coffeejs
gulp.task('coffee', function () {
  return gulp.src('src/coffee/*.coffee')
    .pipe(coffee({ bare: true }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream())
});
//stylus
gulp.task('stylus', function () {
  return gulp.src('src/stylus/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
});

gulp.task('serve', function () {
  browserSync.init({
    server: 'dist',
    port: 4000
  });
  gulp.watch('src/img/*', gulp.series('image', 'reload'));
  gulp.watch('src/stylus/style.styl', gulp.series('stylus', 'reload'));
  gulp.watch('src/coffee/*.coffee', gulp.series('coffee', 'reload'));
  gulp.watch('src/*.pug', gulp.series('pugtohtml', 'reload'));
});
//Browser Reload Function
gulp.task('reload', function (done) {
  browserSync.reload();
  done();
})
//default com
gulp.task('build', gulp.parallel('image', 'stylus', 'coffee', 'pugtohtml'));
gulp.task('default', gulp.series('build', 'serve'));
gulp.task('live-server', gulp.series('serve'));
