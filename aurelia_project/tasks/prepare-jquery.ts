import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';

export default function prepareJquery() {

  const taskJs = gulp.src('node_modules/jquery/dist/*')
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest('wwwroot/scripts/js'));

  return merge(taskJs);
}