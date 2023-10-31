const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('src/dist'));
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.ts', gulp.task('scripts'));
});

gulp.task('default', gulp.series('scripts', 'watch'));
