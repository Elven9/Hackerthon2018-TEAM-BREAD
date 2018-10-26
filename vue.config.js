// Include Path module
const Path = require('path');

// Include webpack
const Webpack = require('webpack');

module.exports = {
  // Initial all setting.
  configureWebpack(config) {
    // Add Setting.
    return {
      resolve: {
        alias: {
          'page': Path.resolve(__dirname, 'src/views/page/'),
          'view': Path.resolve(__dirname, 'src/views/')
        }
      },
      plugins: [
        new Webpack.ProvidePlugin({
          _: 'lodash'
        })
      ]
    }
  }
}