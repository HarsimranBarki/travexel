var watch = require('gulp-watch');

gulp.task('watch', function () {
    watch('./app/index.html', function () {
        console.log("Its Woking");
    })
});