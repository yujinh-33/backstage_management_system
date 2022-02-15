const path = require('path')

module.exports = {
  outputDir: './build',

  // 和webpack属性一致, 最后会进行合并
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
