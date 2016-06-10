'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var Promise = require('es6-promise').Promise;

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('compress', function() {
	  return gulp.src(['src/assets/vendor/jquery/dist/jquery.js','src/assets/vendor/bootstrap-sass/assets/javascripts/bootstrap/*.js','js/*.js'])
	    .pipe(uglify())
	    .pipe(concat('javascript.js'))
	    .pipe(gulp.dest('js/min/'));
	});
  
gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});
gulp.task('fonts', function() {
	  return gulp.src('src/assets/vendor/bootstrap-sass/assets/fonts/**/*')
	  .pipe(gulp.dest('fonts'))
	})
gulp.task('css', function () {
	  return gulp.src('./src/assets/sass/*.scss')
	    .pipe(sass.sync().on('error', sass.logError))
	    //.pipe(autoprefixer())
	   // .pipe(cleanCSS({compatibility: 'ie8'}))
	    .pipe(gulp.dest('./css/intermediate'));
	});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
