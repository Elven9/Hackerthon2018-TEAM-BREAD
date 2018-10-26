const path = require('path');

module.exports = {
  // Initial all setting.
  configureWebpack(config) {
    return {
      resolve: {
        alias: {
          'page': path.resolve(__dirname, 'src/views/page/'),
          'view': path.resolve(__dirname, 'src/views/')
        }
      }
    }
  }
}