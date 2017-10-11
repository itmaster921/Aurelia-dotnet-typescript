import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';

export default function prepareFontGlyphicon() {

  const taskFontsGlyphicons = gulp.src('node_modules/bootstrap/fonts/*')
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest('wwwroot/fonts'));

  // return merge(taskCss, taskFonts);
  return merge(taskFontsGlyphicons);
}