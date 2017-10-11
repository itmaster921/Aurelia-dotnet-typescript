import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';

export default function prepareFontAwesome() {

  // const taskCss = gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
  //   .pipe(changedInPlace({ firstPass: true }))
  //   .pipe(gulp.dest('wwwroot/scripts/css'));

  const taskFonts = gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest('wwwroot/fonts'));

  // return merge(taskCss, taskFonts);
  return merge(taskFonts);
}