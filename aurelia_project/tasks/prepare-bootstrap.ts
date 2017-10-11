import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';

export default function prepareBootstrap() {

  const taskJs = gulp.src('node_modules/bootstrap/dist/js/*')
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest('wwwroot/scripts/js'));

  const taskSubJs = gulp.src('node_modules/bootstrap/js/dropdown.js')
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest('wwwroot/scripts/js'));

  const taskFonts = gulp.src('node_modules/bootstrap/dist/fonts/*')
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest('wwwroot/scripts/fonts'));

  return merge(taskJs, taskSubJs, taskFonts);
}