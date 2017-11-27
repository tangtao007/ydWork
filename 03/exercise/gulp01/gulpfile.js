var gulp = require('gulp');
var gulify = require('gulp-uglify');
var concat = require('gulp-concat');
var paths = {
  scripts:['js/index.js','js/main.js']
}
gulp.task('default', function() {
  gulp.src(paths.scripts)
    .pipe(gulify())
    .pipe(concat('all.main.js'))
    .pipe(gulp.dest('build'));
});