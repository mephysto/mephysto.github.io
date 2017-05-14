'use strict';

const gulp = require('gulp'), 
  gulpUtil = require('gulp-util'), 
  babel = require("gulp-babel"), 
  sass = require('gulp-sass'), 
  uglify = require('gulp-uglify'), 
  autoprefixer = require('gulp-autoprefixer'), 
  sourcemaps = require('gulp-sourcemaps'), 
  rename = require('gulp-rename'), 
  pug = require('gulp-pug'),
  inlinesource = require('gulp-inline-source'),
  imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
  gulp.src('scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions', 'IE <= 10'], cascade: true }))
    .pipe(rename("global.min.css"))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'));
});

gulp.task('compress', function() {
  return gulp.src('js/main.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify().on('error', gulpUtil.log))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js'));
});

gulp.task('pug', function buildHTML() {
  return gulp.src('pug/**/[^_]*.pug')
  .pipe(pug({
    pretty: true
    // Your options in here. 
  }).on('error', gulpUtil.log))
  .pipe(gulp.dest('./'));
});

gulp.task('images', function(){
  gulp.src('img/*.svg')
    .pipe(gulp.dest('img/build'));
  return gulp.src(['img/*.{jpg,png,gif,jpeg}'])
    .pipe(imagemin())
    .pipe(gulp.dest('img/build'));
});

// needs adjustments
gulp.task('move', function(){
  return;
});

// watch js and scss folder for changes. run respective tasks when changed
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('js/main.js', ['compress']);
  gulp.watch('pug/**/*.pug', ['pug']);
  gulp.watch('img/*.{jpg,png,gif,jpeg}', ['images']);
});

// todo: fails on first run. wait till sass/compress is done before pug...
gulp.task('default', ['sass', 'compress', 'pug', 'images', 'watch']);