var gulp = require('gulp');
const babel = require('gulp-babel');
const srcArray = ['src/*.js', 'src/**/*.js'];
// const publicArray = ['public/scripts/**.js','!public/scripts/**.es.js'];
gulp.task('default', ['babel'], () => {
    console.log('default');
});
gulp.task('babel', function () {
    console.log('babel exec');
    const babelStream = gulp.src(srcArray)
        .pipe(babel({
            presets: ['env',"stage-0"]
        }))
        .pipe(gulp.dest('dist'))
    return babelStream;
});
// gulp.task('publicBabel', ()=> {
//     console.log('publicBabel exec');
    
//     const babelStream = gulp.src(publicArray)
//     .pipe(babel({
//         presets: ['env',"stage-0"]
//     }))
//     .pipe(gulp.dest('dist/public/scripts'))
// return babelStream;
// });
var watcher = gulp.watch(srcArray, ['babel']);
watcher.on('change', (event) => {
    console.log('change exec');
    
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});