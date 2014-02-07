// Generated by LiveScript 1.2.0
var gulp, gulpUtil, gulpJade, gulpLivescript, gulpLivereload, tinyLr, express, path, app, server, EXPRESSPORT, LIVERELOADPORT;
gulp = require('gulp');
gulpUtil = require('gulp-util');
gulpJade = require('gulp-jade');
gulpLivescript = require('gulp-livescript');
gulpLivereload = require('gulp-livereload');
tinyLr = require('tiny-lr');
express = require('express');
path = require('path');
app = express();
server = tinyLr();
EXPRESSPORT = 3000;
LIVERELOADPORT = 35729;
gulp.task('jade', function(){
  return gulp.src('src/*.jade').pipe(gulpJade({
    pretty: true
  })).pipe(gulp.dest('.')).pipe(gulpLivereload(server));
});
gulp.task('ls', function(){
  return gulp.src('src/*.ls').pipe(gulpLivescript()).pipe(gulp.dest('.'));
});
gulp.task('express', function(){
  app.use(require('connect-livereload')());
  app.use(express['static'](path.resolve('.')));
  app.listen(EXPRESSPORT);
  return gulpUtil.log('Listening on port: ' + EXPRESSPORT);
});
gulp.task('watch', function(){
  return server.listen(LIVERELOADPORT, function(it){
    if (it) {
      return gulpUtil.log(it);
    }
    gulp.watch('src/**/*.jade', ['jade']);
    return gulp.watch('src/**/*.ls', ['ls']);
  });
});
gulp.task('default', ['jade', 'ls', 'express', 'watch']);