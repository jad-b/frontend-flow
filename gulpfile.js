'use strict';

import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

const src = {
        scss: 'app/scss/*.scss',
        css: 'app/css',
        js: 'app/js/*.js',
        html: 'app/*.html'
    },
    dest = {
        js: 'app/app.js',
        css: 'app/app.css',
    }

gulp.task('styles', () => {
  return gulp.src(src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', plugins.sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('scripts', () => {
    return gulp.src(src.js)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat(dest.js))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest.js));
});

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['serve']);
