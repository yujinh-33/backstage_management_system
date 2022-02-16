const path = require('path')

module.exports = {
  outputDir: './build',

  // 和webpack属性一致, 最后会进行合并
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src')
    }

    // 开发阶段跨域配置
    // config.devServer = {
    //   proxy: {
    //     '^/api': {
    //       target: 'http://152.136.185.210:5000',
    //       pathRewrite: {
    //         '^/api': ''
    //       },
    //       changeOrigin: true
    //     }
    //   }
    // }
  }
}
