var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');

gulp.task('fileinclude', function() {
    // 适配page中所有文件夹下的所有html，排除page下的include文件夹中html
    gulp.src(['view/**/*.html','!view/base_ui_html/**.html'])
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('dist'));
});
