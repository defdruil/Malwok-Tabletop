// Requis
var gulp = require('gulp');
var concat = require('gulp-concat');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './src'; // dossier de travail
var destination = './dist'; // dossier à livrer

gulp.task('scripts', function () {
    return gulp.src('./**/*.js')
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./dist/'));
});