require! {
  gulp
  'gulp-util'
  'gulp-jade'
  'gulp-livescript'
  'gulp-concat'
  'gulp-uglify'
  'gulp-livereload'
  'tiny-lr'
  express
  path
}

app         = express!
server      = tiny-lr!
EXPRESSPORT = 3000
LIVERELOADPORT = 35729

gulp.task \jade, ->
  gulp.src 'src/*.jade'
    .pipe gulp-jade pretty: true
    .pipe gulp.dest '.'
    .pipe gulp-livereload server

gulp.task \ls, ->
  gulp.src 'src/*.ls'
  .pipe gulp-livescript!
  .pipe gulp.dest '.'

gulp.task \build, ->
  gulp.src [
    'lib/laweasyread.debug.js'
    'laweasyread.js'
  ]
  .pipe gulp-concat 'angular-laweasyread.js'
  .pipe gulp-uglify!
  .pipe gulp.dest '.'

gulp.task \express, ->
  app.use require('connect-livereload')!
  app.use  express.static path.resolve '.'
  app.listen EXPRESSPORT
  gulp-util.log 'Listening on port: ' + EXPRESSPORT

gulp.task \watch, ->
  server.listen LIVERELOADPORT, ->
    return gulp-util.log it if it
    gulp.watch 'src/*.jade', <[jade]>
    gulp.watch 'src/*.ls', <[ls]>

gulp.task \default, <[jade ls build express watch]>

