const gulp = require('gulp');
const sass = require('gulp-sass');

// SASS Compiler
gulp.task('styles', function() {
  gulp.src('./sass/**/*.scss') // read all subdirectories and files in /sass that is .scss
    .pipe(sass().on('error', sass.logError)) // pass errors
    .pipe(gulp.dest('./src/style')); // compile sass to this directory
});

// SASS Watchera
gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['styles']); // watch this dir and run 'styles' [sass/**/*.scss
});

gulp.task('default', ['watch']); // set default to run 'watch'i should've 