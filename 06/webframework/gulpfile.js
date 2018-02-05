const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rollup = require('gulp-better-rollup');
// const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');

var caches = [];
gulp.task('dev', () => {
  console.log('dev');
});
gulp.task('builddev', () => {
  return watch('./src/nodeuii/**/*.js', { ignoreInitial: false }, () => {
    gulp.src('./src/nodeuii/**/*.js')
      .pipe(babel({
        babelrc: false,
        "plugins": [
          "babel-plugin-transform-es2015-modules-commonjs"
        ]
      }))
      .pipe(gulp.dest('./build/'))
  })
});

gulp.task('buildother', () => {
  // gulp.src('./src/nodeuii/**/*.js')
  //   .pipe(babel({
  //     babelrc: false,
  //     // "ignore":['./src/nodeuii/app.js'],
  //     "plugins": [
  //       "babel-plugin-transform-es2015-modules-commonjs"
  //     ]
  //   }))
  //   .pipe(gulp.dest('./build/'))
});

gulp.task('buildapp', () => {
  gulp.src('./src/nodeuii/**/*.js')
    .pipe(rollup({
      // any option supported by Rollup can be set here.
      // input: './src/nodeuii/app.js',
      format: 'cjs',
      "plugins": [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
      ],
      separateCaches: caches
    }))
    .pipe(gulp.dest('./build/'))
});
const _flag = process.env.NODE_ENV == "production";
let _task = ['builddev'];
if(_flag){
  _task = ['buildother','buildapp'];
}
gulp.task('default', _task);
