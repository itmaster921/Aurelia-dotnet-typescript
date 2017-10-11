import * as gulp from 'gulp';
import transpile from './transpile';
import processMarkup from './process-markup';
import processCSS from './process-css';
import copyFiles from './copy-files';
import {build} from 'aurelia-cli';
import prepareFontAwesome from './prepare-font-awesome'; // Import font awesome
import prepareFontGlyphicon from './prepare-font-glyphicon'; // Import glyphicons font
import prepareBootstrap from './prepare-bootstrap'; // Import bootstrap
import prepareJquery from './prepare-jquery'; // Import jquery
import * as project from '../aurelia.json';  // Import Aurelia.json

export default gulp.series(
  readProjectConfiguration,
  gulp.parallel(
    transpile,
    processMarkup,
    processCSS,
    copyFiles,
    prepareJquery,
    prepareFontAwesome,
    prepareFontGlyphicon,
    prepareBootstrap
  ),
  writeBundles
);

function readProjectConfiguration() {
  return build.src(project);
}

function writeBundles() {
  return build.dest();
}
