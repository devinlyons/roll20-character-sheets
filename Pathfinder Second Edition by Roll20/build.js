const pug = require('pug');
const writeFileAtomic = require('write-file-atomic');
const sass = require('node-sass');

// Compile pathfinder2.pug, and render a set of data
writeFileAtomic('pathfinder2.html', pug.renderFile('pathfinder2.pug', {}));
var result = sass.renderSync({ file: 'pathfinder2.scss' });
writeFileAtomic('pathfinder2.css', result.css);
result = sass.renderSync({ file: 'pathfinder2.scss', outputStyle: 'compressed' });
writeFileAtomic('pathfinder2.min.css', result.css);