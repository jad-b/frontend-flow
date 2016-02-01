'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
        replaceString: /\bgulp[\-.]/
    });

var src = 'app/src/',
    dest = 'app/dist/';

gulp.task('build', [
    'build:js',
    'build:vendor-js',
    'build:html',
    'build:css'
]);

/* Copy all the vendor javascript into our destination js folder */
gulp.task('build:vendor-js', function() {
    gulp.src(plugins.mainBowerFiles())
        .pipe(gulp.dest(dest + 'js'));
});

/* Concat all of our javascript into our destination js folder */
gulp.task('build:js', function() {
    gulp.src(src + 'js/*.js')
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dest + 'js'));
});

gulp.task('build:html', function() {
    gulp.src(src + 'index.html')
        .pipe(gulp.dest(dest));
});

gulp.task('build:css', function() {
        gulp.src(src + 'css/*.css')
            .pipe(gulp.dest(dest + 'css'));
});

gulp.task('serve', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: dest
        }
    });

    gulp.watch(src + 'js/*.js', ['build:js']);
    gulp.watch(src + 'index.html', ['build:html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
