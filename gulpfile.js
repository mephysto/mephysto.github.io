'use strict';

const autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  gulp = require('gulp'),
  gulpUtil = require('gulp-util'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'), 
  sourcemaps = require('gulp-sourcemaps')
  ;

// empty the dist and dev folders
gulp.task('styles', () => {
  return gulp.src(['src/scss/main.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'IE <= 10'],
      cascade: true
    }))
    .pipe(rename("global.min.css"))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`src/styles`))
    ;
});

gulp.task('watch', () => {
  gulp.watch(`src/scss/**/*.scss`, ['styles']);
});

gulp.task('default', ['styles']);