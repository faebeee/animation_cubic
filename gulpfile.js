'use strict';

let gulp = require('gulp');
let less = require('gulp-less');

gulp.task('less', function(){
    return gulp.src('./style.less')
        .pipe( less() )
        .pipe(gulp.dest('./'));
});

gulp.task('default', function(){
    gulp.watch('./*.less', ['less']);
})