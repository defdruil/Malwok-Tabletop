/// <binding BeforeBuild='compile' />
// Requis
var gulp = require('gulp');
var concat = require('gulp-concat');
var typescript = require('gulp-tsc');
var del = require('del');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './src'; // dossier de travail
var destination = './dist'; // dossier à livrer

gulp.task('clean', function () {
    return del('dist/app.js');
});

gulp.task('compile', ['clean'], function () {
    gulp.src(['**/*.ts', '!node_modules/**/*.ts'])
      .pipe(typescript())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('dist/'))
});