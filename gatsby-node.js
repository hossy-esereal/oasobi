/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});
exports.createPages = require('./gatsby-node/index').createPages;
