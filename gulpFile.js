var gulp = require('gulp');
var mainBowerFiles= require('main-bower-files');
var concat=         require('gulp-concat');
var webserver=      require('gulp-webserver');



//Copy bower files used to the assets directory
gulp.task('assets', function(){
    gulp.src(mainBowerFiles())
    .pipe(gulp.dest('app/src/assets/js/vendor'));
});



gulp.task('watch', function(){
    gulp.watch('app/src/**/**/*.js', ['concat']);
});


gulp.task("webserver", function (){
    gulp.src("app/src").pipe(webserver({
        livereload: true,
        open: true
    }));
});


//Concat js files to a single js
gulp.task('concat', function() {
    //gulp.src('app/src
    gulp.src(['app/src/app.js','app/src/**/*.js', '!app/src/assets/**/*', '!app/src/script.js'])
    .pipe(concat('script.js'))
          .pipe(gulp.dest('app/src'));
});


gulp.task('default', ['watch', 'concat', 'webserver']);