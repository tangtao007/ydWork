const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');

var caches = [];
gulp.task('dev', () => {
  console.log('dev');
  gulp.watch('./src/nodeuii/**/*.js', function(event) {
    console.log('File ' + event.path + ' was ' + event.type);      
});
});
gulp.task('builddev', () => {
  console.log('builddev');
  return gulp.watch('./src/nodeuii/**/*.js', { ignoreInitial: false }, () => {
    gulp.src('./src/nodeuii/**/*.js')
      .pipe(babel({
        babelrc: false,
        "plugins": [
          "transform-decorators-legacy",
          "babel-plugin-transform-es2015-modules-commonjs"
        ]
      }))
      .pipe(gulp.dest('./build/'))
  })
});

gulp.task('buildconfig', () => {
  gulp.src('./src/nodeuii/**/*.js')
    .pipe(rollup({
      // any option supported by Rollup can be set here.
      // input: './src/nodeuii/app.js',
      format: 'cjs',
      input:"./src/nodeuii/config/env.js",
      "plugins": [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
      ]
    }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('buildprod', () => {
    gulp.src('./src/nodeuii/**/*.js')
      .pipe(babel({
        babelrc: false,
        ignore:"./src/nodeuii/config/env.js",
        "plugins": [
          "transform-decorators-legacy",
          "babel-plugin-transform-es2015-modules-commonjs"
        ]
      }))
      .pipe(gulp.dest('./build/'))
});


const _flag = process.env.NODE_ENV == "production";
let _task = ['builddev'];
if(_flag){
  _task = ['buildconfig','buildprod'];
}
gulp.task('default', _task);
