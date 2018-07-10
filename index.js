// let EXIF = require('exif-js');
// module.exports = require("./lib/dropzone.js"); // Exposing dropzone
module.exports = define(["./lib/dropzone.js", 'exif-js'], function(dropzone, EXIF) {
  return dropzone;
});
