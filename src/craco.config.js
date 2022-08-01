const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@axios-config': path.resolve(__dirname, '.src/axios-config'),
      '@constants': path.resolve(__dirname, '.src/constants'),
      '@features': path.resolve(__dirname, '.src/features'),
      '@libraries': path.resolve(__dirname, '.src/libraries'),
      '@shared-components': path.resolve(__dirname, './src/shared-components'),
      '@utils': path.resolve(__dirname, '.src/utils'),
    },
    configure: {
      module: {
        rules: [
          {
            test: /react-spring/,
            sideEffects: true
          }
        ]
      }
    }
  },
};