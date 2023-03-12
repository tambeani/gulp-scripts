/*
    Setting up a build task that,

    - uses gulp.src to find JSX files 
    - babel to process ES2015 and React
    - then concat to join each file together

*/

// Loading gulp plugins

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');


gulp.task('default', () => {
    // Find all files by using file globbing
    return gulp.src('app/*.jsx')
        
        // Starts watching source files to build source maps for debugging
        .pipe(sourcemaps.init())
        
        // Configure gulp-babel to use ES2015 and React(JSX)
        .pipe(babel({
            presets : ['@babel/preset-env','@babel/preset-react']
        }))

        // Concat all source files together into all.js
        .pipe(concat('all.js'))

        // Write source map files seperately
        .pipe(sourcemaps.write('.'))

        // Redirect all files to destination folder
        .pipe(gulp.dest('dest'));

})

