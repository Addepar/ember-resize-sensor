/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-resize-sensor',

  options: {
    nodeAssets: {
      'css-element-queries': {
        vendor: {
          srcDir: 'src',
          destDir: 'resize-sensor',
          include: ['ResizeSensor.js']
        }
      }
    }
  },

  included(parent) {
    let app = parent;

    while (!app.import) {
      app = app.parent;
    }

    app.import('vendor/resize-sensor/ResizeSensor.js', {
      using: [
        { transformation: 'amd', as: 'resize-sensor' }
      ]
    });
  }
};
