const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
var url = require('url');
var proxy = require('proxy-middleware');

gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream());
});

gulp.task('styles', () => {
  return gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
});

gulp.task('img', () => {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest('build/img'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
  return gulp.src('src/js/**/*')
    .pipe(webpack({
        mode: 'development',
        devtool: 'source-map',
        output: {
          filename: 'script.js'
        },
        module: {
          rules: [
            {
              test: /\.js?$/,
              use: 'babel-loader'
            }
          ]
        }
      }))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream());
});

gulp.task('del', (c) => {
  del('build/*');
  c();
});

gulp.task('websrv', () => {

  var proxyOptions = url.parse('http://192.168.56.10/api/');
  proxyOptions.route = '/api/';

  browserSync.init({
        server: 'build',
        middleware: [proxy(proxyOptions)]
    });

  gulp.watch('src/*.html', gulp.series('html'));
  gulp.watch('src/css/*.css', gulp.series('styles'));
  gulp.watch('src/js/**/*', gulp.series('scripts'));
  gulp.watch('src/img/**/*', gulp.series('img'));
});

gulp.task('run_parallel', gulp.parallel('html', 'styles', 'scripts', 'img'));
gulp.task('run', gulp.series('del', 'run_parallel', 'websrv'));
