var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
//var sass        = require('gulp-sass');

// Static Server + watching scss/html files
//gulp.task('serve', ['sass'], function() {
gulp.task('serve', [], function() {

    browserSync.init({
        // server: "./app"
        server:{
          baseDir:"./"
        }
    });

    // gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./css/*.css").on('change', browserSync.reload);
    gulp.watch("./img/*").on('change', browserSync.reload);
    gulp.watch("./js/*").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src("app/scss/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("app/css"))
//         .pipe(browserSync.stream());
// });

gulp.task('default', ['serve']);
