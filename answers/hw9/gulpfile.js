var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var webpack = require('gulp-webpack');
var inline = require('gulp-inline');
var gulpSequence = require('gulp-sequence');

// Compile Sass to CSS
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./src/css'));
});

// Watch Sass
// gulp.task('sass:watch', function () {
//   gulp.watch('./src/sass/**/*.sass', ['sass']);
// });

// Add prefixer to CSS & nimify CSS
gulp.task('minify-css', function(){
  return gulp.src('./src/css/style.css')
  .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
  .pipe(cleanCSS())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('./dist'));
});

// Run Webpack & uglify JS
gulp.task('webpack', function() {
  return gulp.src('./src/js/index.js')
    .pipe(webpack( require('./webpack.config.js')))
    .pipe(gulp.dest('./dist'));
});

// Inline CSS & JS 
gulp.task('inline', function() {
  return gulp.src('./index.html')
      .pipe(inline({
        base: './'
      }))
      .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulpSequence('sass', 'minify-css', 'webpack', 'inline'));