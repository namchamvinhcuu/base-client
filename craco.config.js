const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          '@axios-config': './src/axios-config',
          '@constants': './src/constants',
          '@features': './src/features',
          '@libraries': './src/libraries',
          '@shared-components': './src/shared-components',
          '@utils': './src/utils',
        }
      }
    }
  ]
};
